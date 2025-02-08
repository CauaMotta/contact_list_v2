import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import ContactClass from '../../models/Contact'
import { useDispatch } from 'react-redux'
import { changeFavorite, edit, remove } from '../../store/reducers/Contacts'

type Props = ContactClass

const Contact = ({ id, name, email, phone, favorite }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [delet, setDelet] = useState(false)
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateName, setUpdateName] = useState('')

  useEffect(() => {
    if (email.length > 0) {
      setUpdateEmail(email)
    }
    if (phone.length > 0) {
      setUpdatePhone(phone)
    }
    if (name.length > 0) {
      setUpdateName(name)
    }
  }, [email, phone, name])

  const updateFavorite = (event: ChangeEvent<HTMLInputElement>) => {
    const favorite = event.target.checked
    dispatch(changeFavorite({ id, favorite }))
  }

  const cancelEditing = () => {
    setEditing(false)
    setUpdateName(name)
    setUpdateEmail(email)
    setUpdatePhone(phone)
  }

  const saveEditing = () => {
    if (updateName.length < 3) {
      alert('Por favor, insira um nome válido ao seu contato!')
    } else if (updateEmail === '' && updatePhone === '') {
      alert('Digite ao menos uma forma de contato!')
    } else if (updatePhone.includes('_')) {
      alert('Número de telefone inválido.')
    } else {
      dispatch(
        edit({ id, name: updateName, email: updateEmail, phone: updatePhone })
      )
      setEditing(false)
    }
  }

  return (
    <S.Container editing={editing} delet={delet}>
      <S.Header>
        <div>
          <label htmlFor={`${id}`}>
            {favorite ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </label>
          <input
            checked={favorite}
            onChange={updateFavorite}
            id={`${id}`}
            type="checkbox"
          />
          <S.NameInsert
            id="nameInput"
            disabled={!editing}
            value={updateName}
            onChange={({ target }) => setUpdateName(target.value)}
            placeholder="Digite um nome"
          />
        </div>
        <S.ActionBar>
          {!editing && !delet && (
            <>
              <S.ActionButton onClick={() => setDelet(true)}>
                <span>Apagar</span>
                <i className="fa-regular fa-trash-can"></i>
              </S.ActionButton>
              <S.ActionButton onClick={() => setEditing(true)}>
                <span>Editar</span>
                <i className="fa-solid fa-pen-to-square"></i>
              </S.ActionButton>
            </>
          )}
          {editing && (
            <>
              <span>Confirmar edição?</span>
              <S.ActionButton onClick={cancelEditing}>
                <span>Não</span>
                <i className="fa-solid fa-xmark"></i>
              </S.ActionButton>
              <S.ActionButton onClick={saveEditing}>
                <span>Sim</span>
                <i className="fa-solid fa-check"></i>
              </S.ActionButton>
            </>
          )}
          {delet && (
            <>
              <span>Apagar contato?</span>
              <S.ActionButton onClick={() => setDelet(false)}>
                <span>Não</span>
                <i className="fa-solid fa-xmark"></i>
              </S.ActionButton>
              <S.ActionButton onClick={() => dispatch(remove(id))}>
                <span>Sim</span>
                <i className="fa-solid fa-check"></i>
              </S.ActionButton>
            </>
          )}
        </S.ActionBar>
      </S.Header>
      <S.MainContent>
        <p>Email:</p>
        <S.DataInput
          mask=""
          disabled={!editing}
          value={updateEmail}
          onChange={({ target }) => setUpdateEmail(target.value)}
          placeholder={
            editing ? 'Digite um email válido' : 'Email não cadastrado!'
          }
        />
        <p>Telefone:</p>
        <S.DataInput
          mask="(99) 99999-9999"
          disabled={!editing}
          value={updatePhone}
          onChange={({ target }) => setUpdatePhone(target.value)}
          placeholder={
            editing
              ? 'Digite um número de telefone'
              : 'Telefone não cadastrado!'
          }
        />
      </S.MainContent>
    </S.Container>
  )
}

export default Contact

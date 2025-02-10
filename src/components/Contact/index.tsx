import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import ContactClass from '../../models/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorite, edit, remove } from '../../store/reducers/Contacts'
import { RootReducer } from '../../store'
import { changeEditing, changeRemoving } from '../../store/reducers/ActiveMode'

type Props = ContactClass

const Contact = ({ id, name, email, phone, favorite }: Props) => {
  const dispatch = useDispatch()
  const { editing, removing } = useSelector(
    (state: RootReducer) => state.active
  )

  const [editMode, setEditMode] = useState(false)
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

  const saveEditing = () => {
    if (updateName.length < 3) {
      alert('Por favor, insira um nome válido ao seu contato!')
    } else if (updateEmail === '' && updatePhone === '') {
      alert('Digite ao menos uma forma de contato!')
    } else if (updatePhone.includes('_')) {
      alert('Número de telefone inválido.')
    } else if (!updateEmail.includes('@') || updateEmail.includes(' ')) {
      alert('Insira um email válido.')
    } else {
      setUpdateName(updateName.trim())
      dispatch(
        edit({ id, name: updateName, email: updateEmail, phone: updatePhone })
      )
      setEditMode(false)
      dispatch(changeEditing(false))
    }
  }

  const deletContact = () => {
    dispatch(remove(id))
    dispatch(changeRemoving(false))
  }

  const enableDelet = () => {
    if (!editing && !removing) {
      if (removing === delet) {
        setDelet(true)
        dispatch(changeRemoving(true))
      }
    } else {
      alert('Você já está alterando um contato!')
    }
  }

  const enableEditing = () => {
    if (!editing && !removing) {
      if (editing === editMode) {
        setEditMode(true)
        dispatch(changeEditing(true))
      }
    } else {
      alert('Você já está alterando um contato!')
    }
  }

  const disableEditing = () => {
    setUpdateName(name)
    setUpdateEmail(email)
    setUpdatePhone(phone)
    setEditMode(false)
    dispatch(changeEditing(false))
  }

  const disableDelet = () => {
    setDelet(false)
    dispatch(changeRemoving(false))
  }

  return (
    <S.Container editing={editMode} delet={delet}>
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
            disabled={!editMode}
            value={updateName}
            onChange={({ target }) => setUpdateName(target.value)}
            placeholder="Digite um nome"
          />
        </div>
        <S.ActionBar>
          {!editMode && !delet && (
            <>
              <S.ActionButton onClick={enableDelet}>
                <span>Apagar</span>
                <i className="fa-regular fa-trash-can"></i>
              </S.ActionButton>
              <S.ActionButton onClick={enableEditing}>
                <span>Editar</span>
                <i className="fa-solid fa-pen-to-square"></i>
              </S.ActionButton>
            </>
          )}
          {editMode && (
            <>
              <span>Confirmar edição?</span>
              <S.ActionButton onClick={disableEditing}>
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
              <S.ActionButton onClick={disableDelet}>
                <span>Não</span>
                <i className="fa-solid fa-xmark"></i>
              </S.ActionButton>
              <S.ActionButton onClick={deletContact}>
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
          disabled={!editMode}
          value={updateEmail}
          onChange={({ target }) => setUpdateEmail(target.value.trimEnd())}
          placeholder={
            editMode ? 'Digite um email válido' : 'Email não cadastrado!'
          }
        />
        <p>Telefone:</p>
        <S.DataInput
          mask="(99) 99999-9999"
          disabled={!editMode}
          value={updatePhone}
          onChange={({ target }) => setUpdatePhone(target.value)}
          placeholder={
            editMode
              ? 'Digite um número de telefone'
              : 'Telefone não cadastrado!'
          }
        />
      </S.MainContent>
    </S.Container>
  )
}

export default Contact

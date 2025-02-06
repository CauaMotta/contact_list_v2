import { ChangeEvent, useEffect, useState } from 'react'
import {
  Container,
  Header,
  ActionBar,
  ActionButton,
  MainContent,
  TextArea
} from './styles'
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

  useEffect(() => {
    if (email.length > 0) {
      setUpdateEmail(email)
    }
    if (phone.length > 0) {
      setUpdatePhone(phone)
    }
  }, [email, phone])

  const updateFavorite = (event: ChangeEvent<HTMLInputElement>) => {
    const favorite = event.target.checked
    dispatch(changeFavorite({ id, favorite }))
  }

  const cancelEditing = () => {
    setEditing(false)
    setUpdateEmail(email)
    setUpdatePhone(phone)
  }

  const saveEditing = () => {
    dispatch(edit({ id, email: updateEmail, phone: updatePhone }))
    setEditing(false)
  }

  return (
    <Container editing={editing} delet={delet}>
      <Header>
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
          <p>{name}</p>
        </div>
        <ActionBar>
          {!editing && !delet && (
            <>
              <ActionButton onClick={() => setDelet(true)}>
                <span>Apagar</span>
                <i className="fa-regular fa-trash-can"></i>
              </ActionButton>
              <ActionButton onClick={() => setEditing(true)}>
                <span>Editar</span>
                <i className="fa-solid fa-pen-to-square"></i>
              </ActionButton>
            </>
          )}
          {editing && (
            <>
              <span>Confirmar edição?</span>
              <ActionButton onClick={cancelEditing}>
                <span>Não</span>
                <i className="fa-solid fa-xmark"></i>
              </ActionButton>
              <ActionButton onClick={saveEditing}>
                <span>Sim</span>
                <i className="fa-solid fa-check"></i>
              </ActionButton>
            </>
          )}
          {delet && (
            <>
              <span>Apagar contato?</span>
              <ActionButton onClick={() => setDelet(false)}>
                <span>Não</span>
                <i className="fa-solid fa-xmark"></i>
              </ActionButton>
              <ActionButton onClick={() => dispatch(remove(id))}>
                <span>Sim</span>
                <i className="fa-solid fa-check"></i>
              </ActionButton>
            </>
          )}
        </ActionBar>
      </Header>
      <MainContent>
        <p>Email:</p>
        <TextArea
          disabled={!editing}
          rows={1}
          value={updateEmail}
          onChange={({ target }) => setUpdateEmail(target.value)}
        />
        <p>Telefone:</p>
        <TextArea
          disabled={!editing}
          rows={1}
          value={updatePhone}
          onChange={({ target }) => setUpdatePhone(target.value)}
        />
      </MainContent>
    </Container>
  )
}

export default Contact

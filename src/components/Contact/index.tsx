import { ChangeEvent, useState } from 'react'
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
import { changeFavorite } from '../../store/reducers/Contacts'

type Props = ContactClass

const Contact = ({ id, name, email, phone, favorite }: Props) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const updateFavorite = (event: ChangeEvent<HTMLInputElement>) => {
    const favorite = event.target.checked
    dispatch(changeFavorite({ id, favorite }))
  }

  return (
    <Container>
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
          {editing === false ? (
            <>
              <ActionButton>
                <i className="fa-regular fa-trash-can"></i>
              </ActionButton>
              <ActionButton onClick={() => setEditing(!editing)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </ActionButton>
            </>
          ) : (
            <>
              <ActionButton onClick={() => setEditing(!editing)}>
                <i className="fa-solid fa-xmark"></i>
              </ActionButton>
              <ActionButton>
                <i className="fa-solid fa-check"></i>
              </ActionButton>
            </>
          )}
        </ActionBar>
      </Header>
      <MainContent>
        <p>Email:</p>
        <TextArea disabled={!editing} rows={1}>
          {email}
        </TextArea>
        <p>Telefone:</p>
        <TextArea disabled={!editing} rows={1}>
          {phone}
        </TextArea>
      </MainContent>
    </Container>
  )
}

export default Contact

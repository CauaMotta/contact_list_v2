import { useState } from 'react'
import { Container, Header, EditButton, MainContent, TextArea } from './styles'

const Contact = () => {
  const [favorite, setFavorite] = useState(false)
  const [editing, setEditing] = useState(false)

  return (
    <Container>
      <Header>
        <div>
          <label htmlFor="fav">
            {favorite ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </label>
          <input
            onChange={({ target }) => setFavorite(target.checked)}
            id="fav"
            type="checkbox"
          />
          <p>Nome de Teste da Silva</p>
        </div>
        <EditButton>
          <i className="fa-solid fa-pen-to-square"></i>
        </EditButton>
      </Header>
      <MainContent>
        <p>Email:</p>
        <TextArea disabled={!editing} rows={1}>
          testedasilva@gmail.com
        </TextArea>
        <p>Telefone:</p>
        <TextArea disabled={!editing} rows={1}>
          55+ (48) 9 99999999
        </TextArea>
      </MainContent>
    </Container>
  )
}

export default Contact

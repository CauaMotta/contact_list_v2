import { ChangeEvent, useState } from 'react'
import { MainContainer, Title, Line } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { register } from '../../store/reducers/Contacts'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const saving = () => {
    if (name.length == 0) {
      setErrorMessage('Digite um nome!')
      setError(true)
    } else if (email.length == 0 && phone.length == 0) {
      setErrorMessage('Nenhuma forma de contato preenchida!')
      setError(true)
    } else {
      dispatch(
        register({
          name,
          email,
          phone,
          favorite
        })
      )
      navigate('/')
    }
  }

  const verifyPhone = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value.length === 15) {
      if (target.value.includes('_')) {
        setPhone('')
      } else {
        setPhone(target.value)
      }
    }
  }

  return (
    <MainContainer>
      <Title>
        <i className="fa-solid fa-user-plus"></i> Novo contato
      </Title>
      <Line />
      <S.FormContainer>
        <S.Header>
          <div>
            <S.FavoriteButton htmlFor="fav">
              {favorite ? (
                <>
                  <i className="fa-solid fa-star"></i>
                  <span>Favorito!</span>
                </>
              ) : (
                <>
                  <i className="fa-regular fa-star"></i>
                  <span>Favoritar?</span>
                </>
              )}
            </S.FavoriteButton>
            <input
              id="fav"
              type="checkbox"
              checked={favorite}
              onChange={({ target }) => setFavorite(target.checked)}
            />
          </div>
          <S.NameInsert
            onChange={({ target }) => setName(target.value)}
            type="text"
            placeholder="Digite um nome"
          />
        </S.Header>
        <S.MainContent>
          <p>Email:</p>
          <S.DataInsert
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            placeholder="Digite um email"
          />
          <p>Telefone:</p>
          <S.DataInsert
            onChange={verifyPhone}
            mask="(99) 99999-9999"
            type="text"
            placeholder="Digite um telefone"
          />
        </S.MainContent>
      </S.FormContainer>
      <S.SaveContainer>
        <S.SaveButton onClick={saving} type="submit">
          Salvar <i className="fa-solid fa-check"></i>
        </S.SaveButton>
        {error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.SaveContainer>
    </MainContainer>
  )
}

export default Form

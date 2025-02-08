import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import { Title, Line } from '../../styles'
import { Container, FilterTitle, SearchContact, Button } from './styles'
import { changeTerm } from '../../store/reducers/Filter'

type Props = {
  showFilters?: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container>
      <Title>
        <i className="fa-solid fa-address-book"></i> Meus Contatos
      </Title>
      <Line />
      {!showFilters ? (
        <>
          <Button onClick={() => navigate('/')}>
            <i className="fa-solid fa-arrow-left"></i> Voltar
          </Button>
        </>
      ) : (
        <>
          <SearchContact
            onChange={({ target }) => dispatch(changeTerm(target.value))}
            type="text"
            placeholder="Procurar"
          />
          <ul>
            <FilterTitle>Filtros</FilterTitle>
            <FilterCard value="Todos" />
            <FilterCard value="Favoritos" />
          </ul>
          <Button onClick={() => navigate('/new')}>
            <i className="fa-solid fa-user-plus"></i> Adicionar
          </Button>
        </>
      )}
    </Container>
  )
}

export default Sidebar

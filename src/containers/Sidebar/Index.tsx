import { useDispatch } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { Title } from '../../styles'
import {
  Container,
  FilterTitle,
  Line,
  SearchContact,
  AddButton
} from './styles'
import { changeTerm } from '../../store/reducers/Filter'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Title>
        <i className="fa-solid fa-address-book"></i> Meus Contatos
      </Title>
      <Line />
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
      <AddButton>
        <i className="fa-solid fa-user-plus"></i> Adicionar
      </AddButton>
    </Container>
  )
}

export default Sidebar

import FilterCard from '../../components/FilterCard'
import { Title } from '../../styles'
import {
  Container,
  FilterTitle,
  Line,
  SearchContact,
  AddButton
} from './styles'

const Sidebar = () => {
  return (
    <Container>
      <Title>
        <i className="fa-solid fa-address-book"></i> Meus Contatos
      </Title>
      <Line />
      <SearchContact type="text" placeholder="Procurar" />
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

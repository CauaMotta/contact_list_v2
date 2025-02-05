import { useDispatch, useSelector } from 'react-redux'
import { CardContainer } from './styles'
import { changeFilter } from '../../store/reducers/Filter'
import { RootReducer } from '../../store'

type Props = {
  value: string
}

const FilterCard = ({ value }: Props) => {
  const dispatch = useDispatch()
  const { contact, filter } = useSelector((state: RootReducer) => state)

  const updateFilter = () => {
    if (value.toLowerCase() === 'todos') {
      dispatch(changeFilter(false))
    } else {
      dispatch(changeFilter(true))
    }
  }

  const counterContacts = () => {
    if (value.toLowerCase() === 'todos') {
      return contact.items.length
    } else {
      return contact.items.filter((item) => item.favorite === true).length
    }
  }

  const verifyActive = () => {
    if (value.toLowerCase() === 'todos' && !filter.favorites) {
      return true
    }
    if (value.toLowerCase() !== 'todos' && filter.favorites) {
      return true
    }
    return false
  }

  const counter = counterContacts()
  const active = verifyActive()

  return (
    <CardContainer active={active} onClick={updateFilter}>
      <span>{value}</span>
      <span>{counter}</span>
    </CardContainer>
  )
}

export default FilterCard

import { CardContainer } from './styles'

type Props = {
  value: string
}

const FilterCard = ({ value }: Props) => {
  return (
    <CardContainer>
      <p>{value}</p>
      <p>1</p>
    </CardContainer>
  )
}

export default FilterCard

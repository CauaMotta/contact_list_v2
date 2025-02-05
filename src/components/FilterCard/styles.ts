import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: boolean
}

export const CardContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  font-size: 0.8rem;
  color: ${(props) => (props.active ? variables.focus : variables.fontColor)};

  &:hover {
    color: ${variables.focus};
  }
`

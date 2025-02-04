import styled from 'styled-components'
import variables from '../../styles/variables'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  font-size: 0.8rem;
  color: ${variables.fontColor};

  &:hover {
    color: ${variables.focus};
  }
`

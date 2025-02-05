import styled from 'styled-components'
import variables from '../../styles/variables'

export const MainContainer = styled.main`
  padding: 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`

export const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  font-size: 1rem;
  color: ${variables.focus};

  span {
    font-size: 1.5rem;
  }
`

import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${variables.fontFamily};
    list-style: none;
  }

  body {
    background-color: ${variables.background}
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`

export const Title = styled.h2`
  color: ${variables.fontColor};
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export default GlobalStyle

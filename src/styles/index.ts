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
    background-color: ${({ theme }) => theme.colors.background}
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`

export const MainContainer = styled.main`
  padding: 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const Line = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.focus};
  border: none;
`

export const Button = styled.button`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 0.8rem;
  border: none;
  padding: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.focus};
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`

export default GlobalStyle

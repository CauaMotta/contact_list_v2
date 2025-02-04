import styled from 'styled-components'
import variables from '../../styles/variables'
import { Title } from '../../styles'

export const Container = styled.aside`
  padding: 16px;
  height: 100vh;
`

export const SearchContact = styled.input`
  width: 100%;
  border-radius: 1rem;
  background-color: ${variables.secondaryColor};
  border: 2px solid ${variables.secondaryColor};
  color: ${variables.fontColor};
  padding-inline: 0.5rem;
  margin: 1rem 0;
  outline: 0;

  &:focus {
    border: 2px solid ${variables.focus};
  }
`

export const FilterTitle = styled(Title)`
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
`

export const Line = styled.hr`
  color: ${variables.focus};
`

export const AddButton = styled.button`
  width: 100%;
  background-color: ${variables.secondaryColor};
  color: ${variables.fontColor};
  font-weight: 500;
  border-radius: 0.8rem;
  border: none;
  padding: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${variables.focus};
    color: ${variables.secondaryColor};
  }
`

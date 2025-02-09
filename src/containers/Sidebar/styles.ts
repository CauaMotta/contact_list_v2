import styled from 'styled-components'
import { Title } from '../../styles'

export const Container = styled.aside`
  padding: 16px;
  height: 100vh;
`

export const SearchContact = styled.input`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.fontColor};
  padding-inline: 0.5rem;
  margin: 1rem 0;
  outline: 0;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.focus};
  }
`

export const FilterTitle = styled(Title)`
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
`

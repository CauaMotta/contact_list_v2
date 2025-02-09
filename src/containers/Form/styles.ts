import styled from 'styled-components'
import InputMask from 'react-input-mask'
import variables from '../../styles/variables'

export const FormContainer = styled.form`
  margin-top: 2.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;

  div input {
    display: none;
  }

  label {
    cursor: pointer;
    color: ${variables.favColor};

    &:hover {
      color: ${variables.favHover};
    }
  }
`

export const FavoriteButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  color: ${variables.favColor};

  &:hover {
    color: ${variables.favHover};
  }
`

export const MainContent = styled.div`
  padding: 0 0.5rem;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`

export const DataInsert = styled(InputMask)`
  width: 100%;
  font-size: 0.85rem;
  line-height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  border-radius: 1rem;
  outline: none;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`

export const NameInsert = styled(DataInsert)`
  background-color: transparent;
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`

export const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.focus};
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.25rem 2rem;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.focus};
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.focus};
`

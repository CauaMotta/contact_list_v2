import styled from 'styled-components'
import variables from '../../styles/variables'
import InputMask from 'react-input-mask'

type Props = {
  editing: boolean
  delet: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  button {
    display: ${({ editing, delet }) => (editing || delet ? 'block' : 'none')};
  }
  input#nameInput {
    margin-left: ${({ editing }) => (editing ? '0.5rem' : '0')};
  }
  input {
    background-color: ${({ editing }) =>
      editing ? ({ theme }) => theme.colors.background : 'transparent'};
  }

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

    button {
      display: block;
    }
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;

  div:first-of-type {
    width: 100%;
  }

  input:first-of-type {
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

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-wrap: nowrap;

  span {
    color: ${({ theme }) => theme.colors.focus};
  }
`

export const ActionButton = styled.button`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    display: inline-block;
    width: 0;
    transform: translateX(25%);
    opacity: 0;
    transition: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.focus};
    span {
      transition:
        transform 0.2s ease-out,
        opacity 0.2s;
      width: auto;
      margin-right: 0.25rem;
      transform: translate(0);
      opacity: 1;
    }
  }
`

export const MainContent = styled.div`
  padding: 0 0.5rem;

  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
`

export const DataInput = styled(InputMask)`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-inline: 0.5rem;
  outline: none;
`

export const NameInsert = styled.input`
  width: 90%;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  outline: none;
  padding-inline: 0.5rem;
`

import styled from 'styled-components'
import variables from '../../styles/variables'
import InputMask from 'react-input-mask'

type Props = {
  editing: boolean
  delet: boolean
}

export const Container = styled.div<Props>`
  width: 100%;
  background-color: ${variables.secondaryColor};
  color: ${variables.fontColor};
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
      editing ? variables.background : 'transparent'};
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
  border-bottom: 2px solid ${variables.background};
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;

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

  span {
    color: ${variables.focus};
  }
`

export const ActionButton = styled.button`
  color: ${variables.fontColor};
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
    color: ${variables.focus};
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
  color: ${variables.fontColor};
  border: none;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  outline: none;
`

export const NameInsert = styled.input`
  color: ${variables.fontColor};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  outline: none;
  padding-left: 0.5rem;
`

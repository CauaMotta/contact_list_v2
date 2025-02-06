import styled from 'styled-components'
import variables from '../../styles/variables'

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
  textarea {
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

  input {
    display: none;
  }

  label {
    cursor: pointer;
    color: ${variables.favColor};

    &:hover {
      color: ${variables.favHover};
    }
  }

  p {
    display: inline;

    color: ${variables.fontColor};
    font-weight: 600;
    margin-left: 0.5rem;
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

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: ${variables.fontColor};
  border: none;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  resize: none;
  outline: none;
`

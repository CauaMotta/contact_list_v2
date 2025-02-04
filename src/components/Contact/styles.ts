import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  width: 100%;
  background-color: ${variables.secondaryColor};
  color: ${variables.fontColor};
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;

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

export const EditButton = styled.button`
  display: none;
  color: ${variables.fontColor};
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${variables.focus};
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
  background-color: transparent;
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: ${variables.fontColor};
  margin-bottom: 1rem;
  resize: none;
  border: none;
  outline: none;
  padding-left: 0.5rem;
`

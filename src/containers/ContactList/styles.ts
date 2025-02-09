import styled from 'styled-components'

export const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.focus};

  span {
    font-size: 1.5rem;
  }
`

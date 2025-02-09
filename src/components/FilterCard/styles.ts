import styled from 'styled-components'

type Props = {
  active: boolean
}

export const CardContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  font-size: 0.8rem;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.focus
      : ({ theme }) => theme.colors.fontColor};

  &:hover {
    color: ${({ theme }) => theme.colors.focus};
  }
`

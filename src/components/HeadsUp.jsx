import styled from 'styled-components'

const HeadsUp = styled.div`
  font-weight: 600;
  color: ${({ isDanger, isPrimary, theme }) => {
    if (isPrimary) {
      return theme.colorPrimary
    }

    if (isDanger) {
      return theme.colorDanger
    }

    return theme.colorDarker
  }};
  text-transform: uppercase;
  text-align: center;
`

export default HeadsUp

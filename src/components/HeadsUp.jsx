import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const HeadsUp = styled.div`
  font-weight: 600;
  color: ${({ isDanger, isPrimary, isSuccess, theme }) => {
    if (isPrimary) {
      return theme.colorPrimary
    }

    if (isDanger) {
      return theme.colorDanger
    }

    if (isSuccess) {
      return theme.colorSuccess
    }

    return theme.colorDarker
  }};
  text-transform: uppercase;
  text-align: center;
`

HeadsUp.defaultProps = {
  theme: lightTheme,
}

export default HeadsUp

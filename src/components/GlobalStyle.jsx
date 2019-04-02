import { createGlobalStyle } from 'styled-components'

import { light as lightTheme } from '../core/themes'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
    background-color: ${({ theme }) => theme.backgroundColor};
    margin: 0;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colorPrimary}
  }
`

GlobalStyle.defaultProps = {
  theme: lightTheme,
}

export default GlobalStyle

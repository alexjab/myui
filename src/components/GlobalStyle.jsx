import { createGlobalStyle } from 'styled-components'

import { light as lightTheme } from '../core/themes'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    background-color: ${props => props.theme.backgroundColor};
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

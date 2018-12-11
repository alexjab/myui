import { createGlobalStyle } from 'styled-components'

import defaultTheme from '../core/themes'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
  }
`

GlobalStyle.defaultProps = {
  theme: defaultTheme
}

export default GlobalStyle

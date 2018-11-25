import React from 'react'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'core/themes'

const DefaultTheme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>{children}</>
  </ThemeProvider>
)

export default DefaultTheme

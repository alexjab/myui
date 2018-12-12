import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { light as lightTheme, dark as darkTheme } from '../core/themes'

const ThemeProvider = ({ children, isDark }) => (
  <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <>{children}</>
  </StyledThemeProvider>
)

ThemeProvider.defaultProps = {
  isDark: false,
}

export default ThemeProvider

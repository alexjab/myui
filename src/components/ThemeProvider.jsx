import React from 'react'
import PropTypes from 'prop-types'
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

ThemeProvider.propTypes = {
  isDark: PropTypes.bool.isRequired,
}

export default ThemeProvider

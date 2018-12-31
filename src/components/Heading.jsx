import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H1.defaultProps = {
  theme: lightTheme,
}

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H2.defaultProps = {
  theme: lightTheme,
}

export const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.75em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H3.defaultProps = {
  theme: lightTheme,
}

export const H4 = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H4.defaultProps = {
  theme: lightTheme,
}

export const H5 = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H5.defaultProps = {
  theme: lightTheme,
}

export const H6 = styled.h6`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.125em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H6.defaultProps = {
  theme: lightTheme,
}

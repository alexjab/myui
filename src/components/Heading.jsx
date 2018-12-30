import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

export const H1 = styled.div`
  font-size: 2.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

H1.defaultProps = {
  theme: lightTheme,
}

export const H2 = styled.div`
  font-size: 2em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

export const H3 = styled.div`
  font-size: 1.75em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

export const H4 = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

export const H5 = styled.div`
  font-size: 1.25em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

export const H6 = styled.div`
  font-size: 1.125em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};
`

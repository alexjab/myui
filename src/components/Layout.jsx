import React from 'react'
import styled from 'styled-components'

import defaultTheme from '../core/themes'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasSpaceBetween }) =>
    hasSpaceBetween ? 'space-between' : 'flex-start'};

  border-top: ${({ hasBorderTop, theme }) =>
    hasBorderTop ? `1px solid ${theme.colorGreyLighter}` : 'none'};
  border-bottom: ${({ hasBorderBottom, theme }) =>
    hasBorderBottom ? `1px solid ${theme.colorGreyLighter}` : 'none'};
`

Row.defaultProps = {
  hasBorderTop: false,
  hasBorderBottom: false,
  theme: defaultTheme,
}

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: ${({ isRight }) => (isRight ? 'flex-end' : null)};

  padding: 5px;

  border-left: ${({ hasBorderLeft, theme }) =>
    hasBorderLeft ? `1px solid ${theme.colorGreyLighter}` : 'none'};
  border-right: ${({ hasBorderRight, theme }) =>
    hasBorderRight ? `1px solid ${theme.colorGreyLighter}` : 'none'};
`

Column.defaultProps = {
  hasBorderLeft: false,
  hasBorderRight: false,
  theme: defaultTheme,
}

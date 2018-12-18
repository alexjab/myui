import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ horizontalLayout }) => horizontalLayout};
  align-items: ${({ verticalLayout }) => verticalLayout};

  flex: ${({ isExpanded }) => (isExpanded ? '1' : null)};

  border-top: ${({ hasBorderTop, theme }) =>
    hasBorderTop ? `1px solid ${theme.colorGreyLight}` : null};
  border-right: ${({ hasBorderRight, theme }) =>
    hasBorderRight ? `1px solid ${theme.colorGreyLight}` : null};
  border-bottom: ${({ hasBorderBottom, theme }) =>
    hasBorderBottom ? `1px solid ${theme.colorGreyLight}` : null};
  border-left: ${({ hasBorderLeft, theme }) =>
    hasBorderLeft ? `1px solid ${theme.colorGreyLight}` : null};
`

Toolbar.defaultProps = {
  hasBorderTop: false,
  hasBorderRight: false,
  hasBorderBottom: false,
  hasBorderLeft: false,
  horizontalLayout: 'flex-start',
  isExpanded: false,
  theme: lightTheme,
  verticalLayout: 'stretch',
}

export default Toolbar

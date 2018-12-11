import React from 'react'
import styled from 'styled-components'

import defaultTheme from '../core/themes'

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ horizontalLayout }) => horizontalLayout};
  align-items: ${({ verticalLayout }) => verticalLayout};

  flex: ${({ isExpanded }) => (isExpanded ? '1' : null)};

  padding-top: ${({ padding, paddingTop }) => paddingTop || padding};
  padding-right: ${({ padding, paddingRight }) => paddingRight || padding};
  padding-bottom: ${({ padding, paddingBottom }) => paddingBottom || padding};
  padding-left: ${({ padding, paddingLeft }) => paddingLeft || padding};

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
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  padding: 0,
  horizontalLayout: 'flex-start',
  isExpanded: false,
  theme: defaultTheme,
  verticalLayout: 'stretch',
}

export default Toolbar

import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const Tag = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  display: inline-flex;
  padding: 4px 8px 4px 8px;
  border-radius: 3px;

  background-color: ${({ isPrimary, theme }) => {
    if (isPrimary) {
      return theme.colorPrimary
    }

    return theme.colorGreyLightest
  }};
  color: ${({ isPrimary, theme }) => {
    if (isPrimary) {
      return theme.colorWhite
    }

    return theme.colorDark
  }};

  user-select: none;
`

Tag.defaultProps = {
  theme: lightTheme,
}

export default Tag

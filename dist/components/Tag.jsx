import styled from 'styled-components'

const primary = '#1a73e8'
const danger = '#e34160'
const white = '#ffffff'
const dark = '#555555'
const darker = '#383838'
const darkest = '#222222'
const black = '#000000'
const greyLightest = '#f5f5f5'
const greyLighter = '#dcdcdc'
const greyLight = '#d3d3d3'
const grey = '#c0c0c0'
const greyDark = '#a9a9a9'
const greyDarker = '#808080'
const greyDarkest = '#696969'

const light = {
  fontFamily: 'Inter UI, sans-serif',
  fontSize: '12px',
  largeFontSize: '14px',
  colorPrimary: primary,
  colorDanger: danger,
  colorGreyDarkest: greyDarkest,
  colorGreyDarker: greyDarker,
  colorGreyDark: greyDark,
  colorGrey: grey,
  colorGreyLight: greyLight,
  colorGreyLighter: greyLighter,
  colorGreyLightest: greyLightest,
  colorWhite: white,
  colorDark: dark,
  colorDarker: darker,
  colorDarkest: darkest,
  colorBlack: black,
}

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
  theme: light,
}

export default Tag

import 'react'
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
  theme: light,
  verticalLayout: 'stretch',
}

export default Toolbar

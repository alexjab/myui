import 'react'
import styled from 'styled-components'

const primary = '#1a73e8'
const danger = '#e34160'
const white = '#ffffff'
const dark = '#555555'
const black = '#000000'
const greyLightest = '#f5f5f5'
const greyLighter = '#dcdcdc'
const greyLight = '#d3d3d3'
const grey = '#c0c0c0'
const greyDark = '#a9a9a9'
const greyDarker = '#808080'
const greyDarkest = '#696969'

const defaultTheme = {
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
  colorBlack: black,
  colorDark: dark,
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  flex: ${({ flex }) => (flex ? '1' : null)};
`
Row.defaultProps = {
  alignItems: 'flex-start',
  flex: false,
  justifyContent: 'flex-start',
  theme: defaultTheme,
}
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  flex: ${({ flex }) => (flex ? '1' : null)};
`
Column.defaultProps = {
  alignItems: 'flex-start',
  flex: false,
  justifyContent: 'flex-start',
  theme: defaultTheme,
}

export { Row, Column }

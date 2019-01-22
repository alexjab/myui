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

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 2.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H1.defaultProps = {
  theme: light,
}
const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 2em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H2.defaultProps = {
  theme: light,
}
const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.75em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H3.defaultProps = {
  theme: light,
}
const H4 = styled.h4`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H4.defaultProps = {
  theme: light,
}
const H5 = styled.h5`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.25em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H5.defaultProps = {
  theme: light,
}
const H6 = styled.h6`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.125em;
  font-weight: 600;
  color: ${({ theme }) => theme.colorDarkest};

  ${({ isInline }) => (isInline ? 'display: inline;' : null)}
`
H6.defaultProps = {
  theme: light,
}

export { H1, H2, H3, H4, H5, H6 }

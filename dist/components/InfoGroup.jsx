import React from 'react'
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

const KeyCell = styled.td`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  color: ${({ theme }) => theme.colorGreyDark};
  font-weight: bold;
  padding-right: 20px;
`
KeyCell.defaultProps = {
  isLarge: false,
  theme: light,
}
const InfoGroup = styled.table`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  border-spacing: 8px 16px;
`
InfoGroup.defaultProps = {
  fields: [],
  isLarge: false,
  theme: light,
  title: '',
}
const GroupHead = styled.thead`
  & th {
    text-align: left;
  }

  &:not(:first-child) th {
    padding-top: 20px;
  }
`

InfoGroup.Section = ({ fields, title }) =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(
      GroupHead,
      null,
      React.createElement('tr', null, React.createElement('th', null, title))
    ),
    React.createElement(
      'tbody',
      null,
      fields.map((field, index) =>
        React.createElement(
          'tr',
          {
            key: index,
          },
          React.createElement(KeyCell, null, field.label),
          React.createElement('td', null, field.data)
        )
      )
    )
  )

export default InfoGroup

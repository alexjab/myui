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

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border-top: 1px solid ${({ theme }) => theme.colorGreyLighter};
  border-bottom: 1px solid ${({ theme }) => theme.colorGreyLighter};
  border-left: 1px solid ${({ theme }) => theme.colorGreyLighter};
  padding: 10px;
  display: inline-flex;
  flex-direction: column;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.colorGreyLighter};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`
const ColorBlock = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${props => props.color};
`
const Label = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.colorGreyDarkest};
  text-transform: uppercase;
`
const Name = styled.div`
  margin-top: 5px;
  color: black;
  text-transform: uppercase;
  font-weight: 500;
`

const Color = ({ color, name, theme }) => {
  return React.createElement(
    Container,
    {
      theme: theme,
    },
    React.createElement(ColorBlock, {
      color: color,
    }),
    React.createElement(
      Label,
      {
        theme: theme,
      },
      color.toUpperCase()
    ),
    React.createElement(
      Name,
      {
        theme: theme,
      },
      name || 'Unnamed color'
    )
  )
}

Color.defaultProps = {
  theme: light,
}

export default Color

import React from 'react';
import { ThemeProvider } from 'styled-components';

const primary = '#1a73e8';
const danger = '#e34160';
const white = '#ffffff';
const dark = '#555555';
const darkest = '#222222';
const black = '#000000';
const greyLightest = '#f5f5f5';
const greyLighter = '#dcdcdc';
const greyLight = '#d3d3d3';
const grey = '#c0c0c0';
const greyDark = '#a9a9a9';
const greyDarker = '#808080';
const greyDarkest = '#696969';

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
  colorBlack: black,
  colorDark: dark
};
const dark$1 = {
  fontFamily: 'Inter UI, sans-serif',
  fontSize: '12px',
  largeFontSize: '14px',
  backgroundColor: darkest,
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
  colorDark: dark
};

const ThemeProvider$1 = ({
  children,
  isDark
}) => React.createElement(ThemeProvider, {
  theme: isDark ? dark$1 : light
}, React.createElement(React.Fragment, null, children));

ThemeProvider$1.defaultProps = {
  isDark: false
};

export default ThemeProvider$1;
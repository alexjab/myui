import 'react';
import styled from 'styled-components';

const primary = '#1a73e8';
const danger = '#e34160';
const white = '#ffffff';
const dark = '#555555';
const black = '#000000';
const greyLightest = '#f5f5f5';
const greyLighter = '#dcdcdc';
const greyLight = '#d3d3d3';
const grey = '#c0c0c0';
const greyDark = '#a9a9a9';
const greyDarker = '#808080';
const greyDarkest = '#696969';

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
  colorDark: dark
};

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({
  horizontalLayout
}) => horizontalLayout};
  align-items: ${({
  verticalLayout
}) => verticalLayout};

  flex: ${({
  isExpanded
}) => isExpanded ? '1' : null};

  padding-top: ${({
  padding,
  paddingTop
}) => paddingTop || padding};
  padding-right: ${({
  padding,
  paddingRight
}) => paddingRight || padding};
  padding-bottom: ${({
  padding,
  paddingBottom
}) => paddingBottom || padding};
  padding-left: ${({
  padding,
  paddingLeft
}) => paddingLeft || padding};

  border-top: ${({
  hasBorderTop,
  theme
}) => hasBorderTop ? `1px solid ${theme.colorGreyLight}` : null};
  border-right: ${({
  hasBorderRight,
  theme
}) => hasBorderRight ? `1px solid ${theme.colorGreyLight}` : null};
  border-bottom: ${({
  hasBorderBottom,
  theme
}) => hasBorderBottom ? `1px solid ${theme.colorGreyLight}` : null};
  border-left: ${({
  hasBorderLeft,
  theme
}) => hasBorderLeft ? `1px solid ${theme.colorGreyLight}` : null};
`;
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
  verticalLayout: 'stretch'
};

export default Toolbar;

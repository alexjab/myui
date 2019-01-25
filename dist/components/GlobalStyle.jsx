import{createGlobalStyle as o}from"styled-components";const r={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},e=o`
  body {
    font-family: ${o=>o.theme.fontFamily};
    font-size: ${o=>o.theme.fontSize};
    background-color: ${o=>o.theme.backgroundColor};
    margin: 0;
  }

  a {
    font-weight: 500;
    color: ${({theme:o})=>o.colorPrimary}
  }
`;e.defaultProps={theme:r};export default e;

import e from"react";import r from"styled-components";const o={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorSuccess:"#34d47a",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},t=r.div`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${e=>e.theme.fontSize};

  border-top: 1px solid ${({theme:e})=>e.colorGreyLighter};
  border-bottom: 1px solid ${({theme:e})=>e.colorGreyLighter};
  border-left: 1px solid ${({theme:e})=>e.colorGreyLighter};
  padding: 10px;
  display: inline-flex;
  flex-direction: column;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid ${({theme:e})=>e.colorGreyLighter};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`,l=r.div`
  width: 150px;
  height: 150px;
  background-color: ${e=>e.color};
`,c=r.div`
  margin-top: 5px;
  color: ${({theme:e})=>e.colorGreyDarkest};
  text-transform: uppercase;
`,i=r.div`
  margin-top: 5px;
  color: black;
  text-transform: uppercase;
  font-weight: 500;
`,a=({color:r,name:o,theme:a})=>e.createElement(t,{theme:a},e.createElement(l,{color:r}),e.createElement(c,{theme:a},r.toUpperCase()),e.createElement(i,{theme:a},o||"Unnamed color"));a.defaultProps={theme:o};export default a;

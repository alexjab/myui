import e from"react";import t from"styled-components";const r={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},o=t.td`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({isLarge:e,theme:t})=>e?t.largeFontSize:t.fontSize};

  color: ${({theme:e})=>e.colorGreyDark};
  font-weight: bold;
  padding-right: 20px;
`;o.defaultProps={isLarge:!1,theme:r};const l=t.table`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({isLarge:e,theme:t})=>e?t.largeFontSize:t.fontSize};

  border-spacing: 8px 16px;
`;l.defaultProps={fields:[],isLarge:!1,theme:r,title:""};const a=t.thead`
  & th {
    text-align: left;
  }

  &:not(:first-child) th {
    padding-top: 20px;
  }
`;l.Section=(({fields:t,title:r})=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement("tr",null,e.createElement("th",null,r))),e.createElement("tbody",null,t.map((t,r)=>e.createElement("tr",{key:r},e.createElement(o,null,t.label),e.createElement("td",null,t.data))))));export default l;

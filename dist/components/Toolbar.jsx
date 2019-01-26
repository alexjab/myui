import"react";import o from"styled-components";const r={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorSuccess:"#34d47a",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},e=o.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({horizontalLayout:o})=>o};
  align-items: ${({verticalLayout:o})=>o};

  flex: ${({isExpanded:o})=>o?"1":null};

  border-top: ${({hasBorderTop:o,theme:r})=>o?`1px solid ${r.colorGreyLight}`:null};
  border-right: ${({hasBorderRight:o,theme:r})=>o?`1px solid ${r.colorGreyLight}`:null};
  border-bottom: ${({hasBorderBottom:o,theme:r})=>o?`1px solid ${r.colorGreyLight}`:null};
  border-left: ${({hasBorderLeft:o,theme:r})=>o?`1px solid ${r.colorGreyLight}`:null};
`;e.defaultProps={hasBorderTop:!1,hasBorderRight:!1,hasBorderBottom:!1,hasBorderLeft:!1,horizontalLayout:"flex-start",isExpanded:!1,theme:r,verticalLayout:"stretch"};export default e;

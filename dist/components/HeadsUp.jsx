import r from"styled-components";const o={fontFamily:"Inter, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorSuccess:"#34d47a",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},e=r.div`
  font-weight: 600;
  color: ${({isDanger:r,isPrimary:o,isSuccess:e,theme:c})=>o?c.colorPrimary:r?c.colorDanger:e?c.colorSuccess:c.colorDarker};
  text-transform: uppercase;
  text-align: center;
  display: ${({isInline:r})=>r?"inline":"block"};
`;e.defaultProps={theme:o};export default e;

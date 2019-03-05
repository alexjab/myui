import r from"styled-components";const o={fontFamily:"Inter, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorSuccess:"#34d47a",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},e=r.div`
  font-family: ${r=>r.theme.fontFamily};
  font-size: ${({isLarge:r,theme:o})=>r?o.largeFontSize:o.fontSize};

  display: inline-flex;
  padding: 4px 8px 4px 8px;
  border-radius: 3px;

  background-color: ${({isPrimary:r,isDark:o,theme:e})=>r?e.colorPrimary:o?e.colorDark:e.colorGreyLightest};
  color: ${({isPrimary:r,isDark:o,theme:e})=>r?e.colorWhite:o?e.colorGreyLightest:e.colorDark};

  user-select: none;
`;e.defaultProps={theme:o};export default e;

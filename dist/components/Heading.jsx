import"react";import o from"styled-components";const e={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},t=o.h1`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 2.5em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;t.defaultProps={theme:e};const r=o.h2`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 2em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;r.defaultProps={theme:e};const n=o.h3`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.75em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;n.defaultProps={theme:e};const l=o.h4`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.5em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;l.defaultProps={theme:e};const i=o.h5`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.25em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;i.defaultProps={theme:e};const a=o.h6`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1.125em;
  font-weight: 600;
  color: ${({theme:o})=>o.colorDarkest};

  ${({isInline:o})=>o?"display: inline;":null}
`;a.defaultProps={theme:e};export{t as H1,r as H2,n as H3,l as H4,i as H5,a as H6};

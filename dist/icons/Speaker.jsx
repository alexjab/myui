import e from"react";import r from"styled-components";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const n=({name:r,size:n,...i})=>e.createElement("span",t({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${n||"20px"}" height="${n||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-speaker"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line></svg>`}},i));n.iconName="speaker";export default r(n)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

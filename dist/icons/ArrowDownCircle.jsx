import e from"react";import r from"styled-components";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}const t=({name:r,size:t,...o})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${t||"20px"}" height="${t||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>`}},o));t.iconName="arrow-down-circle";export default r(t)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

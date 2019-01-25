import e from"react";import r from"styled-components";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}const c=({name:r,size:c,...n})=>e.createElement("span",t({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${c||"20px"}" height="${c||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`}},n));c.iconName="more-vertical";export default r(c)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

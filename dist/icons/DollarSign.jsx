import e from"react";import t from"styled-components";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const r=({name:t,size:r,...o})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${r||"20px"}" height="${r||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`}},o));r.iconName="dollar-sign";export default t(r)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

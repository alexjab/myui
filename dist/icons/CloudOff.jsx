import e from"react";import t from"styled-components";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const r=({name:t,size:r,...o})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${r||"20px"}" height="${r||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-off"><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`}},o));r.iconName="cloud-off";export default t(r)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

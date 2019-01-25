import e from"react";import t from"styled-components";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const o=({name:t,size:o,...r})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${o||"20px"}" height="${o||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation-2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`}},r));o.iconName="navigation-2";export default t(o)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;

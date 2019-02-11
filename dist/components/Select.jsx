import e from"react";import t from"styled-components";function l(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e}).apply(this,arguments)}const n=({name:t,size:l,...n})=>e.createElement("span",o({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${l||"20px"}" height="${l||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`}},n));n.iconName="chevron-down";var i=t(n)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const s=({name:t,size:l,...n})=>e.createElement("span",o({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${l||"20px"}" height="${l||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`}},n));s.iconName="chevron-up";var r=t(s)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const a=t.div`
  width: 100%;
  outline: none;
  cursor: pointer;
  position: relative;

  ${({disabled:e})=>e?"cursor: not-allowed;":null}
`,c=t.div`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({theme:e})=>e.fontSize};

  background-color: ${({disabled:e,theme:t})=>e?t.colorGreyLightest:t.colorWhite};
  color: ${({disabled:e,theme:t})=>e?t.colorGreyDark:t.colorBlack};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 28px);

  padding-left: 14px;
  padding-right: 14px;

  height: 32px;
  border: ${({theme:e})=>`1px solid ${e.colorGrey}`};
  border-radius: 4px;
`,d=t.span`
  width: 100%;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,p=t(r)`
  color: ${({theme:e})=>e.colorGrey};
`,h=t(i)`
  color: ${({theme:e})=>e.colorGrey};
`,u=t.div`
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme:e})=>e.colorGreyLight};
  border-top: none;
  width: 100%;
  box-shadow: 0 2px 5px ${({theme:e})=>e.colorGrey};
`,b=t.div`
  background-color: white;
  padding: 10px 5px;
  ${({isSelected:e,theme:t})=>e?`background-color: ${t.colorGreyLighter}`:null};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  user-select: none;

  &:hover {
    background-color: ${({theme:e})=>e.colorGreyLightest};
  }
`;export default class extends e.Component{constructor(t){super(t),l(this,"onOptionClick",e=>{e.stopPropagation();const{target:{dataset:{value:t,label:l}}}=e;if(this.props.value)return void this.setState({isOptionsVisible:!1},()=>{if(this.props.value!==t){const{onChange:e,onChangeValue:o}=this.props;e&&e({value:t,label:l}),o&&o(t)}});let o;this.setState(({selectedValue:e})=>(o=e,{selectedValue:t,selectedLabel:l,isOptionsVisible:!1}),()=>{if(o!==t){const{onChange:e,onChangeValue:t}=this.props,{selectedValue:l,selectedLabel:o}=this.state;e&&e({value:l,label:o}),t&&t(l)}})}),l(this,"onContainerClick",e=>{this.props.disabled||this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!e}))}),l(this,"onContainerBlur",e=>{this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!1}))}),l(this,"renderOptions",t=>{if(!t)return null;const{value:l}=this.props,{selectedValue:o}=this.state;return e.createElement(u,null,t.map((t,n)=>e.createElement(b,{key:n,"data-value":t.value,"data-label":t.label,onClick:this.onOptionClick,isSelected:l?t.value===l:t.value===o},t.label)))});const{defaultValue:o,options:n}=t;if(this.state={isOptionsVisible:!1,selectedValue:o||null,selectedLabel:null},o){const e=n.find(e=>e.value===o);e&&(this.state.selectedLabel=e.label)}}renderIcon(t){return t?e.createElement(p,null):e.createElement(h,null)}render(){const{children:t,options:l,value:n,disabled:i,onChangeValue:s,onChange:r,...p}=this.props,{isOptionsVisible:h,selectedValue:u,selectedLabel:b}=this.state;let v="";if(n){const e=l.find(e=>e.value===n);e&&(v=e.label)}else v=null===u?t:b;return e.createElement(a,o({},p,{tabIndex:"0",onClick:this.onContainerClick,onBlur:this.onContainerBlur,disabled:i}),e.createElement(c,{disabled:i},e.createElement(d,{value:null===b?t:b},v),this.renderIcon(h)),this.renderOptions(h?l:null))}}

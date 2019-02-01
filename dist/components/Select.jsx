import e from"react";import t from"styled-components";function l(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const o=({name:t,size:l,...o})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${l||"20px"}" height="${l||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`}},o));o.iconName="chevron-down";var i=t(o)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const s=({name:t,size:l,...o})=>e.createElement("span",n({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${l||"20px"}" height="${l||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`}},o));s.iconName="chevron-up";var r=t(s)`
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
`,p=t.span`
  width: 100%;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,d=t(r)`
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
  margin-top: -5px;
  width: 100%;
`,b=t.div`
  background-color: white;
  padding: 10px 5px;
  ${({isSelected:e,theme:t})=>e?`background-color: ${t.colorGreyLighter}`:null};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  user-select: none;

  &:first-child {
    margin-top: 5px;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colorGreyLightest};
  }
`;export default class extends e.Component{constructor(t){super(t),l(this,"onOptionClick",e=>{e.stopPropagation();const{target:{dataset:{value:t,label:l}}}=e;if(this.props.value)return void this.setState({isOptionsVisible:!1},()=>{if(this.props.value!==t){const{onChange:e,onChangeValue:n}=this.props;e&&e({value:t,label:l}),n&&n(t)}});let n;this.setState(({selectedValue:e})=>(n=e,{selectedValue:t,selectedLabel:l,isOptionsVisible:!1}),()=>{if(n!==t){const{onChange:e,onChangeValue:t}=this.props,{selectedValue:l,selectedLabel:n}=this.state;e&&e({value:l,label:n}),t&&t(l)}})}),l(this,"onContainerClick",e=>{this.props.disabled||this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!e}))}),l(this,"onContainerBlur",e=>{this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!1}))}),l(this,"renderOptions",t=>{if(!t)return null;const{value:l}=this.props,{selectedValue:n}=this.state;return e.createElement(u,null,t.map((t,o)=>e.createElement(b,{key:o,"data-value":t.value,"data-label":t.label,onClick:this.onOptionClick,isSelected:l?t.value===l:t.value===n},t.label)))});const{defaultValue:n,options:o}=t;if(this.state={isOptionsVisible:!1,selectedValue:n||null,selectedLabel:null},n){const e=o.find(e=>e.value===n);e&&(this.state.selectedLabel=e.label)}}renderIcon(t){return t?e.createElement(d,null):e.createElement(h,null)}render(){const{children:t,options:l,value:o,disabled:i,onChangeValue:s,onChange:r,...d}=this.props,{isOptionsVisible:h,selectedValue:u,selectedLabel:b}=this.state;let g="";if(o){const e=l.find(e=>e.value===o);e&&(g=e.label)}else g=null===u?t:b;return e.createElement(a,n({},d,{tabIndex:"0",onClick:this.onContainerClick,onBlur:this.onContainerBlur,disabled:i}),e.createElement(c,{disabled:i},e.createElement(p,{value:null===b?t:b},g),this.renderIcon(h)),this.renderOptions(h?l:null))}}

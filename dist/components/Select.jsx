import e from"react";import t from"styled-components";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}const i=({name:t,size:n,...i})=>e.createElement("span",l({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${n||"20px"}" height="${n||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`}},i));i.iconName="chevron-down";var o=t(i)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const s=({name:t,size:n,...i})=>e.createElement("span",l({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${n||"20px"}" height="${n||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`}},i));s.iconName="chevron-up";var r=t(s)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const a=t.div`
  width: 100%;
  outline: none;
  cursor: pointer;
  position: relative;
`,c=t.div`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({theme:e})=>e.fontSize};

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
`,h=t(r)`
  color: ${({theme:e})=>e.colorGrey};
`,d=t(o)`
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
`,f=t.div`
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
`;export default class extends e.Component{constructor(t){super(t),n(this,"onOptionClick",e=>{e.stopPropagation();const{target:{dataset:{value:t,label:n}}}=e;if(this.props.value)return void this.setState({isOptionsVisible:!1},()=>{if(this.props.value!==t){const{onChange:e,onChangeValue:l}=this.props;e&&e({value:t,label:n}),l&&l(t)}});let l;this.setState(({selectedValue:e})=>(l=e,{selectedValue:t,selectedLabel:n,isOptionsVisible:!1}),()=>{if(l!==t){const{onChange:e,onChangeValue:t}=this.props,{selectedValue:n,selectedLabel:l}=this.state;e&&e({value:n,label:l}),t&&t(n)}})}),n(this,"onContainerClick",e=>{e.target.focus(),this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!e}))}),n(this,"onContainerBlur",e=>{this.setState(({isOptionsVisible:e})=>({isOptionsVisible:!1}))}),n(this,"renderOptions",t=>{if(!t)return null;const{value:n}=this.props,{selectedValue:l}=this.state;return e.createElement(u,null,t.map((t,i)=>e.createElement(f,{key:i,"data-value":t.value,"data-label":t.label,onClick:this.onOptionClick,isSelected:n?t.value===n:t.value===l},t.label)))});const{defaultValue:l,options:i}=t;if(this.state={isOptionsVisible:!1,selectedValue:l||null,selectedLabel:null},l){const e=i.find(e=>e.value===l);e&&(this.state.selectedLabel=e.label)}}renderIcon(t){return t?e.createElement(h,null):e.createElement(d,null)}render(){const{children:t,options:n,value:l}=this.props,{isOptionsVisible:i,selectedValue:o,selectedLabel:s}=this.state;let r="";if(l){const e=n.find(e=>e.value===l);e&&(r=e.label)}else r=null===o?t:s;return e.createElement(a,{tabIndex:"0",onClick:this.onContainerClick,onBlur:this.onContainerBlur},e.createElement(c,null,e.createElement(p,{value:null===s?t:s},r),this.renderIcon(i)),this.renderOptions(i?n:null))}}

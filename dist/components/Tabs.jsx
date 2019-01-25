import e from"react";import t from"styled-components";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"};const l=t(class extends e.Component{constructor(...e){super(...e),r(this,"selectTab",()=>{const{index:e,selectTab:t}=this.props;t(e)})}render(){const{children:t,className:r,label:o}=this.props;return e.createElement("div",{className:r,onClick:this.selectTab},t,o?e.createElement(c,null,o):null)}})`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 13px;
  padding-bottom: 14px;

  color: ${({isSelected:e,theme:t})=>e?null:t.colorGreyDark};
  border-bottom: ${({isSelected:e,theme:t})=>e?`3px solid ${t.colorPrimary}`:"none"};
  height: 1em;

  font-weight: 600;

  cursor: pointer;
  user-select: none;
`;l.defaultProps={theme:o};class s extends e.Component{constructor(...e){super(...e),r(this,"state",{selected:this.props.defaultTab}),r(this,"selectTab",e=>{this.setState({selected:e});const{onChangeSelected:t}=this.props;t&&t(e)})}render(){const{children:t,className:r,tabs:o,theme:s}=this.props,{selected:a}=this.state;return o.length?e.createElement("div",{className:r},o.map((t,r)=>e.createElement(l,{key:r,index:r,isSelected:a===r,selectTab:this.selectTab,theme:s,label:t.label},t.title))):null}}r(s,"defaultProps",{defaultTab:0,tabs:[]});const a=t(s)`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${e=>e.theme.fontSize};

  border-bottom: ${({hasBorder:e,theme:t})=>e?`1px solid ${t.colorGreyLighter}`:null};
  display: flex;
`;a.defaultProps={hasBorder:!0,theme:o};const c=t.span`
  color: ${({theme:e})=>e.colorGreyDarker};
  font-weight: 600;
  margin-left: 10px;
`;c.defaultProps={theme:o};export default a;

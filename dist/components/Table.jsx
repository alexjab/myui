import e from"react";import t from"styled-components";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const l={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},n=({name:t,size:r,...l})=>e.createElement("span",o({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${r||"20px"}" height="${r||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`}},l));n.iconName="arrow-up";var s=t(n)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const i=({name:t,size:r,...l})=>e.createElement("span",o({dangerouslySetInnerHTML:{__html:`<svg xmlns="http://www.w3.org/2000/svg" width="${r||"20px"}" height="${r||"20px"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`}},l));i.iconName="arrow-down";var a=t(i)`
  height: ${({size:e})=>e||"20px"};
  display: inline-flex;
  align-items: center;
`;const c=t.table`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${e=>e.theme.fontSize};

  width: 100%;
  border-collapse: collapse;
`;c.defaultProps={theme:l};const p=t.td`
  padding: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colorGreyLighter};
`;p.defaultProps={theme:l};const d=t.th`
  padding: 8px;
  text-align: left;
  border-bottom: 3px solid ${({theme:e})=>e.colorGreyLighter};
  font-weight: bold;
  cursor: ${({isSortable:e})=>e?"pointer":null};
`,h=t.div`
  display: inline-flex;
  align-items: center;
`,m=t.div`
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colorGreyDarkest};
`;class y extends e.Component{constructor(...e){super(...e),r(this,"onSort",()=>{this.props.isSortable&&this.props.onSort(this.props.rowKey)})}render(){const{children:t,isSortable:r,sortOrder:o}=this.props;return e.createElement(d,{isSortable:r,onClick:this.onSort},e.createElement(h,null,t,r&&o?e.createElement(m,null,"asc"===o?e.createElement(s,{size:"1em"}):e.createElement(a,{size:"1em"})):null))}}y.defaultProps={theme:l};class u extends e.Component{constructor(e){super(e),r(this,"onSort",e=>{this.setState(({sortBy:t,sortOrder:r})=>{let o=null;return t&&t!==e?o="desc":"desc"===r?o="asc":null===r&&(o="desc"),{sortBy:e!==t?e:t,sortOrder:o}},()=>{this.props.onSort&&this.props.onSort(this.state.sortBy,this.state.sortOrder)})}),this.state={sortBy:e.defaultSortBy||null,sortOrder:void 0!==e.defaultSortBy?e.defaultSortOrder||"asc":null}}render(){const{headers:t,onSort:r,rows:o}=this.props,{sortBy:l,sortOrder:n}=this.state;return e.createElement(c,null,t?e.createElement("thead",null,e.createElement("tr",null,t.map(t=>e.createElement(y,{key:t.key,rowKey:t.key,isSortable:t.isSortable,onSort:this.onSort,sortOrder:l===t.key?n:null},t.title)))):null,o?e.createElement("tbody",null,o.map((r,o)=>e.createElement("tr",{key:o},t.map(t=>e.createElement(p,{key:t.key},r[t.key]))))):null)}}r(u,"defaultProps",{theme:l});export default u;

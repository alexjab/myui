import e from"react";import r from"styled-components";function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e){return Math.round(255*e)}function i(e,r,t){return o(e)+","+o(r)+","+o(t)}function s(e,r,t,a){if(void 0===a&&(a=i),0===r)return a(t,t,t);var n=e%360/60,o=(1-Math.abs(2*t-1))*r,s=o*(1-Math.abs(n%2-1)),f=0,l=0,u=0;n>=0&&n<1?(f=o,l=s):n>=1&&n<2?(f=s,l=o):n>=2&&n<3?(l=o,u=s):n>=3&&n<4?(l=s,u=o):n>=4&&n<5?(f=s,u=o):n>=5&&n<6&&(f=o,u=s);var d=t-o/2;return a(f+d,l+d,u+d)}var f={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var l=/^#[a-fA-F0-9]{6}$/,u=/^#[a-fA-F0-9]{8}$/,d=/^#[a-fA-F0-9]{3}$/,c=/^#[a-fA-F0-9]{4}$/,p=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,h=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,g=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,b=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;function m(e){if("string"!=typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");var r=function(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return f[r]?"#"+f[r]:e}(e);if(r.match(l))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(u)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(d))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(c)){var a=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:a}}var n=p.exec(r);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=h.exec(r);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var i=g.exec(r);if(i){var m="rgb("+s(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",y=p.exec(m);if(!y)throw new Error("Couldn't generate valid rgb string from "+r+", it returned "+m+".");return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var v=b.exec(r);if(v){var w="rgb("+s(parseInt(""+v[1],10),parseInt(""+v[2],10)/100,parseInt(""+v[3],10)/100)+")",k=p.exec(w);if(!k)throw new Error("Couldn't generate valid rgb string from "+r+", it returned "+w+".");return{red:parseInt(""+k[1],10),green:parseInt(""+k[2],10),blue:parseInt(""+k[3],10),alpha:parseFloat(""+v[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}function y(e){return function(e){var r,t=e.red/255,a=e.green/255,n=e.blue/255,o=Math.max(t,a,n),i=Math.min(t,a,n),s=(o+i)/2;if(o===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var f=o-i,l=s>.5?f/(2-o-i):f/(o+i);switch(o){case t:r=(a-n)/f+(a<n?6:0);break;case a:r=(n-t)/f+2;break;default:r=(t-a)/f+4}return r*=60,void 0!==e.alpha?{hue:r,saturation:l,lightness:s,alpha:e.alpha}:{hue:r,saturation:l,lightness:s}}(m(e))}var v=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function w(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function k(e){return w(Math.round(255*e))}function x(e,r,t){return v("#"+k(e)+k(r)+k(t))}function I(e,r,t){return s(e,r,t,x)}function F(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return v("#"+w(e)+w(r)+w(t));if("object"==typeof e&&void 0===r&&void 0===t)return v("#"+w(e.red)+w(e.green)+w(e.blue));throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function L(e,r,t,a){if("string"==typeof e&&"number"==typeof r){var n=m(e);return"rgba("+n.red+","+n.green+","+n.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof a)return a>=1?F(e,r,t):"rgba("+e+","+r+","+t+","+a+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===a)return e.alpha>=1?F(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}var $=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},j=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},E=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},D=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha},C="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.";function M(e){if("object"!=typeof e)throw new Error(C);if(j(e))return L(e);if($(e))return F(e);if(D(e))return function(e,r,t,a){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof a)return a>=1?I(e,r,t):"rgba("+s(e,r,t)+","+a+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===a)return e.alpha>=1?I(e.hue,e.saturation,e.lightness):"rgba("+s(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")}(e);if(E(e))return function(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return I(e,r,t);if("object"==typeof e&&void 0===r&&void 0===t)return I(e.hue,e.saturation,e.lightness);throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")}(e);throw new Error(C)}function P(e){return function e(r,t,a){return function(){var n=a.concat(Array.prototype.slice.call(arguments));return n.length>=t?r.apply(this,n):e(r,t,n)}}(e,e.length,[])}function R(e,r,t){return Math.max(e,Math.min(r,t))}function z(e,r){var t=y(r);return M(n({},t,{lightness:R(0,1,t.lightness-parseFloat(e))}))}var S=P(z);function q(e,r){var t=m(r);return L(n({},t,{alpha:R(0,1,(100*("number"==typeof t.alpha?t.alpha:1)-100*parseFloat(e))/100)}))}var G=P(q);const O={fontFamily:"Inter UI, sans-serif",fontSize:"12px",largeFontSize:"14px",colorPrimary:"#1a73e8",colorDanger:"#e34160",colorGreyDarkest:"#696969",colorGreyDarker:"#808080",colorGreyDark:"#a9a9a9",colorGrey:"#c0c0c0",colorGreyLight:"#d3d3d3",colorGreyLighter:"#dcdcdc",colorGreyLightest:"#f5f5f5",colorWhite:"#ffffff",colorDark:"#555555",colorDarker:"#383838",colorDarkest:"#222222",colorBlack:"#000000"},A=r.div`
  height: ${({isLarge:e})=>e?"38px":"30px"};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding-left: ${({iconLeft:e,isLarge:r})=>r?e?"10px":"8px":e?"6px":"4px"};
  padding-right: ${({iconRight:e,isLarge:r})=>r?e?"10px":"8px":e?"6px":"4px"};
`,B=r.div`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({isLarge:e,theme:r})=>e?r.largeFontSize:r.fontSize};

  display: ${({isFullWidth:e,theme:r})=>e?"flex":"inline-flex"};
  justify-content: flex-start;
  align-items: center;

  margin: 0;

  border: 1px solid
    ${({isFocused:e,theme:r,value:t})=>e?r.colorPrimary:t?r.colorGreyDark:"transparent"};
  box-shadow: ${({isFocused:e,theme:r})=>e?`0 0 10px ${G(.3,r.colorPrimary)}`:"none"};
  background-color: ${({isFocused:e,theme:r,value:t})=>e||t?"transparent":S(.03,r.colorGreyLightest)};
  border-radius: 4px;
  color: ${({theme:e})=>e.colorDark};
`,W=r.input`
  font-family: ${e=>e.theme.fontFamily};
  font-size: ${({isLarge:e,theme:r})=>e?r.largeFontSize:r.fontSize};

  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background: none;

  height: ${({isLarge:e})=>e?"36px":"28px"};

  margin-left: ${({iconLeft:e,isLarge:r})=>r?e?0:"10px":e?0:"8px"};
  margin-right: ${({iconRight:e,isLarge:r})=>r?e?0:"10px":e?0:"8px"};
`;class H extends e.Component{constructor(...e){super(...e),t(this,"state",{value:""}),t(this,"handleChange",e=>{const r=e.target.value,{value:t,onChange:a,onChangeValue:n}=this.props;if(void 0!==t)return a&&(e.persist(),a(e)),void(n&&n(r));this.setState({value:r},()=>{a&&(e.persist(),a(e)),n&&n(r)})}),t(this,"handleFocus",e=>{const{onFocus:r}=this.props;this.setState({isFocused:!0},()=>{r&&(e.persist(),r(e))})}),t(this,"handleBlur",()=>{const{onBlur:e}=this.props;this.setState({isFocused:!1},()=>{e&&(event.persist(),e(event))})}),t(this,"setInputRef",e=>{this.inputElement=e}),t(this,"focus",()=>{this.inputElement.focus()}),t(this,"handleMouseDown",e=>{e.preventDefault(),this.focus()})}render(){const{iconLeft:r,iconRight:t,isFullWidth:n,isLarge:o,theme:i,onChangeValue:s,...f}=this.props,{isFocused:l}=this.state,u=this.state.value||this.props.value||"";return e.createElement(B,{iconLeft:iconLeft,iconRight:iconRight,isFullWidth:n,isLarge:o,theme:i,value:u,isFocused:l,onFocus:this.handleFocus,onBlur:this.handleBlur},iconLeft?e.createElement(A,{iconLeft:iconLeft,isLarge:o,onMouseDown:this.handleMouseDown},e.createElement(r,{size:o?"16px":"14px"})):null,e.createElement(W,a({},f,{ref:this.setInputRef,iconLeft:iconLeft,iconRight:iconRight,isLarge:o,theme:i,value:u,onChange:this.handleChange})),iconRight?e.createElement(A,{iconRight:iconRight,onMouseDown:this.handleMouseDown,isLarge:o},e.createElement(t,{size:o?"16px":"14px",onMouseDown:this.handleMouseDown})):null)}}t(H,"defaultProps",{theme:O});export default H;

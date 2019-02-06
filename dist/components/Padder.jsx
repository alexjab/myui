import"react";import d from"styled-components";const i=d.div`
  padding-top: ${({padding:d,top:i})=>void 0!==i?i:d};
  padding-right: ${({padding:d,right:i})=>void 0!==i?i:d};
  padding-bottom: ${({padding:d,bottom:i})=>void 0!==i?i:d};
  padding-left: ${({padding:d,left:i})=>void 0!==i?i:d};

  ${({isInline:d})=>d?"display: inline;":null}
`;i.defaultProps={padding:"0px",isInline:!1};export default i;

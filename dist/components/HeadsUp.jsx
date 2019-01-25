import r from"styled-components";export default r.div`
  font-weight: 600;
  color: ${({isDanger:r,isPrimary:o,theme:e})=>o?e.colorPrimary:r?e.colorDanger:e.colorDarker};
  text-transform: uppercase;
`;

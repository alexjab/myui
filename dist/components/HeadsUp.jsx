import r from"styled-components";export default r.div`
  font-weight: 600;
  color: ${({isDanger:r,isPrimary:e,theme:o})=>e?o.colorPrimary:r?o.colorDanger:o.colorDarker};
  text-transform: uppercase;
  text-align: center;
`;

import 'react';
import styled from 'styled-components';

const Padder = styled.div`
  padding-top: ${({
  padding,
  top
}) => top || padding}px;
  padding-right: ${({
  padding,
  right
}) => right || padding}px;
  padding-bottom: ${({
  padding,
  bottom
}) => bottom || padding}px;
  padding-left: ${({
  padding,
  left
}) => left || padding}px;
`;
Padder.defaultProps = {
  top: 5,
  left: 5,
  right: 5,
  bottom: 5,
  padding: 5
};

export default Padder;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  border-top: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
  border-bottom: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
  border-left: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
  padding: 10px;
  display: inline-flex;
  flex-direction: column;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const ColorBlock = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${props => props.color};
`;
const Label = styled.div`
  margin-top: 5px;
  color: ${({
  theme
}) => theme.colorGreyDarkest};
  text-transform: uppercase;
`;
const Name = styled.div`
  margin-top: 5px;
  color: black;
  text-transform: uppercase;
  font-weight: 500;
`;

const Color = ({
  color,
  name
}) => {
  return React.createElement(Container, null, React.createElement(ColorBlock, {
    color: color
  }), React.createElement(Label, null, color.toUpperCase()), React.createElement(Name, null, name || 'Unnamed color'));
};

export default Color;

import React from 'react';
import styled from 'styled-components';

const KeyCell = styled.td`
  color: ${({
  theme
}) => theme.colorGreyDark};
  font-weight: bold;
  padding-right: 20px;
`;
const InfoGroup = styled.table`
  border-spacing: 8px 16px;
`;
const GroupHead = styled.thead`
  & th {
    text-align: left;
  }

  &:not(:first-child) th {
    padding-top: 20px;
  }
`;
InfoGroup.defaultProps = {
  title: '',
  fields: []
};

InfoGroup.Section = ({
  fields,
  title
}) => React.createElement(React.Fragment, null, React.createElement(GroupHead, null, React.createElement("tr", null, React.createElement("th", null, title))), React.createElement("tbody", null, fields.map((field, index) => React.createElement("tr", {
  key: index
}, React.createElement(KeyCell, null, field.label), React.createElement("td", null, field.data)))));

export default InfoGroup;

import React from 'react';
import styled from 'styled-components';

const primary = '#1a73e8';
const danger = '#e34160';
const white = '#ffffff';
const dark = '#555555';
const black = '#000000';
const greyLightest = '#f5f5f5';
const greyLighter = '#dcdcdc';
const greyLight = '#d3d3d3';
const grey = '#c0c0c0';
const greyDark = '#a9a9a9';
const greyDarker = '#808080';
const greyDarkest = '#696969';

const defaultTheme = {
  fontFamily: 'Inter UI, sans-serif',
  fontSize: '12px',
  largeFontSize: '14px',
  colorPrimary: primary,
  colorDanger: danger,
  colorGreyDarkest: greyDarkest,
  colorGreyDarker: greyDarker,
  colorGreyDark: greyDark,
  colorGrey: grey,
  colorGreyLight: greyLight,
  colorGreyLighter: greyLighter,
  colorGreyLightest: greyLightest,
  colorWhite: white,
  colorBlack: black,
  colorDark: dark
};

const Table = styled.table`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  width: 100%;
  border-collapse: collapse;
`;
Table.defaultProps = {
  theme: defaultTheme
};
Table.Row = styled.tr``;
Table.Row.defaultProps = {
  theme: defaultTheme
};
Table.Data = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({
  theme
}) => theme.colorGreyLighter};
`;
Table.Data.defaultProps = {
  theme: defaultTheme
};
Table.Header = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 3px solid ${({
  theme
}) => theme.colorGreyLighter};
  font-weight: bold;
`;
Table.Header.defaultProps = {
  theme: defaultTheme
};
Table.Head = styled.thead``;
Table.Head.defaultProps = {
  theme: defaultTheme
};
Table.Body = styled.tbody``;
Table.Body.defaultProps = {
  theme: defaultTheme
};
Table.defaultProps = {
  theme: defaultTheme
};

class TableAuto extends React.Component {
  render() {
    const {
      headers,
      rows
    } = this.props;
    return React.createElement(Table, null, headers ? React.createElement(Table.Head, null, React.createElement(Table.Row, null, headers.map((header, index) => React.createElement(Table.Header, {
      key: index
    }, header)))) : null, rows ? React.createElement(Table.Body, null, rows.map((row, rowIndex) => React.createElement(Table.Row, {
      key: rowIndex
    }, row.map((data, dataIndex) => React.createElement(Table.Data, {
      key: dataIndex
    }, data))))) : null);
  }

}

Table.Auto = TableAuto;

export default Table;

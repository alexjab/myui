import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const Table = styled.table`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  width: 100%;
  border-collapse: collapse;
`

Table.defaultProps = {
  theme: lightTheme,
}

Table.Row = styled.tr``

Table.Row.defaultProps = {
  theme: lightTheme,
}

Table.Data = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colorGreyLighter};
`

Table.Data.defaultProps = {
  theme: lightTheme,
}

Table.Header = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 3px solid ${({ theme }) => theme.colorGreyLighter};
  font-weight: bold;
`

Table.Header.defaultProps = {
  theme: lightTheme,
}

Table.Head = styled.thead``

Table.Head.defaultProps = {
  theme: lightTheme,
}

Table.Body = styled.tbody``

Table.Body.defaultProps = {
  theme: lightTheme,
}

Table.defaultProps = {
  theme: lightTheme,
}

class TableAuto extends React.Component {
  render() {
    const { headers, rows } = this.props

    return (
      <Table>
        {headers ? (
          <Table.Head>
            <Table.Row>
              {headers.map((header, index) => (
                <Table.Header key={index}>{header}</Table.Header>
              ))}
            </Table.Row>
          </Table.Head>
        ) : null}

        {rows ? (
          <Table.Body>
            {rows.map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {row.map((data, dataIndex) => (
                  <Table.Data key={dataIndex}>{data}</Table.Data>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        ) : null}
      </Table>
    )
  }
}

Table.Auto = TableAuto

export default Table

import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

Table.Row = styled.tr``
Table.Data = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colorGreyLighter};
`
Table.Header = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 3px solid ${({ theme }) => theme.colorGreyLighter};
  font-weight: bold;
`
Table.Head = styled.thead``
Table.Body = styled.tbody``

export default Table

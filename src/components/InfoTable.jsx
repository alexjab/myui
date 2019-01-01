import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const KeyCell = styled.td`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  color: ${({ theme }) => theme.colorGreyDark};
  font-weight: bold;
  padding-right: 20px;
`

KeyCell.defaultProps = {
  isLarge: false,
  theme: lightTheme,
}

const InfoTable = styled.table`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${({ isLarge, theme }) =>
    isLarge ? theme.largeFontSize : theme.fontSize};

  border-spacing: 8px 16px;
`

InfoTable.defaultProps = {
  fields: [],
  isLarge: false,
  theme: lightTheme,
  title: '',
}

const GroupHead = styled.thead`
  & th {
    text-align: left;
  }

  &:not(:first-child) th {
    padding-top: 20px;
  }
`

InfoTable.Section = ({ fields, title }) => (
  <>
    <GroupHead>
      <tr>
        <th>{title}</th>
      </tr>
    </GroupHead>
    <tbody>
      {fields.map((field, index) => (
        <tr key={index}>
          <KeyCell>{field.label}</KeyCell>
          <td>{field.data}</td>
        </tr>
      ))}
    </tbody>
  </>
)

export default InfoTable

import React from 'react'
import styled from 'styled-components'

const KeyCell = styled.td`
  color: ${({ theme }) => theme.colorGreyDark};
  font-weight: bold;
  padding-right: 20px;
`

const InfoGroup = styled.table`
  border-spacing: 8px 16px;
`

const GroupHead = styled.thead`
  & th {
    text-align: left;
  }

  &:not(:first-child) th {
    padding-top: 20px;
  }
`

InfoGroup.defaultProps = {
  title: '',
  fields: [],
}

InfoGroup.Section = ({ fields, title }) => (
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

export default InfoGroup

import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

import Icon from './Icon.jsx'

const BaseTable = styled.table`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  width: 100%;
  border-collapse: collapse;
`

BaseTable.defaultProps = {
  theme: lightTheme,
}

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colorGreyLighter};
`

TableData.defaultProps = {
  theme: lightTheme,
}

const TableHeaderContainer = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 3px solid ${({ theme }) => theme.colorGreyLighter};
  font-weight: bold;
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : null)};
`

const TableHeaderLevel = styled.div`
  display: inline-flex;
  align-items: center;
`

const TableHeaderIcon = styled.div`
  margin-left: 5px;
  display: inline-flex;
  align-items: center;
`

class TableHeader extends React.Component {
  onSort = () => {
    if (this.props.isSortable) {
      this.props.onSort(this.props.index)
    }
  }

  render() {
    const { children, isSortable, sortOrder, ...rest } = this.props

    return (
      <TableHeaderContainer
        isSortable={isSortable}
        {...rest}
        onClick={this.onSort}
      >
        <TableHeaderLevel>
          {children}

          {isSortable && sortOrder ? (
            <TableHeaderIcon>
              <Icon
                name={`arrow-${sortOrder === 'asc' ? 'up' : 'down'}`}
                size="1em"
              />
            </TableHeaderIcon>
          ) : null}
        </TableHeaderLevel>
      </TableHeaderContainer>
    )
  }
}

TableHeader.defaultProps = {
  theme: lightTheme,
}

class Table extends React.Component {
  static defaultProps = {
    theme: lightTheme,
  }

  constructor(props) {
    super(props)

    this.state = {
      sortBy: props.defaultSortBy || null,
      sortOrder:
        props.defaultSortBy !== undefined
          ? props.defaultSortOrder || 'asc'
          : null,
    }
  }

  onSort = index => {
    this.setState(
      ({ sortBy, sortOrder }) => {
        const newSortBy = index !== sortBy ? index : sortBy

        let newSortOrder = null
        if (sortOrder === 'desc') {
          newSortOrder = 'asc'
        } else if (sortOrder === null) {
          newSortOrder = 'desc'
        }

        return {
          sortBy: newSortBy,
          sortOrder: newSortOrder,
        }
      },
      () => {
        if (this.props.onSort) {
          this.props.onSort(index, this.state.sortOrder)
        }
      }
    )
  }

  render() {
    const { headers, onSort, rows } = this.props
    const { sortBy, sortOrder } = this.state

    return (
      <BaseTable>
        {headers ? (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <TableHeader
                  key={index}
                  index={index}
                  isSortable={header.isSortable}
                  onSort={this.onSort}
                  sortOrder={sortBy === index ? sortOrder : null}
                >
                  {header.title}
                </TableHeader>
              ))}
            </tr>
          </thead>
        ) : null}

        {rows ? (
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((data, dataIndex) => (
                  <TableData key={dataIndex}>{data}</TableData>
                ))}
              </tr>
            ))}
          </tbody>
        ) : null}
      </BaseTable>
    )
  }
}

export default Table

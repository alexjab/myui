import React from 'react'
import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

import ArrowUpIcon from '../icons/ArrowUp'
import ArrowDownIcon from '../icons/ArrowDown'

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
  color: ${({ theme }) => theme.colorGreyDarkest};
`

class TableHeader extends React.Component {
  onSort = () => {
    if (this.props.isSortable) {
      this.props.onSort(this.props.rowKey)
    }
  }

  render() {
    const { children, isSortable, sortOrder } = this.props

    return (
      <TableHeaderContainer isSortable={isSortable} onClick={this.onSort}>
        <TableHeaderLevel>
          {children}

          {isSortable && sortOrder ? (
            <TableHeaderIcon>
              {sortOrder === 'asc' ? (
                <ArrowUpIcon size="1em" />
              ) : (
                <ArrowDownIcon size="1em" />
              )}
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

  onSort = sortByKey => {
    this.setState(
      ({ sortBy, sortOrder }) => {
        const newSortBy = sortByKey !== sortBy ? sortByKey : sortBy

        let newSortOrder = null
        if (sortBy && sortBy !== sortByKey) {
          newSortOrder = 'desc'
        } else {
          if (sortOrder === 'desc') {
            newSortOrder = 'asc'
          } else if (sortOrder === null) {
            newSortOrder = 'desc'
          }
        }

        return {
          sortBy: newSortBy,
          sortOrder: newSortOrder,
        }
      },
      () => {
        if (this.props.onSort) {
          this.props.onSort(this.state.sortBy, this.state.sortOrder)
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
              {headers.map(header => (
                <TableHeader
                  key={header.key}
                  rowKey={header.key}
                  isSortable={header.isSortable}
                  onSort={this.onSort}
                  sortOrder={sortBy === header.key ? sortOrder : null}
                >
                  {header.title}
                </TableHeader>
              ))}
            </tr>
          </thead>
        ) : null}

        {rows ? (
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {headers.map(header => (
                  <TableData key={header.key}>{row[header.key]}</TableData>
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

import React from 'react'

import Table from '../src/components/Table'

class SortableTable extends React.Component {
  state = {
    rows: [
      {
        id: 0,
        displayOrderDate: '1/6/2018',
        orderDate: '2018-01-05T23:00:00.000Z',
        region: 'East',
        rep: 'Jones',
        item: 'Pencil',
        units: 95,
        unitCost: 1.99,
        total: 189.05,
      },
      {
        id: 1,
        displayOrderDate: '1/23/2018',
        orderDate: '2018-01-22T23:00:00.000Z',
        region: 'Central',
        rep: 'Kivell',
        item: 'Binder',
        units: 50,
        unitCost: 19.99,
        total: 999.5,
      },
      {
        id: 2,
        displayOrderDate: '2/9/2018',
        orderDate: '2018-02-08T23:00:00.000Z',
        region: 'Central',
        rep: 'Jardine',
        item: 'Pencil',
        units: 36,
        unitCost: 4.99,
        total: 179.64,
      },
      {
        id: 3,
        displayOrderDate: '2/26/2018',
        orderDate: '2018-02-25T23:00:00.000Z',
        region: 'Central',
        rep: 'Gill',
        item: 'Pen',
        units: 27,
        unitCost: 19.99,
        total: 539.73,
      },
      {
        id: 4,
        displayOrderDate: '3/15/2018',
        orderDate: '2018-03-14T23:00:00.000Z',
        region: 'West',
        rep: 'Sorvino',
        item: 'Pencil',
        units: 56,
        unitCost: 2.99,
        total: 167.44,
      },
      {
        id: 5,
        displayOrderDate: '4/1/2018',
        orderDate: '2018-03-31T22:00:00.000Z',
        region: 'East',
        rep: 'Jones',
        item: 'Binder',
        units: 60,
        unitCost: 4.99,
        total: 299.4,
      },
      {
        id: 6,
        displayOrderDate: '4/18/2018',
        orderDate: '2018-04-17T22:00:00.000Z',
        region: 'Central',
        rep: 'Andrews',
        item: 'Pencil',
        units: 75,
        unitCost: 1.99,
        total: 149.25,
      },
      {
        id: 7,
        displayOrderDate: '5/5/2018',
        orderDate: '2018-05-04T25:00:00.000Z',
        region: 'Central',
        rep: 'Jardine',
        item: 'Pencil',
        units: 90,
        unitCost: 4.99,
        total: 449.1,
      },
      {
        id: 8,
        displayOrderDate: '5/22/2018',
        orderDate: '2018-05-21T22:00:00.000Z',
        region: 'West',
        rep: 'Thompson',
        item: 'Pencil',
        units: 32,
        unitCost: 1.99,
        total: 63.68,
      },
      {
        id: 9,
        displayOrderDate: '6/8/2018',
        orderDate: '2018-06-07T22:00:00.000Z',
        region: 'East',
        rep: 'Jones',
        item: 'Binder',
        units: 60,
        unitCost: 8.99,
        total: 539.4,
      },
    ],
  }

  onSort = (key, order) => {
    this.setState(({ rows }) => {
      const updatedRows = [...rows]
      updatedRows.sort((a, b) => {
        if (!order) {
          key = 'id'
          order = 'asc'
        }

        let aValue = a[key]
        let bValue = b[key]

        if (key === 'displayOrderDate') {
          key === 'orderDate'
        }

        if (aValue < bValue) {
          return order === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return order === 'asc' ? 1 : -1
        }
        return 0
      })

      return { rows: updatedRows }
    })
  }

  render() {
    const { rows } = this.state

    return (
      <Table
        headers={[
          { key: 'displayOrderDate', title: 'Order date', isSortable: true },
          { key: 'region', title: 'Region', isSortable: true },
          { key: 'rep', title: 'Rep' },
          { key: 'item', title: 'Item' },
          { key: 'units', title: 'Units', isSortable: true },
          { key: 'unitCost', title: 'Unit cost', isSortable: true },
          { key: 'total', title: 'Total' },
        ]}
        rows={rows}
        onSort={this.onSort}
      />
    )
  }
}

export default [
  {
    name: 'Table',
    element: (
      <Table
        headers={[
          { key: 'orderDate', title: 'Order date' },
          { key: 'region', title: 'Region' },
          { key: 'rep', title: 'Rep' },
          { key: 'item', title: 'Item' },
          { key: 'units', title: 'Units' },
          { key: 'title', title: 'Unit cost' },
          { key: 'total', title: 'Total' },
        ]}
        rows={[
          {
            id: 0,
            orderDate: '1/6/2018',
            region: 'East',
            rep: 'Jones',
            item: 'Pencil',
            units: 95,
            unitCost: 1.99,
            total: 189.05,
          },
          {
            id: 1,
            orderDate: '1/23/2018',
            region: 'Central',
            rep: 'Kivell',
            item: 'Binder',
            units: 50,
            unitCost: 19.99,
            total: 999.5,
          },
          {
            id: 2,
            orderDate: '2/9/2018',
            region: 'Central',
            rep: 'Jardine',
            item: 'Pencil',
            units: 36,
            unitCost: 4.99,
            total: 179.64,
          },
          {
            id: 3,
            orderDate: '2/26/2018',
            region: 'Central',
            rep: 'Gill',
            item: 'Pen',
            units: 27,
            unitCost: 19.99,
            total: 539.73,
          },
          {
            id: 4,
            orderDate: '3/15/2018',
            region: 'West',
            rep: 'Sorvino',
            item: 'Pencil',
            units: 56,
            unitCost: 2.99,
            total: 167.44,
          },
          {
            id: 5,
            orderDate: '4/1/2018',
            region: 'East',
            rep: 'Jones',
            item: 'Binder',
            units: 60,
            unitCost: 4.99,
            total: 299.4,
          },
          {
            id: 6,
            orderDate: '4/18/2018',
            region: 'Central',
            rep: 'Andrews',
            item: 'Pencil',
            units: 75,
            unitCost: 1.99,
            total: 149.25,
          },
          {
            id: 7,
            orderDate: '5/5/2018',
            region: 'Central',
            rep: 'Jardine',
            item: 'Pencil',
            units: 90,
            unitCost: 4.99,
            total: 449.1,
          },
          {
            id: 8,
            orderDate: '5/22/2018',
            region: 'West',
            rep: 'Thompson',
            item: 'Pencil',
            units: 32,
            unitCost: 1.99,
            total: 63.68,
          },
          {
            id: 9,
            orderDate: '6/8/2018',
            region: 'East',
            rep: 'Jones',
            item: 'Binder',
            units: 60,
            unitCost: 8.99,
            total: 539.4,
          },
        ]}
      />
    ),
  },
  {
    name: 'Table (with sortable fields)',
    element: <SortableTable />,
  },
]

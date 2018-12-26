import React from 'react'

import Table from '../src/components/Table'

class SortableTable extends React.Component {
  state = {
    rows: [
      ['1/6/2018', 'East', 'Jones', 'Pencil', 95, 1.99, 189.05],
      ['1/23/2018', 'Central', 'Kivell', 'Binder', 50, 19.99, 999.5],
      ['2/9/2018', 'Central', 'Jardine', 'Pencil', 36, 4.99, 179.64],
      ['2/26/2018', 'Central', 'Gill', 'Pen', '27', 19.99, 539.73],
      ['3/15/2018', 'West', 'Sorvino', 'Pencil', '56', 2.99, 167.44],
      ['4/1/2018', 'East', 'Jones', 'Binder', '60', 4.99, 299.4],
      ['4/18/2018', 'Central', 'Andrews', 'Pencil', 75, 1.99, 149.25],
      ['5/5/2018', 'Central', 'Jardine', 'Pencil', 90, 4.99, 449.1],
      ['5/22/2018', 'West', 'Thompson', 'Pencil', 32, 1.99, 63.68],
      ['6/8/2018', 'East', 'Jones', 'Binder', '60', 8.99, 539.4],
    ],
  }

  onSort = index => {
    console.log(index)
  }

  render() {
    const { rows } = this.state

    return (
      <Table
        headers={[
          { title: 'Order date', isSortable: true },
          { title: 'Region', isSortable: true },
          { title: 'Rep' },
          { title: 'Item' },
          { title: 'Units', isSortable: true },
          { title: 'Unit cost', isSortable: true },
          { title: 'Total' },
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
          { title: 'Order date' },
          { title: 'Region' },
          { title: 'Rep' },
          { title: 'Item' },
          { title: 'Units' },
          { title: 'Unit cost' },
          { title: 'Total' },
        ]}
        rows={[
          ['1/6/2018', 'East', 'Jones', 'Pencil', 95, 1.99, 189.05],
          ['1/23/2018', 'Central', 'Kivell', 'Binder', 50, 19.99, 999.5],
          ['2/9/2018', 'Central', 'Jardine', 'Pencil', 36, 4.99, 179.64],
          ['2/26/2018', 'Central', 'Gill', 'Pen', 27, 19.99, 539.73],
          ['3/15/2018', 'West', 'Sorvino', 'Pencil', 56, 2.99, 167.44],
          ['4/1/2018', 'East', 'Jones', 'Binder', 60, 4.99, 299.4],
          ['4/18/2018', 'Central', 'Andrews', 'Pencil', 75, 1.99, 149.25],
          ['5/5/2018', 'Central', 'Jardine', 'Pencil', 90, 4.99, 449.1],
          ['5/22/2018', 'West', 'Thompson', 'Pencil', 32, 1.99, 63.68],
          ['6/8/2018', 'East', 'Jones', 'Binder', 60, 8.99, 539.4],
        ]}
      />
    ),
  },
  {
    name: 'Table (with sortable fields)',
    element: <SortableTable />,
  },
]

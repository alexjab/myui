import React from 'react'

import Card from '../src/components/Card'
import Padder from '../src/components/Padder'
import Table from '../src/components/Table'
import { H1 } from '../src/components/Heading'

export default [
  {
    name: 'Card',
    element: (
      <div
        style={{
          width: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
        }}
      >
        <Card>
          <Padder padding="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            mauris egestas purus aliquet malesuada. Pellentesque efficitur massa
            eget ipsum consequat tempus. Nunc felis dolor, accumsan quis orci
            at, consequat consequat ligula. Ut ut rutrum magna. Praesent vitae
            nisi ligula. Pellentesque tempus hendrerit rhoncus. Morbi pulvinar,
            elit nec commodo egestas, massa velit egestas urna, non dapibus nunc
            erat id nisi. Duis fermentum tortor eget mauris congue, sit amet
            sodales tellus feugiat. Aliquam erat volutpat.{' '}
          </Padder>
        </Card>
      </div>
    ),
  },
  {
    name: 'Card with separator',
    element: (
      <div
        style={{
          width: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
        }}
      >
        <Card>
          <Padder padding="15px" bottom="10px" top="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            mauris egestas purus aliquet malesuada. Pellentesque efficitur massa
            eget ipsum consequat tempus. Nunc felis dolor, accumsan quis orci
            at, consequat consequat ligula. Ut ut rutrum magna.
          </Padder>
          <Card.Separator />
          <Padder padding="15px" top="10px" bottom="12px">
            Praesent vitae nisi ligula. Pellentesque tempus hendrerit rhoncus.
            Morbi pulvinar, elit nec commodo egestas, massa velit egestas urna,
            non dapibus nunc erat id nisi. Duis fermentum tortor eget mauris
            congue, sit amet sodales tellus feugiat. Aliquam erat volutpat.
          </Padder>
        </Card>
      </div>
    ),
  },
  {
    name: 'Card on a dark background',
    element: (
      <div
        style={{
          marginTop: '0',
          backgroundColor: 'whitesmoke',
          padding: '50px',
        }}
      >
        <div
          style={{
            width: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Card>
            <Padder padding="15px" bottom="10px" top="12px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              mauris egestas purus aliquet malesuada. Pellentesque efficitur
              massa eget ipsum consequat tempus. Nunc felis dolor, accumsan quis
              orci at, consequat consequat ligula. Ut ut rutrum magna.
            </Padder>
            <Card.Separator />
            <Padder padding="15px" top="10px" bottom="12px">
              Praesent vitae nisi ligula. Pellentesque tempus hendrerit rhoncus.
              Morbi pulvinar, elit nec commodo egestas, massa velit egestas
              urna, non dapibus nunc erat id nisi. Duis fermentum tortor eget
              mauris congue, sit amet sodales tellus feugiat. Aliquam erat
              volutpat.
            </Padder>
          </Card>
        </div>
      </div>
    ),
  },
  {
    name: 'Card with title and table',
    element: (
      <div
        style={{
          width: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
        }}
      >
        <Card>
          <Padder padding="15px" top="10px" bottom="10px">
            <H1>Card title</H1>
          </Padder>
          <Card.Separator />
          <Padder>
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
          </Padder>
        </Card>
      </div>
    ),
  },
]

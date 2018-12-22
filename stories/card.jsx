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
          <Padder padding={15}>
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
          <Padder padding={15} bottom={10} top={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            mauris egestas purus aliquet malesuada. Pellentesque efficitur massa
            eget ipsum consequat tempus. Nunc felis dolor, accumsan quis orci
            at, consequat consequat ligula. Ut ut rutrum magna.
          </Padder>
          <Card.Separator />
          <Padder padding={15} top={10} bottom={12}>
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
            <Padder padding={15} bottom={10} top={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              mauris egestas purus aliquet malesuada. Pellentesque efficitur
              massa eget ipsum consequat tempus. Nunc felis dolor, accumsan quis
              orci at, consequat consequat ligula. Ut ut rutrum magna.
            </Padder>
            <Card.Separator />
            <Padder padding={15} top={10} bottom={12}>
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
          <Padder padding={15} top={10} bottom={10}>
            <H1>Card title</H1>
          </Padder>
          <Card.Separator />
          <Padder>
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.Header isSortable>Order date</Table.Header>
                  <Table.Header>Item</Table.Header>
                  <Table.Header isSortable>Units</Table.Header>
                  <Table.Header isSortable>Unit cost</Table.Header>
                  <Table.Header>Total</Table.Header>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Data>1/6/2018</Table.Data>
                  <Table.Data>Pencil</Table.Data>
                  <Table.Data>95</Table.Data>
                  <Table.Data>1.99</Table.Data>
                  <Table.Data>189.05</Table.Data>
                </Table.Row>
                <Table.Row>
                  <Table.Data>1/23/2018</Table.Data>
                  <Table.Data>Binder</Table.Data>
                  <Table.Data>50</Table.Data>
                  <Table.Data>19.99</Table.Data>
                  <Table.Data>999.50</Table.Data>
                </Table.Row>
                <Table.Row>
                  <Table.Data>2/9/2018</Table.Data>
                  <Table.Data>Pencil</Table.Data>
                  <Table.Data>36</Table.Data>
                  <Table.Data>4.99</Table.Data>
                  <Table.Data>179.64</Table.Data>
                </Table.Row>
                <Table.Row>
                  <Table.Data>2/26/2018</Table.Data>
                  <Table.Data>Pen</Table.Data>
                  <Table.Data>27</Table.Data>
                  <Table.Data>19.99</Table.Data>
                  <Table.Data>539.73</Table.Data>
                </Table.Row>
              </Table.Body>
            </Table>
          </Padder>
        </Card>
      </div>
    ),
  },
]

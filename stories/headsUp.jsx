import React from 'react'
import feather from 'feather-icons'

import Card from '../src/components/Card'
import HeadsUp from '../src/components/HeadsUp'
import Padder from '../src/components/Padder'

export const description = '<HeadsUp />'

export default [
  {
    name: 'Default',
    element: (
      <>
        <Padder padding="20px">
          <HeadsUp>This is an important message</HeadsUp>
        </Padder>
        <Padder padding="20px">
          <div style={{ display: 'inline-flex', marginTop: 20 }}>
            <Card>
              <Padder top="5px" bottom="5px" left="20px" right="20px">
                <HeadsUp>This is an important message</HeadsUp>
              </Padder>
            </Card>
          </div>
        </Padder>
      </>
    ),
  },
  {
    name: 'Primary',
    element: (
      <>
        <Padder padding="20px">
          <HeadsUp isPrimary>This is an important message</HeadsUp>
        </Padder>
        <Padder padding="20px">
          <div style={{ display: 'inline-flex' }}>
            <Card>
              <Padder top="5px" bottom="5px" left="20px" right="20px">
                <HeadsUp isPrimary>This is an important message</HeadsUp>
              </Padder>
            </Card>
          </div>
        </Padder>
      </>
    ),
  },
  {
    name: 'Danger',
    element: (
      <>
        <Padder padding="20px">
          <HeadsUp isDanger>This is an important message</HeadsUp>
        </Padder>
        <Padder padding="20px">
          <div style={{ display: 'inline-flex' }}>
            <Card>
              <Padder top="5px" bottom="5px" left="20px" right="20px">
                <HeadsUp isDanger>This is an important message</HeadsUp>
              </Padder>
            </Card>
          </div>
        </Padder>
      </>
    ),
  },
]

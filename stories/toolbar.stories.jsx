import React from 'react'

import Button from '../src/components/Button'
import ArrowLeftIcon from '../src/icons/ArrowLeft'
import ArrowRightIcon from '../src/icons/ArrowRight'
import ArrowUpCircleIcon from '../src/icons/ArrowUpCircle'
import ArrowDownCircleIcon from '../src/icons/ArrowDownCircle'
import Toolbar from '../src/components/Toolbar'
import Padder from '../src/components/Padder'

export const description = 'Toolbar'

export default [
  {
    name: 'Toolbar',
    element: (
      <Toolbar horizontalLayout="space-between">
        <ArrowUpCircleIcon />
        <ArrowDownCircleIcon />
      </Toolbar>
    ),
  },
  {
    name: 'Toolbar with border and padding',
    element: (
      <div style={{ width: '100%' }}>
        <Toolbar horizontalLayout="space-between" hasBorderTop hasBorderBottom>
          <Toolbar hasBorderRight>
            <Padder padding="5px">
              <Button iconLeft={ArrowLeftIcon}>Back</Button>
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft hasBorderRight verticalLayout="center">
            <Padder left="20px" right="20px" padding="5px">
              Center
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft>
            <Padder padding="5px">
              <Button iconLeft={ArrowRightIcon}>Forward</Button>
            </Padder>
          </Toolbar>
        </Toolbar>
      </div>
    ),
  },
  {
    name: 'Toolbar with expanded column and fixed column',
    element: (
      <div style={{ width: '100%' }}>
        <Toolbar hasBorderTop hasBorderBottom>
          <Toolbar isExpanded>
            <Padder padding="5px">
              <Button iconLeft={ArrowLeftIcon}>Back</Button>
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft>
            <Padder padding="5px">
              <Button iconLeft={ArrowRightIcon}>Forward</Button>
            </Padder>
          </Toolbar>
        </Toolbar>
      </div>
    ),
  },
]

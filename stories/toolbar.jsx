import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../src/components/Button'
import Icon from '../src/components/Icon'
import Toolbar from '../src/components/Toolbar'

export default [
  {
    name: 'Toolbar',
    element: (
      <Toolbar horizontalLayout="space-between">
        <Icon name="arrow-up-circle" />
        <Icon name="arrow-down-circle" />
      </Toolbar>
    ),
  },
  {
    name: 'Toolbar with border and padding',
    element: (
      <div style={{ width: '100%' }}>
        <Toolbar horizontalLayout="space-between" hasBorderTop hasBorderBottom>
          <Toolbar hasBorderRight padding="5px">
            <Button iconLeft="arrow-left">Back</Button>
          </Toolbar>

          <Toolbar
            hasBorderLeft
            hasBorderRight
            verticalLayout="center"
            paddingLeft="20px"
            paddingRight="20px"
          >
            Center
          </Toolbar>

          <Toolbar hasBorderLeft padding="5px">
            <Button iconLeft="arrow-right">Forward</Button>
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
          <Toolbar padding="5px" isExpanded>
            <Button iconLeft="arrow-left">Back</Button>
          </Toolbar>

          <Toolbar hasBorderLeft padding="5px">
            <Button iconLeft="arrow-right">Forward</Button>
          </Toolbar>
        </Toolbar>
      </div>
    ),
  },
]

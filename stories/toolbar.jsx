import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../src/components/Button'
import Icon from '../src/components/Icon'
import Toolbar from '../src/components/Toolbar'
import Padder from '../src/components/Padder'

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
          <Toolbar hasBorderRight padding={5}>
            <Padder padding={5}>
              <Button iconLeft="arrow-left">Back</Button>
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft hasBorderRight verticalLayout="center">
            <Padder left={20} right={20} padding={5}>
              Center
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft>
            <Padder padding={5}>
              <Button iconLeft="arrow-right">Forward</Button>
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
          <Toolbar padding={5} isExpanded>
            <Padder padding={5}>
              <Button iconLeft="arrow-left">Back</Button>
            </Padder>
          </Toolbar>

          <Toolbar hasBorderLeft padding={5}>
            <Padder padding={5}>
              <Button iconLeft="arrow-right">Forward</Button>
            </Padder>
          </Toolbar>
        </Toolbar>
      </div>
    ),
  },
]

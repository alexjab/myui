import React from 'react'
import { action } from '@storybook/addon-actions'

import Tabs from '../src/components/Tabs'

export default [
  {
    name: 'Tabs',
    element: (
      <Tabs onChangeSelected={action('onChangeSelected')}>
        <Tabs.Tab label="199">First entry</Tabs.Tab>
        <Tabs.Tab>Second entry</Tabs.Tab>
        <Tabs.Tab>Third entry</Tabs.Tab>
      </Tabs>
    ),
  },
]

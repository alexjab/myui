import React from 'react'
import { action } from '@storybook/addon-actions'

import Tabs from '../src/components/Tabs'
import Button from '../src/components/Button'

class TabsWithSelectButton extends React.Component {
  render() {
    return (
      <>
        <Tabs
          ref={ref => (this.tabs = ref)}
          onChangeSelected={action('onChangeSelected')}
        >
          <Tabs.Tab label="199">First entry</Tabs.Tab>
          <Tabs.Tab>Second entry</Tabs.Tab>
          <Tabs.Tab>Third entry</Tabs.Tab>
        </Tabs>
        <p>
          <Button onClick={() => this.tabs.selectTab(2)}>Select tab #3</Button>
        </p>
      </>
    )
  }
}

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
  {
    name: 'Tabs with default tab',
    element: (
      <Tabs defaultTab={1} onChangeSelected={action('onChangeSelected')}>
        <Tabs.Tab label="199">First entry</Tabs.Tab>
        <Tabs.Tab>Second entry</Tabs.Tab>
        <Tabs.Tab>Third entry</Tabs.Tab>
      </Tabs>
    ),
  },
  {
    name: 'Select tab',
    element: <TabsWithSelectButton />,
  },
]

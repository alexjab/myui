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
          tabs={[
            {
              title: 'First entry',
              label: '199',
            },
            {
              title: 'Second entry',
            },
            {
              title: 'Third entry',
            },
          ]}
        />
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
      <Tabs
        onChangeSelected={action('onChangeSelected')}
        tabs={[
          {
            title: 'First entry',
            label: '199',
          },
          {
            title: 'Second entry',
          },
          {
            title: 'Third entry',
          },
        ]}
      />
    ),
  },
  {
    name: 'Tabs with default tab',
    element: (
      <Tabs
        defaultTab={1}
        onChangeSelected={action('onChangeSelected')}
        tabs={[
          {
            title: 'First entry',
            label: '199',
          },
          {
            title: 'Second entry',
          },
          {
            title: 'Third entry',
          },
        ]}
      />
    ),
  },
  {
    name: 'Select tab',
    element: <TabsWithSelectButton />,
  },
]

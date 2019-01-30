import React from 'react'
import { action } from '@storybook/addon-actions'

import Select from '../src/components/Select'

export const description = 'Select'

const OPTIONS = [
  {
    value: 'step-1',
    label: 'Step #1',
  },
  {
    value: 'step-2',
    label: 'Step #2',
  },
  {
    value: 'step-3',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus pellentesque, pulvinar dui et, pulvinar felis. Nunc ullamcorper ullamcorper aliquam. Maecenas luctus tincidunt dignissim.',
  },
  {
    value: 'step-4',
    label: 'Step #4',
  },
]

class ControlledSelect extends React.Component {
  state = {
    selected: 'step-2',
  }

  render() {
    return (
      <Select
        value={this.state.selected}
        options={OPTIONS}
        onChangeValue={value => this.setState({ selected: value })}
      >
        Select one item
      </Select>
    )
  }
}

export default [
  {
    name: 'Default',
    element: (
      <Select
        options={OPTIONS}
        onChangeValue={action('onChangeValue')}
        onChange={action('onChange')}
      >
        Select one item
      </Select>
    ),
  },
  {
    name: 'With default value',
    element: (
      <Select
        defaultValue="step-2"
        options={OPTIONS}
        onChangeValue={action('onChangeValue')}
        onChange={action('onChange')}
      >
        Select one item
      </Select>
    ),
  },
  {
    name: 'Controlled Select',
    element: <ControlledSelect />,
  },
  {
    name: 'With constraint width',
    element: (
      <div style={{ width: '250px' }}>
        <Select
          options={OPTIONS}
          onChangeValue={action('onChangeValue')}
          onChange={action('onChange')}
        >
          Select one item
        </Select>
        <div
          style={{
            width: '250px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid deepskyblue',
          }}
        >
          Foobar
        </div>
      </div>
    ),
  },
]

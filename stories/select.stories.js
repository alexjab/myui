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
    label: 'Step #3',
  },
  {
    value: 'step-4',
    label: 'Step #4',
  },
]

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
]

import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../src/components/Button'

export default [
  {
    name: 'Primary',
    element: <Button onClick={action('onClick')}>Confirm changes</Button>,
  },
  {
    name: 'Primary large',
    element: (
      <Button isLarge onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Primary inverted',
    element: (
      <Button isInverted onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Primary inverted disabled',
    element: (
      <Button isInverted disabled onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Primary large inverted',
    element: (
      <Button isLarge isInverted onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Primary outlined',
    element: (
      <Button isOutlined onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Primary large outlined',
    element: (
      <Button isLarge isOutlined onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Danger',
    element: (
      <Button isDanger onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Danger large',
    element: (
      <Button isDanger isLarge onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Danger inverted',
    element: (
      <Button isDanger isInverted onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Danger large inverted',
    element: (
      <Button isDanger isLarge isInverted onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Danger outlined',
    element: (
      <Button isDanger isOutlined onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Danger large outlined',
    element: (
      <Button isDanger isLarge isOutlined onClick={action('onClick')}>
        Move to trash
      </Button>
    ),
  },
  {
    name: 'Disabled',
    element: (
      <Button disabled onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Disabled large',
    element: (
      <Button disabled isLarge onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Disabled inverted',
    element: (
      <Button disabled isInverted onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
  {
    name: 'Disabled outlined',
    element: (
      <Button disabled isOutlined onClick={action('onClick')}>
        Confirm changes
      </Button>
    ),
  },
]

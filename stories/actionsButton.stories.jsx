import React from 'react'
import { action } from '@storybook/addon-actions'

import ActionsButton from '../src/components/ActionsButton'
import EyeIcon from '../src/icons/Eye'
import DropletIcon from '../src/icons/Droplet'

export const description = 'ActionsButton'

export default [
  {
    name: 'Primary',
    element: (
      <ActionsButton
        isPrimary
        buttonLabel="My primary action"
        onActionClick={action('onActionClick')}
        actions={[
          {
            icon: EyeIcon,
            title: 'First action',
            subtitle: 'This action does something',
          },
          {
            icon: DropletIcon,
            title: 'Second action',
            subtitle: 'This action does something different',
          },
        ]}
      />
    ),
  },
  {
    name: 'Other Button props',
    element: (
      <ActionsButton
        isDanger
        isLarge
        isOutlined
        buttonLabel="My other action"
        onActionClick={action('onActionClick')}
        actions={[
          {
            icon: EyeIcon,
            title: 'First action',
            subtitle: 'This action does something',
          },
          {
            icon: DropletIcon,
            title: 'Second action',
            subtitle: 'This action does something different',
          },
        ]}
      />
    ),
  },
]

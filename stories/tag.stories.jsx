import React from 'react'
import feather from 'feather-icons'

import Tag from '../src/components/Tag'

export const description = '<Tag />'

export default [
  {
    name: 'Default tag',
    element: <Tag>Default tag</Tag>,
  },
  {
    name: 'Primary tag',
    element: <Tag isPrimary>Primary tag</Tag>,
  },
]

import React from 'react'

import Tag from '../src/components/Tag'

export const description = 'Tag'

export default [
  {
    name: 'Default tag',
    element: <Tag>Default tag</Tag>,
  },
  {
    name: 'Primary tag',
    element: <Tag isPrimary>Primary tag</Tag>,
  },
  {
    name: 'Dark tag',
    element: <Tag isDark>Dark tag</Tag>,
  },
]

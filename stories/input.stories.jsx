import React from 'react'

import Input from '../src/components/Input'

import AlertTriangleIcon from '../src/icons/AlertTriangle'
import SearchIcon from '../src/icons/Search'
import ActivityIcon from '../src/icons/Activity'
import RefreshCwIcon from '../src/icons/RefreshCw'

export const description = 'Input'

export default [
  {
    name: 'Input',
    element: <Input placeholder="This is an input" />,
  },
  {
    name: 'Input fullwidth',
    element: <Input isFullWidth placeholder="This is an input" />,
  },
  {
    name: 'Input large',
    element: <Input isLarge placeholder="This is an input" />,
  },
  {
    name: 'Input with icon left',
    element: (
      <Input placeholder="This is an input" iconLeft={AlertTriangleIcon} />
    ),
  },
  {
    name: 'Input with icon right',
    element: <Input placeholder="This is an input" iconRight={SearchIcon} />,
  },
  {
    name: 'Input with icons left and right',
    element: (
      <Input
        placeholder="This is an input"
        iconLeft={ActivityIcon}
        iconRight={RefreshCwIcon}
      />
    ),
  },
  {
    name: 'Input large with icon left',
    element: (
      <Input
        isLarge
        placeholder="This is an input"
        iconLeft={AlertTriangleIcon}
      />
    ),
  },
  {
    name: 'Input large with icon right',
    element: (
      <Input isLarge placeholder="This is an input" iconRight={SearchIcon} />
    ),
  },
  {
    name: 'Input large with icons left and right',
    element: (
      <Input
        isLarge
        placeholder="This is an input"
        iconLeft={ActivityIcon}
        iconRight={RefreshCwIcon}
      />
    ),
  },
  {
    name: 'Input fullwidth with icon left',
    element: (
      <Input
        isFullWidth
        placeholder="This is an input"
        iconLeft={AlertTriangleIcon}
      />
    ),
  },
  {
    name: 'Input fullwidth with icon right',
    element: (
      <Input
        isFullWidth
        placeholder="This is an input"
        iconRight={SearchIcon}
      />
    ),
  },
  {
    name: 'Input large fullwidth with icon right',
    element: (
      <Input
        isFullWidth
        isLarge
        placeholder="This is an input"
        iconRight={SearchIcon}
      />
    ),
  },
  {
    name: 'Input fullwidth with icons left and right',
    element: (
      <Input
        isFullWidth
        placeholder="This is an input"
        iconLeft={ActivityIcon}
        iconRight={RefreshCwIcon}
      />
    ),
  },
]

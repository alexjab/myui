import React from 'react'

import Input from '../src/components/Input'
import Button from '../src/components/Button'

export const description = 'Input'

export default [
  {
    name: 'Input',
    element: <Input placeholder="This is an input" />,
  },
  {
    name: 'Input fullwidth',
    element: <Input isFullwidth placeholder="This is an input" />,
  },
  {
    name: 'Input large',
    element: <Input isLarge placeholder="This is an input" />,
  },
  {
    name: 'Input with icon left',
    element: <Input placeholder="This is an input" iconLeft="alert-triangle" />,
  },
  {
    name: 'Input with icon right',
    element: <Input placeholder="This is an input" iconRight="search" />,
  },
  {
    name: 'Input with icons left and right',
    element: (
      <Input
        placeholder="This is an input"
        iconLeft="activity"
        iconRight="refresh-cw"
      />
    ),
  },
  {
    name: 'Input large with icon left',
    element: (
      <Input isLarge placeholder="This is an input" iconLeft="alert-triangle" />
    ),
  },
  {
    name: 'Input large with icon right',
    element: (
      <Input isLarge placeholder="This is an input" iconRight="search" />
    ),
  },
  {
    name: 'Input large with icons left and right',
    element: (
      <Input
        isLarge
        placeholder="This is an input"
        iconLeft="activity"
        iconRight="refresh-cw"
      />
    ),
  },
  {
    name: 'Input fullwidth with icon left',
    element: (
      <Input
        isFullwidth
        placeholder="This is an input"
        iconLeft="alert-triangle"
      />
    ),
  },
  {
    name: 'Input fullwidth with icon right',
    element: (
      <Input isFullwidth placeholder="This is an input" iconRight="search" />
    ),
  },
  {
    name: 'Input large fullwidth with icon right',
    element: (
      <Input
        isFullwidth
        isLarge
        placeholder="This is an input"
        iconRight="search"
      />
    ),
  },
  {
    name: 'Input fullwidth with icons left and right',
    element: (
      <Input
        isFullwidth
        placeholder="This is an input"
        iconLeft="activity"
        iconRight="refresh-cw"
      />
    ),
  },
]

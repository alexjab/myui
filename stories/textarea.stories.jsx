import React from 'react'

import Textarea from '../src/components/Textarea'

export const description = 'Textarea'

export default [
  {
    name: 'Default',
    element: <Textarea placeholder="This is a textarea" rows={7} cols={50} />,
  },
  {
    name: 'Fullwidth',
    element: <Textarea placeholder="This is a textarea" isFullWidth />,
  },
]

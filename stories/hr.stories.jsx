import React from 'react'
import { action } from '@storybook/addon-actions'

import { H1, H2 } from '../src/components/Heading'
import Hr from '../src/components/Hr'

export const description = 'Hr'

export default [
  {
    name: 'Hr',
    element: (
      <>
        <H1>Title #1</H1>
        <Hr />
        <H2>Title #2</H2>
      </>
    ),
  },
]

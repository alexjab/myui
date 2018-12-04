import React from 'react'

import * as Layout from '../src/components/Layout'

export default [
  {
    name: 'Layout',
    element: (
      <Layout.Row hasBorderBottom>
        <Layout.Column>Element #1</Layout.Column>
        <Layout.Column>Element #2</Layout.Column>
      </Layout.Row>
    ),
  },
]

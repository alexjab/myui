import React from 'react'
import renderer from 'react-test-renderer'

import defaultTheme from '../../src/core/themes'
import Tabs from '../../src/components/Tabs'

describe('<Tabs />', () => {
  it('Select a tab', () => {
    const tree = renderer.create(
      <Tabs theme={defaultTheme}>
        <Tabs.Tab>#1 Tab</Tabs.Tab>
        <Tabs.Tab>#2 Tab</Tabs.Tab>
      </Tabs>
    )

    expect(tree).toMatchSnapshot()

    const secondTab = tree.root.findAllByType(Tabs.Tab)[1]
    secondTab.props.selectTab(1)

    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'

import DefaultTheme from '../../src/components/DefaultTheme'
import GlobalStyle from '../../src/components/GlobalStyle'
import defaultTheme from '../../src/core/themes'

import coreStories from '../../stories/core'
import buttonStories from '../../stories/button'
import tableStories from '../../stories/table'
import tabsStories from '../../stories/tabs'

function createComponentTest(description, stories) {
  return describe(description, () => {
    for (const story of stories) {
      it(story.name, () => {
        const tree = renderer
          .create(
            <DefaultTheme>
              {story.element}
              <GlobalStyle suppressMultiMountWarning />
            </DefaultTheme>
          )
          .toJSON()

        expect(tree).toMatchSnapshot()
      })
    }
  })
}

createComponentTest('<Core />', coreStories)
createComponentTest('<Button />', buttonStories)
createComponentTest('<Table />', tableStories)
createComponentTest('<Tabs />', tabsStories)

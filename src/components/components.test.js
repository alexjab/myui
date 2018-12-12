import React from 'react'
import renderer from 'react-test-renderer'

import GlobalStyle from '../../src/components/GlobalStyle'

import coreStories from '../../stories/core'
import buttonStories from '../../stories/button'
import infoGroupStories from '../../stories/infoGroup'
import inputStories from '../../stories/input'
import tableStories from '../../stories/table'
import tabsStories from '../../stories/tabs'
import tagStories from '../../stories/tag'
import toolbarStories from '../../stories/toolbar'

function createComponentTest(description, stories) {
  return describe(`Story of ${description}`, () => {
    for (const story of stories) {
      it(story.name, () => {
        const tree = renderer.create(
          <>
            {story.element}
            <GlobalStyle suppressMultiMountWarning />
          </>
        )

        expect(tree).toMatchSnapshot()
      })
    }
  })
}

createComponentTest('<Core />', coreStories)
createComponentTest('<Button />', buttonStories)
createComponentTest('<Input />', inputStories)
createComponentTest('<InfoGroup />', infoGroupStories)
createComponentTest('<Table />', tableStories)
createComponentTest('<Tabs />', tabsStories)
createComponentTest('<Tag />', tagStories)
createComponentTest('<Toolbar />', toolbarStories)

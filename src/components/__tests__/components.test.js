import React from 'react'
import renderer from 'react-test-renderer'
import globby from 'globby'

import GlobalStyle from '../GlobalStyle'

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

globby
  .sync(
    [
      '../../../stories/*.{js,jsx}',
      '!../../../stories/index.js',
      '!../../../stories/icon.stories.js',
    ],
    {
      cwd: './src/components/__tests__',
    }
  )
  .forEach(storiesPath => {
    const { default: stories, description } = require(storiesPath)
    createComponentTest(description, stories)
  })

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DefaultTheme from '../src/components/DefaultTheme'
import GlobalStyle from '../src/components/GlobalStyle'

import coreStories from './core'
import buttonStories from './button'
import tableStories from './table'
import tabsStories from './tabs'

const GlobalDecorator = storyFn => (
  <DefaultTheme>
    {storyFn()}

    <GlobalStyle />
  </DefaultTheme>
)

function createStoriesOf(nameOfStory, stories) {
  const storiesOfElement = storiesOf(nameOfStory, module).addDecorator(
    GlobalDecorator
  )

  for (const story of stories) {
    storiesOfElement.add(story.name, () => story.element)
  }
}

createStoriesOf('Core', coreStories)
createStoriesOf('Button', buttonStories)
createStoriesOf('Table', tableStories)
createStoriesOf('Tabs', tabsStories)

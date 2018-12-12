import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ThemeProvider from '../src/components/ThemeProvider'
import GlobalStyle from '../src/components/GlobalStyle'

import buttonStories from './button'
import coreStories from './core'
import iconStories from './icon'
import infoGroupStories from './infoGroup'
import inputStories from './input'
import tableStories from './table'
import tabsStories from './tabs'
import tagStories from './tag'
import toolbarStories from './toolbar'

const GlobalDecorator = storyFn => (
  <ThemeProvider>
    {storyFn()}

    <GlobalStyle />
  </ThemeProvider>
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
createStoriesOf('Icon', iconStories)
createStoriesOf('InfoGroup', infoGroupStories)
createStoriesOf('Input', inputStories)
createStoriesOf('Table', tableStories)
createStoriesOf('Tabs', tabsStories)
createStoriesOf('Tag', tagStories)
createStoriesOf('Toolbar', toolbarStories)

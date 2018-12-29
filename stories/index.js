import React from 'react'
import { storiesOf } from '@storybook/react'

import ThemeProvider from '../src/components/ThemeProvider'
import GlobalStyle from '../src/components/GlobalStyle'

import buttonStories from './button'
import cardStories from './card'
import coreStories from './core'
import headsUpStories from './headsUp'
import iconStories from './icon'
import infoGroupStories from './infoGroup'
import inputStories from './input'
import linksStories from './links'
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
createStoriesOf('Card', cardStories)
createStoriesOf('Button', buttonStories)
createStoriesOf('HeadsUp', headsUpStories)
createStoriesOf('Icon', iconStories)
createStoriesOf('InfoGroup', infoGroupStories)
createStoriesOf('Input', inputStories)
createStoriesOf('Links', linksStories)
createStoriesOf('Table', tableStories)
createStoriesOf('Tabs', tabsStories)
createStoriesOf('Tag', tagStories)
createStoriesOf('Toolbar', toolbarStories)

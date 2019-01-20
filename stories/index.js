import React from 'react'
import { configure, storiesOf } from '@storybook/react'

import ThemeProvider from '../src/components/ThemeProvider'
import GlobalStyle from '../src/components/GlobalStyle'

const GlobalDecorator = storyFn => (
  <ThemeProvider>
    {storyFn()}

    <GlobalStyle />
  </ThemeProvider>
)

const MarginsDecorator = storyFn => (
  <div style={{ margin: 10 }}>{storyFn()}</div>
)

function createStoriesOf(nameOfStory, stories) {
  const storiesOfElement = storiesOf(nameOfStory, module)
    .addDecorator(GlobalDecorator)
    .addDecorator(MarginsDecorator)

  for (const story of stories) {
    storiesOfElement.add(story.name, () => story.element)
  }
}

const req = require.context('./', false, /\.stories\.jsx?$/)
req.keys().forEach(filename => {
  const { default: stories, description } = req(filename)
  createStoriesOf(description, stories)
})

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ThemeProvider from '../src/components/ThemeProvider'
import GlobalStyle from '../src/components/GlobalStyle'

const GlobalDecorator = storyFn => (
  <ThemeProvider isDark={boolean('Dark theme', false)}>
    {storyFn()}

    <GlobalStyle />
  </ThemeProvider>
)

const MarginsDecorator = storyFn => (
  <div style={{ margin: 10 }}>{storyFn()}</div>
)

function createStoriesOf(nameOfStory, stories) {
  const storiesOfElement = storiesOf(nameOfStory, module)
    .addDecorator(MarginsDecorator)
    .addDecorator(withKnobs)
    .addDecorator(GlobalDecorator)

  for (const story of stories) {
    storiesOfElement.add(story.name, () => story.element)
  }
}

const req = require.context('./', false, /\.stories\.jsx?$/)
req.keys().forEach(filename => {
  const { default: stories, description } = req(filename)
  createStoriesOf(description, stories)
})

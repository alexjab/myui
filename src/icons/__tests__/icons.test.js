import React from 'react'
import renderer from 'react-test-renderer'

import GlobalStyle from '../../components/GlobalStyle'
import globby from 'globby'

const filenames = globby.sync('../**.jsx', { cwd: './src/icons/__tests__' })
const icons = filenames.map(filename => require(filename).default)

describe(`Icons`, () => {
  for (const Icon of icons) {
    it(Icon.iconName, () => {
      const tree = renderer.create(
        <>
          <Icon />
          <GlobalStyle suppressMultiMountWarning />
        </>
      )

      expect(tree).toMatchSnapshot()
    })
  }
})

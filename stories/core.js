import React from 'react'
import { action } from '@storybook/addon-actions'

import * as colors from '../src/core/colors'
import Color from '../src/components/Color'

export default [
  {
    name: 'Colors',
    element: (
      <>
        <Color name="primary" color={colors.primary} />
        <Color name="danger" color={colors.danger} />
      </>
    ),
  },
  {
    name: 'Greys',
    element: (
      <>
        <Color name="Grey lightest" color={colors.greyLightest} />
        <Color name="Grey lighter" color={colors.greyLighter} />
        <Color name="Grey light" color={colors.greyLight} />
        <Color name="Grey" color={colors.grey} />
        <Color name="Grey dark" color={colors.greyDark} />
        <Color name="Grey darker" color={colors.greyDarker} />
        <Color name="Grey darkest" color={colors.greyDarkest} />
      </>
    ),
  },
  {
    name: 'Black and white',
    element: (
      <>
        <Color name="White" color={colors.white} />
        <Color name="Dark" color={colors.dark} />
        <Color name="Darker" color={colors.darker} />
        <Color name="Darkest" color={colors.darkest} />
        <Color name="Black" color={colors.black} />
      </>
    ),
  },
]

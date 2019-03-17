import React from 'react'

const req = require.context('../src/icons/', false, /\.jsx?$/)
import LayersIcon from '../src/icons/Layers'

export const description = 'Icons'

export default [
  {
    name: 'Icons',
    element: req.keys().map(filename => {
      const { default: Icon } = req(filename)
      return (
        <Icon key={Icon.iconName} name={Icon.iconName} title={Icon.iconName} />
      )
    }),
  },
  {
    name: 'Icon sizes',
    element: (
      <>
        <LayersIcon name="layers" title="12px" size="12px" />
        <LayersIcon name="layers" title="14px" size="14px" />
        <LayersIcon name="layers" title="16px" size="16px" />
        <LayersIcon name="layers" title="18px" size="18px" />
        <LayersIcon name="layers" title="20px" size="20px" />
        <LayersIcon name="layers" title="24px" size="24px" />
        <LayersIcon name="layers" title="28px" size="28px" />
        <LayersIcon name="layers" title="32px" size="32px" />
        <LayersIcon name="layers" title="40px" size="40px" />
        <LayersIcon name="layers" title="50px" size="50px" />
      </>
    ),
  },
]

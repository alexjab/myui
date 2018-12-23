import React from 'react'
import feather from 'feather-icons'

import Icon from '../src/components/Icon'

export default [
  {
    name: 'Icon',
    element: Object.keys(feather.icons).map(name => (
      <Icon key={name} name={name} title={name} />
    )),
  },
  {
    name: 'Icon sizes',
    element: (
      <>
        <Icon name="layers" title="12px" size="12px" />
        <Icon name="layers" title="14px" size="14px" />
        <Icon name="layers" title="16px" size="16px" />
        <Icon name="layers" title="18px" size="18px" />
        <Icon name="layers" title="20px" size="20px" />
        <Icon name="layers" title="24px" size="24px" />
        <Icon name="layers" title="28px" size="28px" />
        <Icon name="layers" title="32px" size="32px" />
        <Icon name="layers" title="40px" size="40px" />
        <Icon name="layers" title="50px" size="50px" />
      </>
    ),
  },
]

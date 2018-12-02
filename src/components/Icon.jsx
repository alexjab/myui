import React from 'react'
import feather from 'feather-icons'
import styled from 'styled-components'

const Icon = ({ name, size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({
          width: size ? size : '20',
          height: size ? size : '20',
        }),
      }}
      {...props}
    />
  )
}

export default styled(Icon)`
  height: ${({ size }) => (size ? size : '20')};
  display: inline-flex;
  align-items: center;
`

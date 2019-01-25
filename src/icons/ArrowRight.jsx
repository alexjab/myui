import React from 'react'
import styled from 'styled-components'

const ArrowRight = ({ name, size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
      }}
      {...props}
    />
  )
}
ArrowRight.iconName = 'arrow-right'

export default styled(ArrowRight)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

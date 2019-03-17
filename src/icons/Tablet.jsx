import React from 'react'
import styled from 'styled-components'

const Tablet = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tablet"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>`,
      }}
      {...props}
    />
  )
}
Tablet.iconName = 'tablet'

export default styled(Tablet)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

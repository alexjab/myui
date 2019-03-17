import React from 'react'
import styled from 'styled-components'

const Navigation2 = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-navigation-2"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>`,
      }}
      {...props}
    />
  )
}
Navigation2.iconName = 'navigation-2'

export default styled(Navigation2)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

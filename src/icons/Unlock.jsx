import React from 'react'
import styled from 'styled-components'

const Unlock = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-unlock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
      }}
      {...props}
    />
  )
}
Unlock.iconName = 'unlock'

export default styled(Unlock)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

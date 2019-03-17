import React from 'react'
import styled from 'styled-components'

const Volume = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>`,
      }}
      {...props}
    />
  )
}
Volume.iconName = 'volume'

export default styled(Volume)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

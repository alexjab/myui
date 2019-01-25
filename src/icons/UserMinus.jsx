import React from 'react'
import styled from 'styled-components'

const UserMinus = ({ name, size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-minus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
      }}
      {...props}
    />
  )
}
UserMinus.iconName = 'user-minus'

export default styled(UserMinus)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

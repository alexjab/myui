import React from 'react'
import styled from 'styled-components'

const Thermometer = ({ size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`,
      }}
      {...props}
    />
  )
}
Thermometer.iconName = 'thermometer'

export default styled(Thermometer)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

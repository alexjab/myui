import React from 'react'
import styled from 'styled-components'

const FolderMinus = ({ name, size, ...props }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          size ? size : '20px'
        }" height="${
          size ? size : '20px'
        }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder-minus"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line></svg>`,
      }}
      {...props}
    />
  )
}
FolderMinus.iconName = 'folder-minus'

export default styled(FolderMinus)`
  height: ${({ size }) => (size ? size : '20px')};
  display: inline-flex;
  align-items: center;
`

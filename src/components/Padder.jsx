import React from 'react'
import styled from 'styled-components'

const Padder = styled.div`
  padding-top: ${({ padding, top }) => (top !== undefined ? top : padding)}px;
  padding-right: ${({ padding, right }) =>
    right !== undefined ? right : padding}px;
  padding-bottom: ${({ padding, bottom }) =>
    bottom !== undefined ? bottom : padding}px;
  padding-left: ${({ padding, left }) =>
    left !== undefined ? left : padding}px;
`

Padder.defaultProps = {
  padding: 0,
}

export default Padder

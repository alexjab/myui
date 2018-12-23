import React from 'react'
import styled from 'styled-components'

const Padder = styled.div`
  padding-top: ${({ padding, top }) => (top !== undefined ? top : padding)};
  padding-right: ${({ padding, right }) =>
    right !== undefined ? right : padding};
  padding-bottom: ${({ padding, bottom }) =>
    bottom !== undefined ? bottom : padding};
  padding-left: ${({ padding, left }) => (left !== undefined ? left : padding)};
`

Padder.defaultProps = {
  padding: '0px',
}

export default Padder

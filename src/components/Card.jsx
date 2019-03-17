import styled from 'styled-components'
import { transparentize } from 'polished'

import { light as lightTheme } from '../core/themes'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 4px;
  box-shadow: 0 2px 5px ${({ theme }) => transparentize(0.9, theme.colorBlack)};
  border: 1px solid gainsboro;
`

Card.defaultProps = {
  theme: lightTheme,
}

Card.Separator = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colorGreyLighter};
`

Card.Separator.defaultProps = {
  theme: lightTheme,
}

export default Card

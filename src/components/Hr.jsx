import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const Hr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colorGrey};
  margin-top: 5px;
  margin-bottom: 5px;
`

Hr.defaultProps = {
  theme: lightTheme,
}
export default Hr

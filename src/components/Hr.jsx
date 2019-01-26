import styled from 'styled-components'

import { light as lightTheme } from '../core/themes'

const Hr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colorGrey};
  margin-top: 15px;
  margin-bottom: 15px;
`

Hr.defaultProps = {
  theme: lightTheme,
}
export default Hr

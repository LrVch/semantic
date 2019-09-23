import {
  Card
} from 'semantic-ui-react'
import { device } from '../../../media'
import styled from 'styled-components'

const StyledUserInfo = styled(Card)`
  &&& {
    @media ${device.tabletL} {
      margin-bottom: 15px;
    }
  }
`

export default StyledUserInfo
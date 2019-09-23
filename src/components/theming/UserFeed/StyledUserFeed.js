import {
  Card,
} from 'semantic-ui-react'
import styled from 'styled-components'

const StyledUserFeed = styled(Card)`
  &&& {
    box-shadow: none;

    .content:last-child {
      border-top-color: ${({ theme }) => theme.second};
    }
  }
`
export default StyledUserFeed
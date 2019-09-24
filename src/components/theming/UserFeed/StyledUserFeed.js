import {
  Card,
} from 'semantic-ui-react'
import styled from 'styled-components'

const StyledUserFeed = styled(Card)`
  &&& {
    box-shadow: none;
    
    .user-feed {
      border-top-color: ${({ theme }) => theme.second};
    }
  }
`
export default StyledUserFeed
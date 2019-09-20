import {
  Card,
  Icon,
  Image
} from 'semantic-ui-react'

import React from 'react'
import { device } from '../../../media'
import styled from 'styled-components'

const StyledUserInfo = styled(Card)`
  &&& {
    @media ${device.tabletL} {
      margin-bottom: 15px;
    }
  }
`

const UserInfo = () => {
  return (
    <StyledUserInfo>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
      </a>
      </Card.Content>
    </StyledUserInfo>
  )
}

export default UserInfo

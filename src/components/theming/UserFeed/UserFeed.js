import {
  Card,
  Feed
} from 'semantic-ui-react'

import React from 'react'
import styled from 'styled-components'

const StyledUserFeed = styled(Card)`
  &&& {
    box-shadow: none;

    .content:last-child {
      border-top-color: ${({theme}) => theme.second};
    }
  }
`

const UserFeed = () => {
  return (
    <StyledUserFeed>
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Feed.Content>
              <Feed.Date content='1 day ago' />
              <Feed.Summary>
                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
            <Feed.Content>
              <Feed.Date content='3 days ago' />
              <Feed.Summary>
                You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Date content='4 days ago' />
              <Feed.Summary>
                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
          </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </StyledUserFeed>
  )
}

export default UserFeed

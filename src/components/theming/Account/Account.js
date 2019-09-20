import {
  Grid,
  List,
  Message,
  Step
} from 'semantic-ui-react'
import React, { useState } from 'react'

import NoPaddingSegment from '../NoPaddingSegment/NoPaddingSegment'
import ThemedDivider from '../ThemedDivider/ThemedDivider'
import UserFeed from '../UserFeed/UserFeed'
import UserFeedFull from '../UserFeedFull/UserFeedFull'
import UserInfo from '../UserInfo/UserInfo'

const Account = () => {
  const [dismissed, setDismissed] = useState(false)

  return (
    <>
      {!dismissed && <Message
        onDismiss={() => setDismissed(true)}
        style={{ marginTop: '10px' }}
        icon='inbox'
        header='Have you heard about our mailing list?'
        content='Get the best news in your e-mail every day.'
      />}

      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column
              computer={12}
              mobile={16}
            >
              <NoPaddingSegment>

                <Grid>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={6} computer={6}>
                      <UserInfo />

                    </Grid.Column>

                    <Grid.Column mobile={16} computer={9}>
                      <List>
                        <List.Item icon='users' content='Semantic UI' />
                        <List.Item icon='marker' content='New York, NY' />
                        <List.Item
                          icon='mail'
                          content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
                        />
                        <List.Item
                          icon='linkify'
                          content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
                        />
                      </List>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Step.Group stackable='tablet' ordered fluid>
                        <Step completed>
                          <Step.Content>
                            <Step.Title>Shipping</Step.Title>
                            <Step.Description><>Choose your <br /> shipping options</></Step.Description>
                          </Step.Content>
                        </Step>

                        <Step completed>
                          <Step.Content>
                            <Step.Title>Billing</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                          </Step.Content>
                        </Step>

                        <Step active>
                          <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                          </Step.Content>
                        </Step>
                      </Step.Group>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <UserFeedFull />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </NoPaddingSegment>
            </Grid.Column>
            <Grid.Column
              only='computer'
              computer={4}
            >
              <NoPaddingSegment >
                <UserFeed />
                <ThemedDivider />
              </NoPaddingSegment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  )
}

export default Account

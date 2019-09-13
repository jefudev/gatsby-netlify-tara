import React from "react"
import {
  Segment,
  Grid,
  Header,
  Image,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

const MediaSegment = () => (


<Segment style={{ padding: '0em' }} vertical className='media__segment'>
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
        <Grid.Column>
          <Segment className='height100' stacked>
            <Label color='pink' as='a' className="segment__header">
              <Header className="segmentHeaderTitle" as="span">
                Media Appearances
              </Header>
            </Label>
            <Grid columns='equal' className="logo__grid">
              <Grid.Row>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
                <Grid.Column>
                  <img className="logo" src="https://picsum.photos/300/200"/>
                </Grid.Column>
              </Grid.Row>
              <p style={{ fontSize: '1.33em' }}>
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid>
          </Segment>

        </Grid.Column>
        <Grid.Column className='phil__hero-img-col'>
          <Image fluid className='phil__hero-img' src="https://picsum.photos/3000/3000" />
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

)

export default MediaSegment
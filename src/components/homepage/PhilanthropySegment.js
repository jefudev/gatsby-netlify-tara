import React from "react"
import {
  Segment,
  Grid,
  Header,
  Image,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

const PhilanthropySegment = () => (
<Segment style={{ padding: '0em' }} vertical>
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
        <Grid.Column className='phil__hero-img-col'>
          <Image fluid className='phil__hero-img' src="https://picsum.photos/3000/3000" />
        </Grid.Column>
        <Grid.Column>
          <Segment className='height100' stacked>
              <Label color='pink' as='a' className="segment__header">
                <Header className="segmentHeaderTitle" as="span">
                  Philanthropy
                </Header>
              </Label>
            <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
            </Segment>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default PhilanthropySegment
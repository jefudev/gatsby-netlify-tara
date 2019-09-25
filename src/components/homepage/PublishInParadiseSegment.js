import React from "react"
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Button
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import Fade from 'react-reveal/Fade';

const PublishInParadiseSegment = () => (
<Segment style={{ padding: '0em' }} vertical name="phil__link">
  <Grid celled='internally' columns='equal'>
    <Grid.Row textAlign='center'>
        <Grid.Column className='phil__hero-img-col' as='a' href='/publish-in-paradise' mobile={2} tablet={6} computer={8}  >
          <Image fluid className='phil__hero-img' src={require("../../images/paradise-hero.jpg")} />
          <Fade>
            <p className='overlay-text overlay-text--align-right'>
              Dreams of <br/>
              Paradise
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column className='segment--paradise segment__content' mobile={14} tablet={10} computer={8} >
            <Segment className='height100 segment--table' stacked>
              <div class='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    Publish In Paradise
                  </Header>
                </Label>
                <Fade>
                <p className='segment__blurb'>
                  Write your book in Asia! Explore the beautiful countries of Thailand, Vietnam and Indonesia with Tara.
                </p>
                <Button as='a' href='/publish-in-paradise' primary style={{ marginTop: '0.5em' }}>
                  Learn More
                </Button>
                </Fade>
              </div>
            </Segment>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default PublishInParadiseSegment
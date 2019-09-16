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
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
        <Grid.Column className='phil__hero-img-col' as='a' href='/publish-in-paradise'>
          <Image fluid className='phil__hero-img' src={require("../../images/paradise-hero.jpg")} />
          <Fade delay={500}>
            <p className='overlay-text overlay-text--align-right'>
              Dream of<br/>
              Paradise
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column>
            <Segment className='height100 segment--table' stacked>
              <div class='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    Publish In Paradise
                  </Header>
                </Label>
                <Fade delay={700}>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
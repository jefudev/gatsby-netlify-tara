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

const PhilanthropySegment = () => (
<Segment style={{ padding: '0em' }} vertical name="phil__link">
  <Grid celled='internally' columns='equal'>
    <Grid.Row textAlign='center'>
        <Grid.Column className='phil__hero-img-col' as='a' href='/philanthropy' mobile={2} tablet={6} computer={8}>
          <Image fluid className='phil__hero-img' src={require("../../images/phil-hero.jpeg")} />
          <Fade delay={500}>
            <p className='overlay-text overlay-text--align-right'>
              Giving <br/>
              Back
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={10} computer={8} className='segment__content'>
            <Segment className='height100 segment--table' stacked>
              <div class='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    Philanthropy
                  </Header>
                </Label>
                <Fade delay={700}>
                <p className='segment__blurb'>
                  Tara always had a love for travel. In the summer of 2019 she spent four month in Asia volunteering at various non-profits. When she is not abroad, Richter also does numerous activities for the Tampa Bay community.
                </p>
                <Button as='a' primary style={{ marginTop: '0.5em' }}>
                  See More
                </Button>
                </Fade>
              </div>
            </Segment>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default PhilanthropySegment
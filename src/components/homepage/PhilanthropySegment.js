import React from "react"
import {
  Segment,
  Grid,
  Header,
  Image,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import Fade from 'react-reveal/Fade';

const PhilanthropySegment = () => (
<Segment style={{ padding: '0em' }} vertical name="phil__link">
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
        <Grid.Column className='phil__hero-img-col'>
          <Image fluid className='phil__hero-img' src={require("../../images/phil-hero.jpeg")} />
          <Fade delay={500}>
            <p className='overlay-text overlay-text--align-right'>
              Giving<br/>
              Back
            </p>
          </Fade>
        </Grid.Column>
        <Grid.Column>
            <Segment className='height100 segment--table' stacked>
              <div class='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    Philanthropy
                  </Header>
                </Label>
                <Fade delay={700}>
                <p style={{ fontSize: '1.33em' }}>
                  Tara has always had a love of travel. She has been visiting other countries since she could barely walk. Her family is from the Midwest and she was born in Nebraska. However, they had the desire to explore new cultures and thus the seed was planted. Ms. Richter has traveled to 35 other countries in her lifetime. In 2019 she embarked on a journey to live in Asia with 17 strangers. The four countries on the list were Vietnam, Thailand, Japan and Singapore. During their time they volunteered at different nonprofits while working and exploring the lands.
                </p>
                </Fade>
              </div>
            </Segment>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default PhilanthropySegment
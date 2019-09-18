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
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

const MediaSegment = () => (


<Segment style={{ padding: '0em' }} vertical className='media__segment' name='media__link'>
  <Grid celled='internally' columns='equal'>
    <Grid.Row textAlign='center'>
        <Grid.Column mobile={14} tablet={10} computer={8} className="segment__content">
          <Segment className='height100 segment--table' stacked>
              <div class='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    Media Appearances
                  </Header>
                </Label>
                <Fade delay={700}>
                <Grid columns='equal' className="logo__grid" verticalAlign='middle' centered >
                  <Grid.Row>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/lgo-abc.png")}/>
                    </Grid.Column>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/logo-cnn.png")}/>
                    </Grid.Column>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/logo-fox.png")}/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/logo-usa-today.png")}/>
                    </Grid.Column>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/logo-bbc.png")}/>
                    </Grid.Column>
                    <Grid.Column>
                      <img className="logo" src={require("../../images/logo/logo-datytime.png")}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                </Fade>
                <Link to="/media/">
                  <Button as='a' primary style={{ marginTop: '0.5em' }}>
                    View Interviews
                  </Button>
                </Link>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={2} tablet={6} computer={8} className='phil__hero-img-col' as='a' href='/media'>
          <Image fluid className='phil__hero-img' src={require("../../images/news-hero.jpg")}/>
          <Fade delay={500}>
          <div className='overlay-text'>
            In the <br/>
            News
          </div>
          </Fade>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>

)

export default MediaSegment
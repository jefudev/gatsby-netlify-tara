import React from "react"
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Button,
  List,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import Fade from 'react-reveal/Fade';

const AboutSegment = () => (
  <Segment style={{ padding: '0em' }} vertical className='about__segment' name='about__link'>
  <Grid celled='internally' columns='equal' stackable>
    <Grid.Row textAlign='center'>
        <Grid.Column>
          <Segment className='height100 segment--table' stacked>
              <div className='segment__items--centered'>
                <Label color='pink' as='a' className="segment__header segment__header--padding-bottom segment__header--half">
                  <Header className="segmentHeaderTitle" as="span">
                    About
                  </Header>
                </Label>
                <Fade delay={700}>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </Fade>
                <Button as='a' primary style={{ marginTop: '0.5em' }} href='http://www.amazon.com/Tara-Richter/e/B00CGKD8FG' target='_blank'>
                  See More
                </Button>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column className='phil__hero-img-col'>
          <Image fluid className='phil__hero-img' src={require("../../images/graduation.jpg")}/>
          <Fade delay={500}>
          <div className='overlay-text overlay-text--awards segment--table'>
            <Grid className='segment__items--centered'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='certificate' />
                      <List.Content>
                        <List.Header>2013 Finalist</List.Header>
                        <List.Description>
                          Tampa Bay’s Business Woman of the Year Award
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='certificate' />
                      <List.Content>
                        <List.Header>2014 Nominee</List.Header>
                        <List.Description>
                         Tampa’s Up & Coming Businesses
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='certificate' />
                      <List.Content>
                        <List.Header>2015 Nominee</List.Header>
                        <List.Description>
                         2015 Iconic Woman of the Year
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='certificate' />
                      <List.Content>
                        <List.Header>2015 Finalist</List.Header>
                        <List.Description>
                          Best in Biz
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='trophy' />
                      <List.Content>
                        <List.Header>2015</List.Header>
                        <List.Description>
                          Amazon Best Selling Author & #4 Amazon Hot New Release
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='trophy' />
                      <List.Content>
                        <List.Header>2016 Recipient</List.Header>
                        <List.Description>
                           H.E.R.O. Award
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='graduation' />
                      <List.Content>
                        <List.Header>2017 Commencement Speaker</List.Header>
                        <List.Description>
                         Keiser University Graduation
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <List>
                    <List.Item>
                      <Icon name='certificate' />
                      <List.Content>
                        <List.Header>2019 Nominee</List.Header>
                        <List.Description>
                         Tampa Bay’s Corporate Philanthropy  Award
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          </Fade>
        </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
)

export default AboutSegment
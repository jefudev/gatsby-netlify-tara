import React from "react"
import {
    Container,
    Header,
    Segment,
    Grid,
    List
  } from 'semantic-ui-react'
  import 'semantic-ui-less/semantic.less'

const HomepageFooter = () => (
<Segment inverted vertical style={{ padding: '2em 0em' }}>
    <Container>
        <Grid inverted stackable>
            <Grid.Row column='equal'>
                <Grid.Column floated='left' width={8}>
                    Copyright &copy; {new Date().getFullYear()}
                </Grid.Column>
                <Grid.Column floated='right' textAlign='right' width={8}>
                    Designed with <span style={{color: '#e25555'}}>&#9829;</span> by <a href='https://www.speculativeweb.com/' target='_blank'><span style={{color: '#FFF'}}><strong>SpeculativeWEB</strong></span></a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</Segment>
)

export default HomepageFooter
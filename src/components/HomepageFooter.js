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
        <Grid inverted stackable className='footer__txt'>
            <Grid.Row>
                <Grid.Column>
                <List link inverted>
                <List.Item as='a' href='/'>Home</List.Item>
                <List.Item as='a' href='/media'>Media</List.Item>
                <List.Item as='a' href='/philanthropy'>Philanthropy</List.Item>
                <List.Item as='a' href='/gallery'>Gallery</List.Item>
                <List.Item as='a' href='/about'>About</List.Item>
                <List.Item as='a' href='/publish-in-paradise'>Publish in Paradise</List.Item>
                <List.Item as='a' href='/contact'>Contact</List.Item>
                </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row column='equal' >
                <Grid.Column floated='left' width={8}>
                    Copyright &copy; {new Date().getFullYear()}
                </Grid.Column>
                <Grid.Column floated='right' textAlign='right' width={8}>
                    Made with <span style={{color: '#e25555'}}>&#9829;</span> by <span style={{color: '#FFF'}}><strong>Jeff Lau</strong></span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</Segment>
)

export default HomepageFooter

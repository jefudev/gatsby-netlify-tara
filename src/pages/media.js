import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import {
    Segment,
    Header,
    Label,
    Container,
    Icon,
    Grid
  } from 'semantic-ui-react'
  import 'semantic-ui-less/semantic.less'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import MediaGalleryGrid from "../components/homepage/MediaGalleryGrid"

const Media = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="Media Appearances" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>Media Appearances</p>
            <Container style={{padding:'100px 0'}}>
                <Segment className='page__segment'>
                    <Label color='pink' as='a' className="segment__header segment__header--padding-bottom">
                        <Header className="segmentHeaderTitle" as="span">
                        Videos
                        </Header>
                    </Label>
                    <Grid stackable>
                        <Grid.Row>
                        <Grid.Column computer={16}>
                            <div className='videoDiv' style={{maxWidth:'900px',margin: '0 auto '}}><iframe src="https://streamable.com/s/e8q34/zpliid" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
                        </Grid.Column>
                        <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/gme68/spdqup" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
                        </Grid.Column>
                        <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/n0rio/cjvebn" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/7xhzo/asfsej" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
                        </Grid.Column>
                        <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/1sweh/fda" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p className='segment__txt' style={{paddingTop: '50px'}}>
                        Since debuting her first book in 2011, she has been booked on media outlets all over the world including; ABC, Daytime TV, FOX, The Morning Blend, Channel 10 News and did a book signing with CNN’s Senior Copy Editor of the Situation Room with Wolf Blitzer, John Dukakis. She has continued to do more interviews sharing her love of writing and helping other aspiring authors achieve the same goal. If you would like to contact Ms. Richter for an interview, please fill out the <a href='/contact'><strong>contact form here</strong></a>.
                    </p>
                    <Label color='pink' as='a' className="segment__header segment__header--padding-bottom">
                        <Header className="segmentHeaderTitle" as="span">
                        Gallery
                        </Header>
                    </Label>
                    <MediaGalleryGrid/>
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default Media
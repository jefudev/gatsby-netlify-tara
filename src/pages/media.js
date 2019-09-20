import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import {
    Segment,
    Header,
    Label,
    Container,
    Icon
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
                    <p className='segment__txt'>
                        Since debuting her first book in 2011, she has been booked on media outlets all over the world including; ABC, Daytime TV, FOX, The Morning Blend, Channel 10 News and did a book signing with CNN’s Senior Copy Editor of the Situation Room with Wolf Blitzer, John Dukakis. She has continued to do more interviews sharing her love of writing and helping other aspiring authors achieve the same goal. If you would like to contact Ms. Richter for an interview, please fill out the <a href='/contact'><strong>contact form here</strong></a>.
                    </p>
                    {/* <MediaGalleryGrid/> */}
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default Media
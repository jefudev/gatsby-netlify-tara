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
import GallerySegment from '../components/homepage/GallerySegment'

const Gallery = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="Gallery" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>Gallery</p>
            <Container style={{padding:'100px 0'}}>
                <GallerySegment/>
            </Container>

        </HomepageLayout>
)}

export default Gallery
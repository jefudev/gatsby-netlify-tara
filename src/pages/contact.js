import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import {
    Container,
  } from 'semantic-ui-react'
  import 'semantic-ui-less/semantic.less'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import ContactSegment from '../components/homepage/ContactSegment'

const Contact = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="Contact" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>Media Appearances</p>
            <Container style={{padding:'100px 0'}}>
                <ContactSegment />
            </Container>
        </HomepageLayout>
)}

export default Contact
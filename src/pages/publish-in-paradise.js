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

const PublishInParadise = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="Publish in Paradise" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>Publish in Paradise</p>
            <Container style={{padding:'100px 0'}}>
                <Segment className='page__segment'>
                    <p className='segment__txt' style={{textAlign:'left'}}>
                    Tara Richter is currently in the works of creating another amazing way for authors to write their book. Since living in Asia for four months, she has developed a writing retreat called Publish in Paradise!  It is going to be a two week adventure of exploring countries such as Thailand, Vietnam and Indonesia while writing your manuscript. It will intertwine her writing workshop series along with volunteering at elephant sanctuaries, meditating with the monks and more! Discover the healing and creative energy of Chiang Mai and leave with a written rough draft of your book. This new business is still in the concept phase, but she is hoping to launch the end the fall of 2020. If you would like to sign up for notifications on upcoming retreats or more information, please contact us here: <a href='www.publishparadise.com/contact'>www.publishparadise.com/contact</a>
                    </p>
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default PublishInParadise
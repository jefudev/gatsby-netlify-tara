import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import { graphql } from 'gatsby';
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

const About = (props) => {

    return(
        <HomepageLayout>
            <SEOComponent title="About" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>About</p>
            <Container style={{padding:'100px 0'}}>
                <Segment className='page__segment'>
                    <p className='segment__txt' style={{textAlign:'left'}}>

                    </p>
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default About

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`
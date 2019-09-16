import React from "react"
import { Link } from "gatsby"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import { graphql } from 'gatsby'
import '../styles/main.css'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import Hero from '../components/homepage/Hero'
import BookSegment from '../components/homepage/BookSegment'
import MediaSegment from '../components/homepage/MediaSegment'
import PhilanthropySegment from '../components/homepage/PhilanthropySegment'
import AboutSegment from '../components/homepage/AboutSegment'
import PublishInParadiseSegment from '../components/homepage/PublishInParadiseSegment'
import ContactSegment from '../components/homepage/ContactSegment'

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return(
    <HomepageLayout>

      <SEOComponent title="Home" />
      <Hero />
      <BookSegment />
      <MediaSegment />
      <PhilanthropySegment/>
      <AboutSegment />
      <PublishInParadiseSegment />
      <ContactSegment />
    </HomepageLayout>
  )
}

export default IndexPage
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

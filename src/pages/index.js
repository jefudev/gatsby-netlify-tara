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
import Helmet from 'react-helmet'
import '../styles/main.css'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import Hero from '../components/homepage/Hero'
import BookSegment from '../components/homepage/BookSegment'
import MediaSegment from '../components/homepage/MediaSegment'
import PhilanthropySegment from '../components/homepage/PhilanthropySegment'
import GallerySegment from '../components/homepage/GallerySegment'
import AboutSegment from '../components/homepage/AboutSegment'
import PublishingInParadiseSegment from '../components/homepage/PublishingInParadiseSegment'
import ContactSegment from '../components/homepage/ContactSegment'

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return(
    <HomepageLayout>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900|Lato:400,700|Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Helmet>
      <SEOComponent title="Home" />
      <Hero />
      <BookSegment />
      <MediaSegment />
      <PhilanthropySegment/>
      <GallerySegment/>
      <AboutSegment />
      <PublishingInParadiseSegment />
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

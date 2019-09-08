import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MainContainer from "../components/maincontainer"
import HomepageLayout from "../layouts/HomepageLayout"
import "semantic-ui-less/semantic.less"
import { graphql } from 'gatsby'

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return(
    <div>
    <HomepageLayout />
    <h1>{data.title}</h1>
    <h1>{data.intro}</h1>
    <h1>{data.image}</h1>
    <img src={data.image} />
    </div>
    // <Layout>
    //   <SEO title="Home" />
    //   <Hero />
    //   <MainContainer />
    // </Layout>    
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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MainContainer from "../components/maincontainer"
import HomepageLayout from "../layouts/HomepageLayout"
import "semantic-ui-less/semantic.less"

const IndexPage = () => (
  <HomepageLayout />
  // <Layout>
  //   <SEO title="Home" />
  //   <Hero />
  //   <MainContainer />
  // </Layout>
)

export default IndexPage

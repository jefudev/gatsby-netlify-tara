import React, { Component } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'semantic-ui-less/semantic.less'

import ResponsiveContainer from '../components/ResponsiveContainer'
import "../styles/main.css"
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return(
    <>
      <ResponsiveContainer siteTitle={data.site.siteMetadata.title}>
        <main className='layoutBackground'>{children}</main>
      </ResponsiveContainer>
      <Footer />
    </>
  )  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
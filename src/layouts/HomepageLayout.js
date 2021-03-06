import React, { Component } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'semantic-ui-less/semantic.less'
import Helmet from 'react-helmet'
import ResponsiveContainer from '../components/ResponsiveContainer'
import "../styles/main.css"
import HomepageFooter from '../components/HomepageFooter'
import favicon from "../images/favicon.ico";

const HomepageLayout = ({ children }) => {
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
      <Helmet
        link={[
            { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon}` },
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
        ]}>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900|Lato:400,700|Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Helmet>
      <ResponsiveContainer siteTitle={data.site.siteMetadata.title}>
        <main className='layoutBackground'>{children}</main>
      </ResponsiveContainer>
      <HomepageFooter />
    </>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
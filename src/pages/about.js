import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"

const About = (props) => {
    return(
        <HomepageLayout>
            <p style={{margin:'100px',textAlign:'center'}}>
                Site in progress. Check Back Soon!
            </p>
        </HomepageLayout>
)}

export default About
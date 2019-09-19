import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import GallerySegment from '../components/homepage/GallerySegment'

const Gallery = (props) => {
    return(
        <HomepageLayout>
            <p style={{margin:'100px',textAlign:'center'}}>
                Site in progress. Check Back Soon!
            </p>
            {/* <GallerySegment/> */}
        </HomepageLayout>
)}

export default Gallery
import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"
import GallerySegment from '../components/homepage/GallerySegment'

const Gallery = (props) => {
    return(
        <HomepageLayout>
            <GallerySegment/>
        </HomepageLayout>
)}

export default Gallery
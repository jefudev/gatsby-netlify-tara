import React from "react"
import GalleryGrid from "./GalleryGrid"
import {
  Segment,
  Container
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import SegmentHeader from '../SegmentHeader'

const GallerySegment = () => (
  <Container>
    <Segment className="gallery-segment" stacked >
      <SegmentHeader>
        Gallery
      </SegmentHeader>      
      <GalleryGrid />
    </Segment>
  </Container>
)

export default GallerySegment
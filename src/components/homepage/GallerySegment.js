import React from "react"
import GalleryGrid from "./GalleryGrid"
import {
  Segment,
  Container,
  Header,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

const GallerySegment = () => (
  <Container name='gallery__link'>
    <Segment className="gallery-segment" stacked >
      <Label color='pink' as='a' className="segment__header segment__header--padding-bottom">
        <Header className="segmentHeaderTitle" as="span">
          Gallery
        </Header>
      </Label>
      <GalleryGrid />
    </Segment>
  </Container>
)

export default GallerySegment
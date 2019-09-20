import React from "react"
import GalleryGrid from "./GalleryGrid"
import AuthorAwards from "./AuthorAwards"
import {
  Segment,
  Container,
  Header,
  Label,
  Grid
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import 'lazysizes'

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

    <Segment className="gallery-segment" stacked >
      <Label color='pink' as='a' className="segment__header segment__header--padding-bottom">
        <Header className="segmentHeaderTitle" as="span">
          Author Award Ceremonies
        </Header>
      </Label>
      <AuthorAwards />
      <Label color='pink' as='a' className="segment__header segment__header--padding-bottom">
          <Header className="segmentHeaderTitle" as="span">
          Videos
          </Header>
      </Label>
      <Grid stackable>
          <Grid.Row>
          <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/alqkf/wxjtsd" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
          </Grid.Column>
          <Grid.Column computer={8}><div className='videoDiv'><iframe src="https://streamable.com/s/cicd9/hkfnnw" frameborder="0" width="100%" height="100%" allowfullscreen className="videoiFrame lazyload"></iframe></div>
          </Grid.Column>
          </Grid.Row>
      </Grid>

    </Segment>
  </Container>
)

export default GallerySegment
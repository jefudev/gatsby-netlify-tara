import React from "react"
import {
  Segment,
  Header,
  Label,
  Container,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import Slider from "react-slick";
import "./slick/slick.css";
import "./slick/slick-theme.css";

const src='https://picsum.photos/75/75'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};

const BookSegment = () => (
  <Container className='book__content'>
    <a href='https://www.facebook.com' target='_blank' class='social__icons'><Icon name='facebook square' size='big' link/></a>
    <a href='https://www.linkedin.com' target='_blank' class='social__icons'><Icon name='linkedin' size='big' link/></a>
    <a href='https://www.twitter.com' target='_blank' class='social__icons'><Icon name='twitter square' size='big' link/></a>

    <Segment className="book-segment" stacked >
      <Label color='pink' as='a' className="segment__header">
        <Header className="segmentHeaderTitle" as="span">
          Books
        </Header>
      </Label>
      <p>
        Tara has written and published 11 of her own books. Her 12th one will be released in 2020. Multiple titles have become Amazon Best Sellers. She has two ongoing series; the first one is “The Dating Jungle.” She wrote and published her first book in the Dating Jungle series in 2011. Her second book series is how to write, edit, publish and market a book. Find all of them on Amazon.
      </p>
      <div className="book__container">
        <Slider {...settings}>
          <div>
            <a href="" target="_blank"><img className="book" src={require("../../images/books/launch-your-book.jpg")}/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src={require("../../images/books/publish-a-book-yourself.jpg")}/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src={require("../../images/books/write-a-book-in-4-weeks.jpg")}/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src={require("../../images/books/dating-jungle-coloring-book.jpg")}/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src="https://picsum.photos/200/300"/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src="https://picsum.photos/200/300"/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src="https://picsum.photos/200/300"/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src="https://picsum.photos/200/300"/></a>
          </div>
          <div>
            <a href="" target="_blank"><img className="book" src="https://picsum.photos/200/300"/></a>
          </div>
        </Slider>
      </div>
    </Segment>
  </Container>
)

export default BookSegment
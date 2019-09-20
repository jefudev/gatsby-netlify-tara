import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Gallery from '../../pages/gallery';

class AuthorAwards extends React.Component {

    render() {
      let array = [];
      for(let i = 1; i<59; i++) {
        array.push('authoraward'+i);
      }
      let images = array.map(image => {
         return <div style={{height:'100%'}}><img key={image} src={require(`../../images/gallery/awards/${image}.jpg`)} alt="" className="carousel-img lazyload" /></div>
      });

      return (
        <Carousel>
            { images }
        </Carousel>
        );
    }
}
export default AuthorAwards
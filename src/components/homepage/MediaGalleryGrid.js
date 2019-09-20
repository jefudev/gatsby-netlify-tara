import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Gallery from '../../pages/gallery';

class MediaGalleryGrid extends React.Component {

    render() {
      let array = [];
      for(let i = 1; i<30; i++) {
        array.push('media'+i);
      }
      let images = array.map(image => {
         return <div style={{height:'100%'}}><img key={image} src={require(`../../images/gallery/media/${image}.jpg`)} alt="" className="carousel-img lazyload" /></div>
      });

      return (
        <Carousel>
            { images }
        </Carousel>
        );
    }
}
export default MediaGalleryGrid
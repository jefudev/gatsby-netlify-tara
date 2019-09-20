import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MediaGalleryGrid = () => (
  <Carousel>
    <div>
        <img src="https://picsum.photos/300/200" />
    </div>
  </Carousel>
)

export default MediaGalleryGrid
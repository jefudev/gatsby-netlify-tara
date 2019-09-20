import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

const GalleryGrid = () => (
  <Carousel>
    <div>
        <img src="https://picsum.photos/300/200" />
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="https://picsum.photos/300/200" />
        <p className="legend">Legend 3</p>
    </div>                    
  </Carousel>
)

export default GalleryGrid
import React from "react"
import {
  Image,
  Container,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import Typewriter from 'typewriter-effect';

import heroImage from '../../images/homepage-hero.jpg'
const Hero = () => (
  <div className='hero__img--container'>
    <Typewriter
      options={{
        autoStart: true,
        loop: false,
        delay: 75,
      }}
      onInit={(typewriter) => {
        typewriter.typeString('')
        .pauseFor(2000)
        typewriter.typeString('<span class="typewriter__name">Tara<br>Richter</span><br>')
        .pauseFor(1000)
        typewriter.typeString('<strong>Author</strong>')
        .pauseFor(1000)
        .deleteChars(6)
        typewriter.typeString('<strong>Publisher</strong>')
        .pauseFor(1000)
        .deleteChars(9)
        typewriter.typeString('<strong>Writing Coach</strong>')
        .pauseFor(1000)
        .deleteChars(13)
        typewriter.typeString('<strong>Philanthropist</strong>')
        .pauseFor(1000)
        .deleteChars(14)
        typewriter.typeString('<strong>Entrepreneur</strong>')
        .pauseFor(1000)
        .deleteChars(12)
        typewriter.typeString('<strong>Superwoman</strong>')
        .pauseFor(1000)
        .start();
      }}
    />
    <div id='hero__img'></div>
  </div>
)




export default Hero
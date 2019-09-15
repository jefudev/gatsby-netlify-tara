import React, {Component} from "react"
import 'semantic-ui-less/semantic.less'
import Fade from 'react-reveal/Fade';

class Hero extends Component {

  render() {
    return (
      <div className='hero__img--container'>
        <p className="hero__about">
          <span className='hero__name'>Tara<br/>Richter<br/></span>
          <Fade delay={2000} cascade>
          <span className='hero__titles'>Author</span>
          <span className='hero__titles'>Publisher</span>
          <span className='hero__titles'>Writing Coach</span>
          <span className='hero__titles'>Philanthropist</span>
          </Fade>
        </p>
        <div id='hero__img'></div>
      </div>
    )
  }
}

export default Hero

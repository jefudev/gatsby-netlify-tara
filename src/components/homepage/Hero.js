import React, {Component} from "react"
import 'semantic-ui-less/semantic.less'

class Hero extends Component {

  render() {
    return (
      <div className='hero__img--container'>
        <span class="typewriter__name">Tara<br />Richter</span><br/>
        Author, Publisher, Writing Coach, and Philanthropist
        <div id='hero__img'></div>
      </div>
    )
  }
}

export default Hero

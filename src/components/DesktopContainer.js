import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import getWidth from './getWidth'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const durationFn = function(deltaTop) {
    return deltaTop;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })


    render () {
        const { children } = this.props
        const { fixed } = this.state

        return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            >
            <Segment
                inverted
                textAlign='center'
                style={{padding: '1em 0em' }}
                vertical
            >
                <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
                >
                <Container>
                    <Menu.Item as='a'><Link activeClass="active" className="books__link" to="books__link" spy={true} smooth={true} duration={500}>Books</Link></Menu.Item>
                    <Menu.Item as='a'><Link activeClass="active" className="media__link" to="media__link" spy={true} smooth={true} duration={500}>Media</Link></Menu.Item>
                    <Menu.Item as='a'><Link activeClass="active" className="phil__link" to="phil__link" spy={true} smooth={true} duration={500}>Philanthropy</Link></Menu.Item>
                    <Menu.Item as='a'><Link activeClass="active" className="gallery__link" to="gallery__link" spy={true} smooth={true} duration={500}>Gallery</Link></Menu.Item>
                    <Menu.Item as='a'><Link activeClass="active" className="about__link" to="about__link" spy={true} smooth={true} duration={500}>About</Link></Menu.Item>
                    <Menu.Item as='a'><Link activeClass="active" className="pip__link" to="pip__link" spy={true} smooth={true} duration={500}>Publishing in Paradise</Link></Menu.Item>
                    <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                        <Link className="contact__link" to="contact__link" spy={true} smooth={true} duration={500}>Say Hello!</Link>
                    </Button>
                    </Menu.Item>
                </Container>
                </Menu>
            </Segment>
            </Visibility>

            {children}
        </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer
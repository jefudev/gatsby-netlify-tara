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

const durationFn = function(deltaTop) {
    return deltaTop;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {

    render () {
        const { children } = this.props

        return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            >
            <Segment
                textAlign='center'
                style={{padding: '0' }}
                vertical
                className='desktop__header'
            >
                <Menu
                size='large'
                inverted
                >
                <Container className='hidden-mobile'>
                    <Menu.Item as='a' active href='/'>Home</Menu.Item>
                    <Menu.Item as='a' href='/media'>Media</Menu.Item>
                    <Menu.Item as='a' href='/philanthropy'>Philanthropy</Menu.Item>
                    <Menu.Item as='a' href='/gallery'>Gallery</Menu.Item>
                    <Menu.Item as='a' href='/about'>About</Menu.Item>
                    <Menu.Item as='a' href='/publish-in-paradise'>Publish in Paradise</Menu.Item>
                    <Menu.Item position='right'>
                        <Button as='a' href='/contact' style={{ marginLeft: '0.5em' }} primary>
                            Say Hello!
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
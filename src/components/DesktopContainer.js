import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Menu,
    Responsive,
    Modal,
    Icon,
    Divider
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'

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
        <Responsive>
            <Menu inverted stackable className='desktop__header' style={{borderRadius:0}}>
                <Container>
                <Menu.Item as='a' href='/'>Home</Menu.Item>
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
            <Menu inverted className='mobile__header'>
                <Menu.Item position='right'>
                    <Modal trigger={<Icon name='bars'/>}>
                        <Modal.Content image>
                            <Modal.Description className='mobileheader__menu'>
                            <Divider horizontal inverted>
                                <a href='/'>Home</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/media'>Media</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/philanthropy'>Philanthropy</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/gallery'>Gallery</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/about'>About</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/publish-in-paradise'>Publish in Paradise</a>
                            </Divider>
                            <Divider horizontal inverted>
                                <a href='/contact'>Contact</a>
                            </Divider>

                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
            </Menu>
            {children}
        </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export default DesktopContainer


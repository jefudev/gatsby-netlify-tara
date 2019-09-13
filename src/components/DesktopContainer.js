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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
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
                    <Menu.Item as='a' active>Books</Menu.Item>
                    <Menu.Item as='a'>Media</Menu.Item>
                    <Menu.Item as='a'>Philanthropy</Menu.Item>
                    <Menu.Item as='a'>Gallery</Menu.Item>
                    <Menu.Item as='a'>About</Menu.Item>
                    <Menu.Item as='a'>Publishing in Paradise</Menu.Item>
                    <Menu.Item position='right'>
                    {/* <Button as='a' inverted={!fixed}>
                        Log in
                    </Button> */}
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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
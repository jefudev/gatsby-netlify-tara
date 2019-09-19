import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-less/semantic.less'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
    </div>
  )

  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }

export default ResponsiveContainer
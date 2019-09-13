import React from "react"
import {
    Header,
    Label
  } from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import PropTypes from 'prop-types'

const SegmentHeader = ({ children }) => (
    <Label as='a' color='pink' ribbon className="segment__header">
        <Header className="segmentHeaderTitle" as="span">
            {children}
        </Header>
    </Label>

)
SegmentHeader.propTypes = {
    children: PropTypes.node,
}

export default SegmentHeader
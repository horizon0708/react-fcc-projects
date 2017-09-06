import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ToggleButton from 'react-toggle-button'
import OutputScreen from './OutputScreen';
class TopPanel extends Component {
    constructor() {
        super();
    }

    render() {
        const {strict, actions, message} = this.props;
        return (
            <Col xs={10} xsOffset={1}>
                <h1>Simon Game</h1>
            </Col>
        );
    }
}
export default TopPanel;
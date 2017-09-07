import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class TopPanel extends Component {
    render() {
        return (
            <Col xs={10} xsOffset={1}>
                <h1>Simon Game</h1>
            </Col>
        );
    }
}
export default TopPanel;
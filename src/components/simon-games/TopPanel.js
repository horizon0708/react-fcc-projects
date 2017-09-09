import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class TopPanel extends Component {
    render() {
        return (
            <Col xs={10} xsOffset={1}>
                <h1>Simon Game</h1>
                <p>Reach level 20 to win!</p>
                <p>Level: {this.props.level}</p>
            </Col>
        );
    }
}
export default TopPanel;
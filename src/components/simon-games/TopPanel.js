import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class TopPanel extends Component {
    render() {
        return (
            <div>
                <h1>Simon Game</h1>
                <p>Reach level 20 to win!</p>
                <p>Level: {this.props.level}    Current: {this.props.current}</p>
            </div>
        );
    }
}
export default TopPanel;
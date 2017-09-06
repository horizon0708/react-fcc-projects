import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ToggleButton from 'react-toggle-button'

class ControlPanel extends Component {
    constructor() {
        super();
    }

    render() {
        const {strict, actions} = this.props;
        return (
            <Col xs={10} xsOffset={1}>
                Strict Mode

                <ToggleButton
                    value={strict}
                    onToggle={actions.toggleStrict}
                />
            </Col>
        );
    }
}
export default ControlPanel;
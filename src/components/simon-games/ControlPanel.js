import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'

class ControlPanel extends Component {
    render() {
        const {strict, actions} = this.props;
        return (
            <div>
                Strict Mode

                <ToggleButton
                    value={strict}
                    onToggle={actions.toggleStrict}
                />
            </div>
        );
    }
}
export default ControlPanel;
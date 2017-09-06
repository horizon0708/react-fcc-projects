import React, { Component } from 'react';


class OutputScreen extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }


    componentDidUpdate(prevProps, prevState) {
        this.flashMessage();
    }

    flashMessage() {

        setTimeout(() => {
            this.setState({ show: !this.state.show })
        }, 1000);

    }

    render() {
        return (
            <div>
                {this.state.show ? this.props.message : null}
            </div>
        );
    }
}
export default OutputScreen;

import PropTypes from 'prop-types';
import React, { Component } from 'react';

class GameButton extends Component {
    constructor() {
        super();
        this.state = {
            audio: null
        }
    }

    componentDidMount() {
        this.setState({ audio: new Audio(this.props.audio) }, () => console.log(this.state));
    }

    handleClick(handler, e) {
        if (!this.props.instructionPlaying) {
            this.activate();
        }
        handler(this.props.seqID);

    }

    activate() {
        const { htmlid } = this.props
        const button = document.getElementById(htmlid);
        button.style.opacity = 1;
        this.state.audio.play();

        setTimeout(function () {
            button.style.opacity = 0.5;
        }, 200);

    }

    render() {
        const { htmlid, color, handler } = this.props;
        const btnStyle = {
            backgroundColor: color,
            opacity: 0.5
        }
        return (
            <div className="simon-button-background">
                <div onClick={(e) => this.handleClick(handler, e)} style={btnStyle} id={htmlid}>
                    
                </div>
            </div>
        );
    }
}

export default GameButton;

GameButton.PropTypes = {
    color: PropTypes.string.isRequired,
    htmlid: PropTypes.string.isRequired,
    seqID: PropTypes.number.isRequired
}

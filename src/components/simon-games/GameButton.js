import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class GameButton extends Component {
    
    handleClick(handler, e) {
        this.activate();
        handler(this.props.seqID);
        
    }

    activate(){
        const {htmlid, audio} = this.props
        const button = document.getElementById(htmlid);
        button.style.opacity = 1;
        setTimeout(function() {
            button.style.opacity = 0.5;
        }, 200);
        audio.play();
    }

    render() {
        const {htmlid, color, handler } = this.props;
        const btnStyle = {
            backgroundColor: color,
            opacity: 0.5
        }
        return (
            <div style={{ backgroundColor: 'black' }}>
                <div onClick={(e)=>this.handleClick(handler,e)} style={btnStyle} id={htmlid}>
                    test
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

import React from 'react';

const DebugDisplay = ({ props }) => {
    
    return <div>
        level: {props.level} <br />
        message: {props.message}<br />
        strict: {props.strict ? "ON" : "OFF"}<br />
        on: {props.on ? "ON" : "OFF"}<br />
        instruction: {props.instructionPlaying ? "PLAYING" : "NOT PLAYING"}<br />
        current: {props.current}<br />
        sequence: {props.sequence}<br />
    </div>
}

export default DebugDisplay;
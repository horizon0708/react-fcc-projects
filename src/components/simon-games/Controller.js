import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GameButton from './GameButton';
import Whilst from 'async/whilst';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            turn: 1,
            counter: 0,
            instructionPlaying: false,
        }
        this.buttonPressHandler = this.buttonPressHandler.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { sequence, current, level } = this.props;

        if (current === 0 && level > prevProps.level) {
            this.playInstruction(sequence, current, level);
        }
    }
    buttonPressHandler(seqID) {
        const { actions, instructionPlaying } = this.props;
        if (instructionPlaying) {
            actions.customMessage("WAIT FOR THE INSTRUCTION TO FINISH!");
        } else {
            actions.evaluatePress(seqID);

        }

    }

    debug(e) {
        const { sequence, current, level } = this.props;
        this.playInstruction(sequence, current, level);
    }

    playInstruction(sequence, current, level) {
        const { actions } = this.props;
        let counter = 0;
        actions.toggleInstruction();
        Whilst(
            () => {
                return counter < level;
            },
            (cb) => {

                setTimeout(() => {
                    this.refs[seqIdToRef[sequence[counter]]].activate();
                    counter++;
                    cb();
                }, 1000);

            },
            (err, res) => {
                actions.toggleInstruction();
            }
        );
    }

    render() {
        return (
            <Col xs={10} xsOffset={1}>
                <Col xs={6} className="simon-buttons">
                    <GameButton
                        instructionPlaying={this.props.instructionPlaying}
                        ref='red'
                        color='red'
                        htmlid='simon-red-button'
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}
                        seqID={0} />
                </Col>
                <Col xs={6} className="simon-buttons">
                    <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="blue"
                        color={'blue'}
                        htmlid={'simon-blue-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"}
                        seqID={1} />
                </Col>
                <Col xs={6} className="simon-buttons">
                    <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="green"
                        color={'green'}
                        htmlid={'simon-green-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"}
                        seqID={2} />
                </Col>
                <Col xs={6} className="simon-buttons">
                    <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="yellow"
                        color={'yellow'}
                        htmlid={'simon-yellow-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}
                        seqID={3} />
                </Col>
                <Button onClick={e => this.debug(e)}>
                    debug
            </Button>
            </Col>


        );
    }
}

const seqIdToRef = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow"
}


Controller.PropTypes = {
    strict: PropTypes.bool.isRequired,
    on: PropTypes.bool.isRequired,
    sequence: PropTypes.array.isRequired
}
export default Controller;
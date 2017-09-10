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
        };
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
        const { actions } = this.props;
        return (
            <div>
                <table className="simon-table">
                    <tbody>
                        <tr>
                            <th>
                            <GameButton
                        instructionPlaying={this.props.instructionPlaying}
                        ref='red'
                        color='red'
                        htmlid='simon-red-button'
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}
                        seqID={0} />
                            </th>
                            <th>
                            <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="blue"
                        color={'blue'}
                        htmlid={'simon-blue-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"}
                        seqID={1} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                            <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="green"
                        color={'green'}
                        htmlid={'simon-green-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"}
                        seqID={2} />
                            </th>
                            <th>
                            <GameButton
                        instructionPlaying={this.props.instructionPlaying}

                        ref="yellow"
                        color={'yellow'}
                        htmlid={'simon-yellow-button'}
                        handler={this.buttonPressHandler}
                        audio={"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"}
                        seqID={3} />
                            </th>
                        </tr>
                    </tbody>
                </table>

                <Button onClick={e => this.debug(e)}>
                    Play Instruction
            </Button>

                <Button onClick={()=>actions.restartGame()}>Restart</Button>
            </div>


        );
    }
}

const seqIdToRef = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow"
};


Controller.PropTypes = {
    strict: PropTypes.bool.isRequired,
    on: PropTypes.bool.isRequired,
    sequence: PropTypes.array.isRequired
};
export default Controller;
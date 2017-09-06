import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import GameButton from './GameButton';
import Whilst from 'async/whilst';
import PropTypes from 'prop-types';
import { generateSequence } from './Logic';

class Controller extends Component {
    constructor() {
        super();
        this.state = {
            turn: 1,
            counter: 0,
            instructionPlaying: false,
        }
    }

    buttonPressHandler(seqID) {
        console.log(seqID);
    }

    debug(e) {
        //this.refs.red.activate();
        console.log(this.refs)
        this.playSeqeuence();
    }

    playSeqeuence(array) {
        let test = [0, 0, 1, 2, 3, 3];
        let counter = 0;
        Whilst(
            () => {
                return counter < test.length;
            },
            (cb) => {
                this.refs[seqIdToRef[test[counter]]].activate();
                counter++;
                setTimeout(() => {
                    cb();
                }, 1000);

            },
            (err, res) => {
                console.log('done')
            }
        );
    }

    render() {
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>
                            <td><GameButton
                                ref='red'
                                color='red'
                                htmlid='simon-red-button'
                                handler={this.buttonPressHandler}
                                audio={new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")}
                                seqID={0} /></td>
                            <td><GameButton
                                ref="blue"
                                color={'blue'}
                                htmlid={'simon-blue-button'}
                                handler={this.buttonPressHandler}
                                audio={new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")}
                                seqID={1} /></td>
                        </tr>
                        <tr>
                            <td><GameButton
                                ref="green"
                                color={'green'}
                                htmlid={'simon-green-button'}
                                handler={this.buttonPressHandler}
                                audio={new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")}
                                seqID={2} /></td>
                            <td><GameButton
                                ref="yellow"
                                color={'yellow'}
                                htmlid={'simon-yellow-button'}
                                handler={this.buttonPressHandler}
                                audio={new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")}
                                seqID={3} /></td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={e => this.debug(e)}>
                    debug
            </Button>
            </div>


        );
    }
}

const seqIdToRef = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow"
}


Controller.PropTypes ={
    strict: PropTypes.bool.isRequired,
    on: PropTypes.bool.isRequired,
    sequence: PropTypes.array.isRequired
}
export default Controller;
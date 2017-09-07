import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ai from './ai';
import * as logic from './logic';

class Square extends Component {

    renderSquare(owner) {
        if (owner === 1) {
            return <i className="fa fa-times tic-mark" aria-hidden="true"></i>
        }
        if (owner === 2) {
            return <i className="fa fa-circle-o tic-mark" aria-hidden="true"></i>
        }
        return "";
    }

    clickHandler(){
        const { actions, squareId, boardState, turn } = this.props;

        console.log(this.props);
        if (boardState[squareId] === 0 && !logic.gameIsOver(boardState) && turn === 1){
            actions.takeSquare(squareId);
            setTimeout(function() {    
                actions.takeSquare(ai.evaluateNextMove(this.props.tictactoe.boardState));
            }.bind(this) , 500);
        }
    }

    render() {
        const { boardState, squareId} = this.props;
        const squareOwner = boardState ? boardState[squareId] : 0;
        return (
            <div onClick={()=>this.clickHandler()} className="tic-square">
                {this.renderSquare(squareOwner)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        tictactoe: state.tictactoe
    };
}

export default connect(
    mapStateToProps
)(Square);

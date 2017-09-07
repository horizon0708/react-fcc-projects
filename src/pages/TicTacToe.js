import React, { Component } from 'react';
import Board from '../components/tictactoe/Board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tictactoeActions';
import { Col, Row, Button } from 'react-bootstrap';
import '../styles/tictactoe.css';
import * as logic from '../components/tictactoe/logic';

class TicTacToe extends Component {
    constructor() {
        super();
    }

    componentDidUpdate(prevProps, prevState) {
        if (logic.checkForWin(prevProps.tictactoe.boardState) 
            !== logic.checkForWin(this.props.tictactoe.boardState)) {
                setTimeout(function() {
                    this.alertGameEnd(this.props.tictactoe.boardState);
                    
                    }.bind(this), 500);
        }
        
    }

    alertGameEnd(gameState){
        if (logic.checkForWin(gameState) === 1 || logic.checkForWin(gameState) === 2){
            alert(`Player ${logic.checkForWin(gameState)} has won!`);
        }
        if (logic.checkForWin(gameState) === 3 ){
            alert(`Draw!`);
        }
    }

    render() {
        const { actions } = this.props
        const { tictactoe } = this.props;
        return (
            <div>
                <i className="fa fa-circle-o" aria-hidden="true"></i>
                <Board actions={actions} {...tictactoe}/>
                <Button onClick={actions.resetBoard}>
                    Play Again!
                </Button>
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        tictactoe: state.tictactoe
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicTacToe);

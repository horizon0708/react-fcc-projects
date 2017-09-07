import React, { Component } from 'react';
import Board from '../components/tictactoe/Board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tictactoeActions';
import { Col, Row, Button } from 'react-bootstrap';

class TicTacToe extends Component {
    constructor() {
        super();
    }

    render() {
        const { actions } = this.props
        const { tictactoe } = this.props;
        const ticActions = {
            actions
        }
        return (
            <div>
                <i class="fa fa-circle-o" aria-hidden="true"></i>
                <Board {... ticActions} {...tictactoe}/>
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
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

import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    render(){
        const { boardState, actions, turn } = this.props
        const props = {
            boardState,
            actions,
            turn
        }
        return(
            <table className="tic-table">
                <tbody>
                    <tr>
                        <td><Square {...props} squareId={1}/></td>
                        <td><Square {...props} squareId={2}/></td>
                        <td><Square {...props} squareId={3}/></td>
                    </tr>
                    <tr>
                        <td><Square {...props} squareId={4} /></td>
                        <td><Square {...props} squareId={5} /></td>
                        <td><Square {...props} squareId={6} /></td>
                    </tr>
                    <tr>
                        <td><Square {...props} squareId={7} /></td>
                        <td><Square {...props} squareId={8} /></td>
                        <td><Square {...props} squareId={9} /></td>
                    </tr>
                </tbody>
        </table>
        );
    }
}
export default Board;
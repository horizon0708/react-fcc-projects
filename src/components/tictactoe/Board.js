import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Square from './Square';

class Board extends Component {
constructor(){
    super();
}

    render(){
        const { boardState, actions} = this.props

        return(
            <Table>
                <tr>
                    {console.log(this.props)}
                    <td>a<Square actions={actions} squareId={0} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={1} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={2} boardState={boardState}/></td>
                </tr>
                <tr>
                    <td>a<Square actions={actions} squareId={3} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={4} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={5} boardState={boardState}/></td>
                </tr>
                <tr>
                    <td>a<Square actions={actions} squareId={6} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={7} boardState={boardState}/></td>
                    <td>a<Square actions={actions} squareId={8} boardState={boardState}/></td>
                </tr>
        </Table>
        );
    }
}
export default Board;
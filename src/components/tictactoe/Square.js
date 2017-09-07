import React, { Component } from 'react';

class Square extends Component {

    renderSquare(owner) {
        if (owner === 1) {
            return <i className="fa fa-times" aria-hidden="true"></i>
        }
        if (owner === 2) {
            return <i className="fa fa-circle-o" aria-hidden="true"></i>
        }
        return "null";
    }

    clickHandler(){
        const { actions, squareId } = this.props;
        actions.takeSquare(squareId);
        console.log(this.props);
    }

    render() {
        const { boardState, squareId} = this.props;
        const squareOwner = boardState ? boardState[squareId] : 0;
        return (
            <div onClick={()=>this.clickHandler()}>
                {this.renderSquare(squareOwner)}
            </div>
        );
    }
}
export default Square;
import React, { Component } from 'react';
import SimonGame from './SimonGame';

class Main extends Component {
constructor(){
    super();
}

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default Main;
import React, { Component } from 'react';
import Controller from '../components/simon-games/Controller';

class SimonGame extends Component {
constructor(){
    super();
    this.state ={
        
    }
}

    buttonPressHandler(seqID){
        console.log(seqID);
    }

    render(){
        return(
            <Controller />
        );
    }
}
export default SimonGame;
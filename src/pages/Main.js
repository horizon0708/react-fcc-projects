import React, { Component } from 'react';
import Header from '../components/Header';
class Main extends Component {

    render(){
        return(
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
export default Main;
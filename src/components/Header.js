import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    
    render(){
        return(
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <a>Redux FCC Projects</a>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              <LinkContainer to="/simongame">
                <NavItem eventKey={1}>Simon Says</NavItem>
                </LinkContainer>
                <LinkContainer to="/tictactoe">
                <NavItem eventKey={2}>TicTacToe</NavItem>
                </LinkContainer>
                <LinkContainer to="/twitchviewer">
                <NavItem eventKey={3}>Twitch Viewer</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Header;
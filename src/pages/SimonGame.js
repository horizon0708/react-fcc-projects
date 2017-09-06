import React, { Component } from 'react';
import Controller from '../components/simon-games/Controller';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/simonActions';
import { Col, Row, Button } from 'react-bootstrap';
import ControlPanel from '../components/simon-games/ControlPanel';
import TopPanel from '../components/simon-games/TopPanel';
import '../styles/simon.css';

class SimonGame extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    buttonPressHandler(seqID) {
        console.log(seqID);
    }

    render() {
        const { actions } = this.props
        const { simon } = this.props;
        const simonActions = {
            actions
        }

        const simonStates = {
            simon
        }

        return (
            <Row>
                <Col xs={12} md={8} mdOffset={2}>
                    <Col xs={12}>
                        <TopPanel {...simonActions} {...simon} />
                    </Col>
                    <Col xs={12}>
                        <Controller {...simonActions} {...simon} />
                    </Col>
                    <Col xs={12}>
                        <ControlPanel {...simonActions} {...simon} />
                    </Col>
                </Col>
            </Row>

        );
    }
}

function mapStateToProps(state) {
    return {
        simon: state.simon
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
)(SimonGame);

import React, { Component } from 'react';
//import ViewerList from './ViewerList'; <ViewerList actions={actions} {...twitch}/>
import { Row, Col, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/twitchActions';

class TwitchTvViewer extends Component {
    componentDidMount() {
        actions.getStreams('OGN_LOL');
    }

    render(){
        const { actions } = this.props
        const { twitch } = this.props;

        return(
            <Row>
                <Col xs={12}>
                    <Button onClick={()=>console.log(this.props)}>
                        debug!
                    </Button>
                    <Button onClick={actions.getStreams('ogn_lol')}>
                        debug!
                    </Button>
                </Col>
            </Row>
        );
    }
}
function mapStateToProps(state) {
    return {
        twitch: state.twitch
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
)(TwitchTvViewer);
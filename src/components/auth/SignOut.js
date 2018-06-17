import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return <h1>Sign Out</h1>;
    }
}

export default connect(
    null,
    actions
)(SignOut);

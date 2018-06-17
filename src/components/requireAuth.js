import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }
        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
        shouldNavigateAway() {
            if (this.props.auth.user.token === null) {
                this.props.history.push('/');
            }
        }
        render() {
            console.log(this.props);
            return <ChildComponent {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return {
            auth: state.auth.success,
            state: state
        };
    }
    return connect(mapStateToProps)(ComposedComponent);
};

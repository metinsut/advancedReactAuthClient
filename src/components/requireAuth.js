import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
   class ComposedComponent extends Component {
      state = {
         active: false
      };
      // Our component just got rendered
      componentDidMount() {
         this.shouldNavigateAway();
      }

      componentDidUpdate(prevProps, prevState) {
         if (this.props.auth.user.token !== prevProps.auth.user.token) {
            console.log("go");
            this.shouldNavigateAway();
         }
      }

      shouldNavigateAway() {
         if (this.props.auth.user.token === null) {
            this.setState({ auth: false });
            this.props.history.push("/");
         } else {
            this.setState({ auth: true });
         }
      }
      render() {
         return this.state.auth === true ? (
            <ChildComponent {...this.props} />
         ) : (
            <div />
         );
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

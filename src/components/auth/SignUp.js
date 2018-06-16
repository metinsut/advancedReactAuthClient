import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../actions';

class SignUp extends React.Component {
    onSubmit = data => {
        this.props.signup(data, () => {
            this.props.history.push('/feature');
        });
    };
    render() {
        const { pristine, submitting, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <legend>Email</legend>
                    <label>E-mail</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                        required
                    />
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                        required
                    />
                </fieldset>
                <fieldset>
                    <legend>Send</legend>
                    <label>Send</label>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                </fieldset>
                <div>
                    {this.props.auth.fail && <h1>{this.props.auth.fail}</h1>}
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default compose(
    connect(
        mapStateToProps,
        actions
    ),
    reduxForm({ form: 'signup' })
)(SignUp);

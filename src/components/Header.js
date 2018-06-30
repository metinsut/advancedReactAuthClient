import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {

        return (
            <header>
                <Link to="/">Redux Auth</Link>
                {!this.props.auth ? (
                    <Fragment>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/signin">Sign In</Link>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Link to="/signout">Sign Out</Link>
                        <Link to="/feature">Feature</Link>
                    </Fragment>
                )}
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth.success.user.token
    };
};

export default connect(mapStateToProps)(Header);

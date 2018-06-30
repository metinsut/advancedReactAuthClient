import React from 'react';
import Header from '../components/Header';
import { Switch, Route } from 'react-router-dom';
import Wellcome from '../components/Welcome';
import Signup from '../components/auth/SignUp';
import SignOut from '../components/auth/SignOut';
import Feature from '../components/Feature';
import SignIn from './auth/SignIn';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Wellcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={SignIn} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={SignOut} />
            </Switch>
        </React.Fragment>
    );
};

export default App;

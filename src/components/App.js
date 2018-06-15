import React from 'react';
import Header from '../components/Header';
import { Switch, Route } from 'react-router-dom';
import Wellcome from '../components/Welcome';
import Signup from '../components/auth/SignUp';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Wellcome} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </React.Fragment>
    );
};

export default App;

import React, {Component} from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Company from './Company';
import Companies from './Companies';

export default class Routes extends Component {
    render() {
      return (
        <div>
            <Switch>
                <Route exact path="/"
                        render={() => <Home />} /> 

                <Route exact path="/companies"
                        render={rtProps => <Companies {...rtProps} />} />

                <Route exact path="/companies/:handle"
                        render={rtProps => <Company {...rtProps} />} />

                <Route exact path="/jobs"
                        render={() => <Jobs />} />

                <Route exact path="/login"
                        render={() => <Login />} />

                <Route exact path="/profile"
                        render={() => <Profile />} />

                <Redirect to="/" />
            </Switch>
            </div>
      );
    }
  }


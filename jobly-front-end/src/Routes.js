import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Company from './Company';

export default class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
            <Nav />
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
        </BrowserRouter>
      );
    }
  }


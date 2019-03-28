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
                        render={() => <Home currentUser={this.props.currentUser} />} /> 

                <Route exact path="/companies"
                        render={() => <Companies currentUser={this.props.currentUser}/>} />

                <Route exact path="/companies/:handle"
                        render={rtProps => <Company {...rtProps} currentUser={this.props.currentUser}/>} />

                <Route exact path="/jobs"
                        render={() => <Jobs currentUser={this.props.currentUser}/>} />

                <Route exact path="/login"
                        render={() => <Login handleUserLogin= {this.props.handleUserLogin} 
                        currentUser={this.props.currentUser} />} />

                <Route exact path="/profile"
                        render={() => <Profile currentUser={this.props.currentUser}/>} />

                <Redirect to="/" />
            </Switch>
            </div>
      );
    }
  }


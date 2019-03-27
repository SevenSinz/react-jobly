import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

export default class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/about"
                        render={() => <About />} />
                <Route exact path="/contact"
                        render={rtProps => <Contact {...rtProps} />} />
                <Route exact path="/blog/:slug"
                        render={rtProps => <Post {...rtProps} />} />
                <Route exact path="/blog"
                        render={() => <BlogHome />} />
                <Route exact path="/"
                        render={() => <Home />} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
      );
    }
  }


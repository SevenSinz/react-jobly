import React, { Component } from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Nav';
import JoblyApi from './JoblyApi';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }
/** User looks like this:
 * {username, first_name, last_name, email, photo_url, jobs: []}
 */
  async getCurrentUser(username) {
    //  make a call to the api with username
    const currentUser = await JoblyApi.getUserInfo(username);
    // save user info to state
    this.setState({currentUser})
  }

  render() {
    return (
      <div> 
      <BrowserRouter>
        <Nav currentUser={this.state.currentUser} />  
        <Routes currentUser={this.state.currentUser} handleUserLogin={this.getCurrentUser}/>
      </BrowserRouter>
      </div>
    );
  }
}
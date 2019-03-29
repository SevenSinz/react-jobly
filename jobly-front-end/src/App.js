import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import Routes from './Routes';
import Nav from './Nav';
import JoblyApi from './JoblyApi';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
    this.logOut = this.logOut.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);

  }

/** extract token from LocalStorage and make and API call to get currentuser info 
 * currentUser :
 * {username, first_name, last_name, email, photo_url, jobs: []}
 */
  async setCurrentUser() {
    if (localStorage.getItem("token")) {

      // get token from localstorage (whoch was set on the login/signup call on JoblyAPI)
      let token = localStorage.getItem("token");
      
      // decode username from token
      let username = jwt.decode(token).username;

      //  make a call to the api with username
      const currentUser = await JoblyApi.getUserInfo(username);

      // save user info to state
      this.setState({currentUser})

    } 
  }

  logOut(){
    localStorage.clear();
    this.setState({currentUser: null})
  }

  async componentDidMount(){
    await this.setCurrentUser()
  }

  render() {
    return (
      <div> 
      <BrowserRouter>
        <Nav    currentUser={this.state.currentUser} 
                handleLogout={this.logOut}/>  
        <Routes currentUser={this.state.currentUser} 
                handleSetCurrentUser={this.setCurrentUser}/>
      </BrowserRouter>
      </div>
    );
  }
}
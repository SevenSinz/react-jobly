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
      currentUser: {}
    }
    this.logOut = this.logOut.bind(this);
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
    this.setState({currentUser: {}})
  }

  componentDidMount(){
    this.setCurrentUser()
  }

  render() {
    return (
      <div> 
      <BrowserRouter>
        <Nav    currentUser={this.state.currentUser} />  
        <Routes currentUser={this.state.currentUser} handlelogout={this.props.logOut}/>
      </BrowserRouter>
      </div>
    );
  }
}
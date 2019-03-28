import React, { Component } from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Nav';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      username: ''
    }
  }

  render() {
    return (
      <div> 
      <BrowserRouter>
        <Nav />  
        <Routes />
      </BrowserRouter>
      </div>
    );
  }
}
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
      // const activeStyle={
      //     fontWeight: "bold",
      //     color: "blue"
      // }
    return (
      <div>
          <nav>
            {/* <NavLink key='login' to='/login'> Login </NavLink> */}
            <NavLink exact to="/" >Jobly</NavLink>
            <NavLink key='companies' to='/companies'> Companies </NavLink>
            <NavLink key='jobs' to='/jobs'> Jobs </NavLink>
            <NavLink key='profile' to='/profile'> Profile </NavLink>
            <NavLink key='logout' to='/logout'> Logout </NavLink>
          </nav>
      </div>
    );
  }
}


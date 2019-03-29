import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    const login = (
      <div>
        <nav>
          <NavLink key='login' to='/login'> Login </NavLink>
        </nav>
      </div>)

    const logout = (
      <div>
        <nav>
          <NavLink exact to="/" >Jobly</NavLink>
          <NavLink key='companies' to='/companies'> Companies </NavLink>
          <NavLink key='jobs' to='/jobs'> Jobs </NavLink>
          <NavLink key='profile' to='/profile'> Profile </NavLink>
          <Link onClick={this.props.handleLogout}> Logout </Link>
        </nav>
      </div>)

    if (this.props.currentUser.username === undefined) return login;
    return logout;
  }
}


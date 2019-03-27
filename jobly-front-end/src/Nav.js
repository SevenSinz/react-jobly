import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
  render() {
      const activeStyle={
          fontWeight: "bold",
          color: "blue"
      }
    return (
      <div>
          <nav>
                HERE ARE THE LINKS 
                <NavLink exact to="/" activeStyle={activeStyle}>Jobly</NavLink>
          </nav>
      </div>
    );
  }
}


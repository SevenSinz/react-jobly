import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

export default class Login extends Component {


  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      alertStatus: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 async handleSubmit(evt){
    evt.preventDefault();
    await JoblyApi.login(this.state);
    this.props.handleUserLogin(this.state.username)
    this.setState({
      username: "",
      password: ""
    });
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input name="username" 
                 value={this.state.username}
                 onChange={this.handleChange}
                 />
          <label htmlFor="password">Password</label>
          <input name="password" 
                 value={this.state.password}
                 onChange={this.handleChange}
                 />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

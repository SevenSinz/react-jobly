import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import './Login.css'

export default class Login extends Component {


  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      first_name:"",
      last_name:"",
      email:"",
      //TODO: alertStatus: false
      signupShowing: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(){
    this.setState({signupShowing: !this.state.signupShowing})
  }

  async handleSubmit(evt){
    evt.preventDefault();

      if (this.state.signupShowing) {
        let signupres = await JoblyApi.signup(this.state);
        console.log("signupres = ", signupres)
  
      } else {
        let loginres = await JoblyApi.login(this.state);
        console.log("loginres = ",loginres)
      }
      this.setState({
        username: "",
        password: "",
        first_name:"",
        last_name:"",
        email:""
      });
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const loginOrSignup = (
                          <div className="loginCard">
                            <button onClick={this.toggleShow}>
                              Login
                            </button>
                            <button onClick={this.toggleShow}>
                              Signup
                            </button>
                          </div>
    )

    const signup = (
                      <div className="LoginCard">
                        <form onSubmit={this.handleSubmit}>
                          <div>
                          <label htmlFor="username"> Username  </label>
                            <input name="username" 
                                  value={this.state.username}
                                  onChange={this.handleChange}
                                  />
                          </div>

                          <div>       
                            <label htmlFor="password"> Password  </label>
                            <input name="password" 
                                  value={this.state.password}
                                  onChange={this.handleChange}
                                  />
                          </div>

                          <div>       
                            <label htmlFor="firstname"> Firstname  </label>
                            <input name="first_name" 
                                  value={this.state.first_name}
                                  onChange={this.handleChange}
                                  />
                          </div>
                          <div>       
                            <label htmlFor="lastname"> Lastname  </label>
                            <input name="last_name" 
                                  value={this.state.last_name}
                                  onChange={this.handleChange}
                                  />
                          </div>
                          <div>       
                            <label htmlFor="email"> Email  </label>
                            <input name="email" 
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                  />
                          </div>                                                                              
                          <button>Submit</button>
                        </form>
                      </div>
    )
    const login = (
                    <div className="LoginCard">
                      <form onSubmit={this.handleSubmit}>
                        <div>
                        <label htmlFor="username">Username  </label>
                          <input name="username" 
                                value={this.state.username}
                                onChange={this.handleChange}
                                />
                        </div>

                        <div>       
                          <label htmlFor="password">Password  </label>
                          <input name="password" 
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                        </div>
                        <button>Submit</button>
                      </form>
                    </div>
    )
    
    if (this.state.signupShowing) {
      return (<>
          {loginOrSignup}
          {signup}
        </>)
    }
        return (<>
          {loginOrSignup}
          {login}
        </>)
    } 
}

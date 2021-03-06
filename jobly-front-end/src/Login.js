import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import './Login.css'
import Alert from './Alert';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      first_name:"",
      last_name:"",
      email:"",
      loginOrSignup: "login",
      alertMessages: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLoginOrSignup = this.setLoginOrSignup.bind(this);
  }

  setLoginOrSignup(status){
    if (status==="signup") this.setState({loginOrSignup: "signup"})
    else this.setState({loginOrSignup: "login"})
  }

  async handleSubmit(evt){
    evt.preventDefault();
  
    try {
      if (this.state.loginOrSignup === "signup") {
        let signupres = await JoblyApi.signup(this.state);  
        console.log("signupres =", signupres)
      } else {
        let loginres = await JoblyApi.login(this.state);
        console.log("loginres =", loginres)
      }
      
      await this.props.handleSetCurrentUser();
      this.props.history.push('/');
      
      this.setState({
        username: "",
        password: "",
        first_name:"",
        last_name:"",
        email:""
      });

    } catch(err) {
      this.setState({
        alertMessages: err
      }, ()=>{ console.log("THIS IS THE ALERT MESSAGE", this.state.alertMessages)})
    }

  }

  handleChange(evt){
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    const loginOrSignup = (
                          <div className="loginCard">
                            <button onClick={() => this.setLoginOrSignup("login")}>
                              Login
                            </button>
                            <button onClick={() => this.setLoginOrSignup("signup")}>
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
                                  type="password"
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
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                        </div>
                        <button>Submit</button>
                      </form>
                    </div>
    )
    
    let alertComponents;

      if (this.state.alertMessages !== null) {
        alertComponents = this.state.alertMessages.map(
          (a,id) => <Alert key={id} alertMessages={a} /> )
      }

      if (this.state.loginOrSignup === "signup") {
        return (<>
            {loginOrSignup}
            {signup}
            {alertComponents}
          </>)
      } else {
          return (<>
            {loginOrSignup}
            {login}
            {alertComponents}
          </>)
      }
    } 
}

export default Login
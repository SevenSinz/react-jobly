import React, { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loginOrLogout: this.setLoginOrLogout(),
  //   }
  //   // this.logOut = this.logOut.bind(this);
  // }
  // handlelogout={this.props.handlelogout}

  // setLoginOrLogout(){
  //   if (localStorage.getItem("token")) {
  //     this.setState({ loginOrLogout: "login" })
  //   } else {
  //   this.setState({ loginOrLogout: "logout" })
  //   }
  // }


  // logOut(){
  //   localStorage.clear();
  //   this.setState({loginOrLogout: "logout")
  // }

  render() {
    return (
      <div>We in the Home</div>
    );
  }
}

export default Home

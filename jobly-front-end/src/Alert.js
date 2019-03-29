import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className="Alert">Message: {this.props.alertMessage}</div>
    );
  }
}


export default Alert;
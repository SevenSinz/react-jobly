import React, { Component } from 'react';

export default class CompanyCard extends Component {

  render() {
    return (
      <div className="card"> 
        <img src={this.props.logo_url} alt='company logo'/>
        <div className="container"> 
          <h4><b>{this.props.name}</b></h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

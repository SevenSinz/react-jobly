import React, { Component } from 'react';
import './CompanyCard.css'

export default class CompanyCard extends Component {

  render() {
    return (
      <div className="CompanyCard"> 
        <img src={this.props.logo_url} alt='company logo'/>
        <div className="container"> 
          <h4><b>{this.props.name}</b></h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}


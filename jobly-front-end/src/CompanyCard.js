import React, { Component } from 'react';

export default class CompanyCard extends Component {
  render() {
    return (
      <div> 
        <div> 
          {this.props.name}
        </div>
        <div>
          {this.props.description}
        </div>
        <img src={this.props.logo_url} alt='company logo'/>
        
      </div>
    );
  }
}

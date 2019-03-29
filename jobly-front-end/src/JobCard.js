import React, { Component } from 'react';
import './JobCard.css'

class JobCard extends Component {
  render() {
    return (
      <div className="JobCard">
        <h3>{this.props.title}</h3>
        <p>
          <b>Salary:</b><span> ${this.props.salary}</span>
        </p>
        <p>
          <b>Equity: </b><span> {this.props.equity}</span>
        </p>
        <br />
        <button className="applybutton" onClick={this.triggerApply}>Apply</button>
      </div>
    );
  }
}

export default JobCard
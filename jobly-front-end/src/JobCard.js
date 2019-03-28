import React, { Component } from 'react';


export default class JobCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          <b>Salary:</b><span> ${this.props.salary}</span>
        </p>
        <p>
          <b>Equity: </b><span> {this.props.equity}</span>
        </p>
        <br />
        <button onClick={this.triggerApply}>Apply</button>
      </div>
    );
  }
}

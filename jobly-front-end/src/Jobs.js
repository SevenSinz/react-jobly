import React, { Component } from 'react';
import JobCard from './JobCard.js';
import Search from './Search';

export default class Jobs extends Component {
  render() {
    return (
      <div> 
      <Search />
      <JobCard />
    </div>
    );
  }
}

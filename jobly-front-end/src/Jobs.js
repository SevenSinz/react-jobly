import React, { Component } from 'react';

import JobCard from './JobCard.js';
import Search from './Search';
import JoblyApi from './JoblyApi';


export default class Jobs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
    this.getJobs = this.getJobs.bind(this);
    this.searchJobs = this.searchJobs.bind(this);
  }

  async getJobs(search) {
    let jobs = await JoblyApi.getJobs(search);
    this.setState({ jobs });

  }

  searchJobs(search) {
    this.getJobs(search)
  }

  async componentDidMount() {
    await this.getJobs()
  }

  render() {
    const jobs = this.state.jobs.map( ({id, title, salary, equity}) => <div>
      <JobCard
        key={ id }
        id={ id }
        title={ title }
        salary={ salary }
        equity={ equity }
      /></div>)

    return (
      <div>
        <Search triggerSearch={this.searchJobs} />
        {jobs}
      </div>
    );
  }
}

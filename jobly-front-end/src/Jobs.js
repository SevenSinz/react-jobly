import React, { Component } from 'react';

import JobCard from './JobCard.js';
import Search from './Search';
import JoblyApi from './JoblyApi';


export default class Jobs extends Component {

  constructor() {
    super();
    this.state = {
      jobs: [],
      // token: ''
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
      let jobs = this.state.jobs.map(j => <div>
              <JobCard
                  key= {j.id}
                  id={j.id}
                  title={j.title}
                  salary={j.salary}
                  equity={j.equity} 
              /></div>)

    return (
      <div> 
      <Search triggerSearch={this.searchJobs} />
      { jobs }
    </div>
    );
  }
}

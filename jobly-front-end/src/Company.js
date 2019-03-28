import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

export default class Company extends Component {

  constructor() {
    super();
    this.state = {
      company: {},
      jobs: [],
      // token: ''
    }

    this.getJobsForCompany = this.getJobsForCompany.bind(this);
  }

  async
// FIXME:
//   applyToJob() {
//   }

  async getJobsForCompany() {
    const response = await JoblyApi.getCompanyAndJobs(this.props.match.params.handle)
    console.log("response = ", response);
    const company = response.company;
    const jobs = response.company.jobs;

    this.setState({ company, jobs })
  }

  async componentDidMount() {
    await this.getJobsForCompany()
  }

  render() {
    console.log(this.state.jobs)
    const jobs = this.state.jobs.map(j => (
      <div>
        <JobCard 
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity} 
          triggerApply={this.applyToJob}
          />
      </div>
    )
    )

    if (this.state.company && this.state.company.name) {

      return (
        <div>
          <h4><b>{this.state.company.name}</b></h4>
              <p>{this.state.company.description}</p>
          { jobs }
        </div>
      );
    }
    return <div> HI </div>
  }
}

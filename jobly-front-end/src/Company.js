import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company: {},
      jobs: [],
      isLoading: true
      // token: ''
    }
    this.getJobsForCompany = this.getJobsForCompany.bind(this);
  }


// FIXME:
//   applyToJob() {
//   }

  async getJobsForCompany() {
    const response = await JoblyApi.getCompanyAndJobs(this.props.match.params.handle)
    
    // let response;
    // try {
    //   response = await JoblyApi.getCompanyAndJobs(this.props.match.params.handle + "xxxx")
    // } catch (err) {
    //   console.log("cant get  company", err)
    // }

    console.log("response = ", response);
    const company = response.company;
    const jobs = response.company.jobs;

    this.setState({ company, jobs, isLoading: false})
  }

  async componentDidMount() {
    await this.getJobsForCompany()
  }

  render() {
    console.log(this.state.jobs)
    const jobs = this.state.jobs.map(j => (
        <JobCard 
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity} 
          triggerApply={this.applyToJob}
          />
    )
    )

    if (!this.state.isLoading) {

      return (
        <div>
          <h4><b>{this.state.company.name}</b></h4>
              <p>{this.state.company.description}</p>
          { jobs }
        </div>
      );
    }
    return <div>LOADING...</div>
  }
}

export default Company
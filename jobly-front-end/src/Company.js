import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

/** THESE ARE THE THINGS THAT ARE COMING IN AS PROPS */
// key= {uuid()}
// handle={c.handle}
// name={c.name}
// description={c.description}
// logo_url={c.logo_url} /></Link></div>

export default class Company extends Component {

  constructor() {
    super();
    this.state = {
      jobs: [],
      // search: "",
      // token: ''
    }

    this.getJobsForCompany = this.getJobsForCompany.bind(this);

  }
// FIXME:
//   applyToJob() {

//   }

  async getJobsForCompany() {
    const response = await JoblyApi.getCompanyAndJobs(this.props.match.params.handle)
    const jobs = response.jobs
    this.setState({ jobs })
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

    return (
      <div>
        <h4><b>{this.props.name}</b></h4>
        <p>{this.props.description}</p>
        {jobs}
      </div>
    );
  }
}

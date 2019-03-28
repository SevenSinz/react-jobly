import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import {Link} from 'react-router-dom';
import Search from './Search';
import JoblyApi from './JoblyApi';
import uuid from 'uuid/v4';

export default class Companies extends Component {

  constructor() {
    super();
    this.state = {
      companies: [],
      // search: "",
      // token: ''
    }
    this.getCompanies = this.getCompanies.bind(this);
    this.searchCompanies = this.searchCompanies.bind(this);

  } 

  async getCompanies(search) {
    let companies = await JoblyApi.getCompanies(search);
    // console.log("companies = ", companies);
    this.setState({ companies });

  }

  searchCompanies(search) {
    this.getCompanies(search)
  }

  async componentDidMount() {
    await this.getCompanies()
  }

  render() {
    let companies = this.state.companies.map(c => <div><Link to={`/companies/${c.handle}`} ><CompanyCard
      key= {uuid()}
      handle={c.handle}
      name={c.name}
      description={c.description}
      logo_url={c.logo_url} /></Link></div>)
    return (
      <div>
        <Search triggerSearch={this.searchCompanies} />
        {companies}
      </div>
    );
  }
}

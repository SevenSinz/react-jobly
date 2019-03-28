import React, { Component } from 'react';
import CompanyCard from './CompanyCard';
import Search from './Search';
import JoblyApi from './JoblyApi';

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

    async getCompanies(search){
        let companies = await JoblyApi.getCompanies(search);
        // console.log("companies = ", companies);
        this.setState({companies});

    }

    searchCompanies(search){
        this.getCompanies(search)
    }
    
    componentDidMount() {
        this.getCompanies()
    }
  
    render() {

        let companies = this.state.companies.map(c => <div> <CompanyCard 
                                                        handle={c.handle} 
                                                        name={c.name}
                                                        description={c.description}
                                                        logo_url={c.logo_url} /> </div>)
    return (
        <div> 
          <Search triggerSearch={this.searchCompanies}/>
          { companies }
        </div>
    );
  }
}

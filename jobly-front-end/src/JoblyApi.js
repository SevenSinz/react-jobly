import axios from 'axios';

export default class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {

      // Get the token from localStorage and save it as __token in the params for the request call
      paramsOrData._token = localStorage.getItem("token")
      
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
    
    static async getCompanyAndJobs(handle) {
        let res = await this.request(`companies/${handle}`);
        return res;
    }

    static async getCompanies(search) {
      let res = await this.request('companies', search);
      return res.companies;
    }

    static async getJobs(search) {
      let res = await this.request(`jobs`, search);
      return res.jobs;
    }

    static async signup(signupInfo) {
      let res = await this.request(`users`, signupInfo, "post");
      localStorage.setItem("token", res.token);
      return res.user;
    }

    static async login(loginInfo) {
      let res = await this.request('login', loginInfo, "post");
      localStorage.setItem("token", res.token);
      return res.token;
    }

    static async getUserInfo(username) {
      let res = await this.request(`users/${username}`);
      return res.user;
    }



}

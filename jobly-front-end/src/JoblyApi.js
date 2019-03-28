import axios from 'axios';

export default class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      console.log('paramsOrdata=', paramsOrData);
      paramsOrData._token = ( 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NTM3MjgxNzB9.kBW6MLbT8cyJj83zTrbuzJyWscdDMZ0RHO-ngREg8U0')
      //  // for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
      // "eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NTM3MjgxNzB9" +
      // "kBW6MLbT8cyJj83zTrbuzJyWscdDMZ0RHO-ngREg8U0");

      
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
    
    // static async getCompany(handle) {
    //     let res = await this.request(`companies/${handle}`);
    //     return res.company;
    // }

    static async getCompanies(search) {
      let res = await this.request('companies', search);
      return res.companies;
  }

    // static async 
}

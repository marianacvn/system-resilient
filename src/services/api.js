import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://resilience.certoauto.com/api/v1.0/',
});
export default Api;

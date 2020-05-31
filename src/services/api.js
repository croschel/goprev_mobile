import axios from 'axios';

const api = axios.create({
  baseURL: 'https://goprev.azurewebsites.net/v1/',
});

export default api;

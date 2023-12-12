// axios configuration

import axios from 'axios';
import Cookies from 'universal-cookie';

const url = ["http://localhost:8080/api/", "http://localhost:8081/api/", "http://35.199.85.239:80/api/"]


const baseUrl = import.meta.env.VITE_BACKEND_HOST || url[1];

const cookies = new Cookies();


const axiosConf = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
});

axiosConf.interceptors.request.use(
  (config) => {
    const token = cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosConf;
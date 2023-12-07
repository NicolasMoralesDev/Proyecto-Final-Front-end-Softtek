// axios configuration

import axios from 'axios';

// VITE_BACKEND_HOST || "localhost"
const baseUrl = import.meta.env.VITE_BACKEND_HOST || "http://localhost:8081/api/";

const axiosConf = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
});

axiosConf.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
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
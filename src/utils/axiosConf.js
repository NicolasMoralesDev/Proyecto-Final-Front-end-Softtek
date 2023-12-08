// axios configuration

import axios from 'axios';

const url = ["http://localhost:8080/api/", "http://localhost:8081/api/", "http://35.199.85.239:80/api/"]

// VITE_BACKEND_HOST || "localhost"
const baseUrl = import.meta.env.VITE_BACKEND_HOST || url[2];

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
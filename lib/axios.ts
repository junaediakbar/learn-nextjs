import axios from 'axios';

const api = axios.create({
  baseURL: 'https://laundry-api-five.vercel.app',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

export default api;

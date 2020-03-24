import axios from 'axios';
import { vuexModule } from '@/store';

const axiosBase = axios.create({
  baseURL: 'http://krrop-oncod-server-api.test/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
    'X-localization': 'uk',
  },
});

axiosBase.interceptors.request.use(function (config) {
  if (vuexModule.store.token != '') {
    config.headers.Authorization = `Bearer ${vuexModule.store.token}`;
  }
  return config;
}, function (error) {
  
  return Promise.reject(error);
});

export default axiosBase;
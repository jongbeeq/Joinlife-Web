import axios from 'axios'
import { getAccessToken, removeAccessToken } from '../utils/local-storage';
import { BACKEND_URL } from './env';

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(config => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            removeAccessToken();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axios;


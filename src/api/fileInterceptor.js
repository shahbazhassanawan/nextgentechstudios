import axios from 'axios';
import config from './config';

const fileApiClient = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

fileApiClient.interceptors.request.use(
    (request) => request,
    (error) => {
        return Promise.reject(error);
    }
);

fileApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default fileApiClient;

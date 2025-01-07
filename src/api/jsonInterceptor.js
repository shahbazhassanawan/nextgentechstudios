import axios from 'axios';
import config from './config';

const jsonApiClient = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

jsonApiClient.interceptors.request.use(
    (request) => request,
    (error) => {
        console.error('JSON Request Error:', error);
        return Promise.reject(error);
    }
);

jsonApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('JSON Response Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default jsonApiClient;

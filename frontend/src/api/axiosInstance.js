import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
});

export default instance;

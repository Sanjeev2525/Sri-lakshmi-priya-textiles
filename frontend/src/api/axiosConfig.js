import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080',
    //  ,http://3.110.176.144:8080
    headers: {"ngrok-skip-browser-warning": "true"}
});
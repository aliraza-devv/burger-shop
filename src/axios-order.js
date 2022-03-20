import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-55a8a-default-rtdb.firebaseio.com/'
});

export default instance;
import axios from 'axios';

//Le damos una URL básica a axios
const api = axios.create({
    baseURL : 'http://localhost:3000/api'
});

//Seteamos los headers en caso de haberlos
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers['Authentication'] = `${token}`;
    }
    return config
},(error)=>{
    return Promise.reject(error);
})

export default api;
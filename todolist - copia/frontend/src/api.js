import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL de la API en Laravel
    headers: {
        'Accept': 'application/json', // Indicando que la solicitud es para recibir JSON
    },
});

export default api;
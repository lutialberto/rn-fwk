import axios from 'axios';

const BASE_URL = 'https://api.example.com';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  config => {
    // Haz algo antes que la petición se ha enviada
    return config;
  },
  error => {
    // Haz algo con el error de la petición
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
    // Haz algo con los datos de la respuesta
    return response;
  },
  error => {
    // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
    // Haz algo con el error
    return Promise.reject(error);
  },
);

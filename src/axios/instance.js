import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    timeout: 30000,
    headers: {
        Authorization: 'Bearer ' + `${import.meta.env.VITE_ADMIN_SECRET_KEY}`,
    },
});

export default axiosInstance;

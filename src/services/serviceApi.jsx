import axios from "axios";

// Create Axios instance
const serviceApi = axios.create({
    baseURL: "http://localhost:8082", // Backend base URL
});

// Request Interceptor: Attach JWT Token
serviceApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt"); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle Errors
serviceApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized errors (e.g., token expired)
            localStorage.removeItem("jwt"); // Clear invalid token
            window.location.href = "/"; // Redirect to login
        }
        return Promise.reject(error);
    }
);

export default serviceApi;


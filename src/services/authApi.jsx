import axios from "axios";

// Create Axios instance
const authApi = axios.create({
    baseURL: "http://localhost:8081", // Backend base URL
});

export default authApi;


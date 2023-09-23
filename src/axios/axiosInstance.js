import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost/server/blog"
});

export default axiosInstance;
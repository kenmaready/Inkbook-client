import axios from "axios";

console.log("baseURL:", process.env.REACT_APP_API_URL);

const instance = axios.create({
    baseUrl: process.env.REACT_APP_API_URL,
});

export default instance;

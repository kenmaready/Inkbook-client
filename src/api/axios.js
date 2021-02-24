import axios from "axios";

console.log("baseURL:", baseURL);

const instance = axios.create({
    baseUrl: process.env.REACT_APP_API_URL,
});

export default instance;

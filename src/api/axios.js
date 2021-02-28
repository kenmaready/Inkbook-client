import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
instance.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export default instance;

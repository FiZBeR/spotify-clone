import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://loaclhost:5000/api",
});
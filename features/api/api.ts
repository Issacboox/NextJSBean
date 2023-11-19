"use client"
import axios, { InternalAxiosRequestConfig } from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;

const apiInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        Authorization: "",
    },
});
  

const onRequest = async (config: InternalAxiosRequestConfig) => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    const token = localStorage.getItem("token");

    if (config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : "";
    }

    return config;
};

apiInstance.interceptors.request.use(onRequest);

export default apiInstance;

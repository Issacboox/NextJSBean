"use client";

import axios from "axios";
import { AxiosRequestConfig, AxiosError } from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API;

const apiInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        Authorization: "",
    },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    const token = localStorage.getItem("token");

    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: token ? `Bearer ${token}` : "",
        },
    };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
};

// @ts-ignore
apiInstance.interceptors.request.use(onRequest, onRequestError);

export default apiInstance;

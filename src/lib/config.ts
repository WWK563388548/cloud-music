import axios, { AxiosRequestConfig } from 'axios';

export const baseUrl = 'http://localhost:4000';

// axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use (
  (res: AxiosRequestConfig) => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export {
  axiosInstance
};
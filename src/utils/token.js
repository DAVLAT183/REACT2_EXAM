import axios, { Axios } from "axios";

export function SaveToken(token) {
  localStorage.setItem("accessToken", token);
}

export function GetToken() {
  return localStorage.getItem("accessToken");
}
export const BaseApi = import.meta.env.VITE_API_URL;

export const AxiosDavlat = axios.create({
  baseURL: BaseApi,
});

AxiosDavlat.interceptors.request.use(
  (config) => {
    const token = GetToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
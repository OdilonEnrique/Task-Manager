import axios from "axios";

export const envAPI = import.meta.env.VITE_API;

export const API = axios.create({
  baseURL: envAPI,
  withCredentials: true,
});

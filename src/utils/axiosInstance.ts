import axios from "axios";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  
});

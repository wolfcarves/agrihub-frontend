import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

// src/services/adminService.js
import axios from "axios";

const BASE_URL = "http://localhost:9999/v1/api/user";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor
api.interceptors.request.use((config) => {
  // Ignore token for login request
  if (!config.url.endsWith("/login")) {
    const token = localStorage.getItem("Authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => Promise.reject(error));

// Response interceptor (optional, handle expired token globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized
      localStorage.removeItem("Authorization"); // remove old token
      window.location.href = "/login"; // redirect to login page
    }
    return Promise.reject(error);
  }
);

// Admin service
export const adminService = {
  login: async (formData) => {
    const res = await api.post("/login", formData);

    // Store new token
    if (res.data.token) {
      localStorage.setItem("Authorization", res.data.token);
    }

    return res.data;
  },

  
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    const user = sessionStorage.getItem("token");
    console.log(user);
    config.headers["Authorization"] = `Bearer ${user}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

import api from "../api/axios";

export const loginAdmin = (data) => {
  return api.post("/auth/login", data);
};

export const refreshToken = () => {
  return api.post("/auth/refresh");
};
import Axios from "axios";
import { dispatch, getState } from "../store";

export const BASE_URL = "http://apialfa.apoint.uz/v1/";

export const axiosInstance = Axios.create({
  baseURL: BASE_URL + "",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getState().auth.token;

    if (!config.headers.Authorization) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    if (status === 401) {
      setTimeout(() => {
        dispatch.auth.logoutAsync();
      }, 3000);
      return error;
    }
    return Promise.reject(error);
  }
);

export const API = {
  //AUTH
  login: (data: any) =>
    axiosInstance
      .post("/hr/user/sign-in?include=token", data)
      .then((res) => res.data),
  logOut: () => axiosInstance.post("logout").then((res) => res.data),

  //MATERIALS
  materials: (params: any) =>
    axiosInstance
      .get("/reports/reports/materials", { params })
      .then((res) => res.data),
};

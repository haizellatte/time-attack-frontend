import axios from "axios";
import auth from "./authApi";
import getAllProductsApi from "./getAllProductsApi";
import getDetailProductApi from "./getDetailProductApi";
getDetailProductApi;

export const instance = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const API = { auth, getAllProductsApi, getDetailProductApi };

export default API;

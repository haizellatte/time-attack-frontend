import axios from "axios";
import auth from "./authApi";
import AuthAPI from "./authApi2";
import cartApi from "./cartApi";
import productApi from "./productApi";

export const instance = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const API = { auth, productApi, cartApi, AuthAPI };

export default API;

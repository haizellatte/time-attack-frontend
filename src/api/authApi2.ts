import AuthType from "@/types/AuthType";
import { instance } from "./API";

async function SignupApi(dto: AuthType) {
  await instance.post(`/auth/sign-up`);
}

async function LogInApi(dto: AuthType) {
  await instance.post(`/auth/log-in`);
}

const AuthAPI = {
  SignupApi,
  LogInApi,
};

export default AuthAPI;

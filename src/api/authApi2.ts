import { instance } from "./API";

async function SignupApi() {
  await instance.post(`/auth/sign-up`);
}

async function LogInApi() {
  await instance.post(`/auth/log-in`);
}

const AuthAPI = {
  SignupApi,
  LogInApi,
};

export default AuthAPI;

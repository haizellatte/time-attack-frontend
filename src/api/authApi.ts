import AuthType from "@/types/AuthType";
import { instance } from "./API";

async function signUp(dto: AuthType) {
  const response = await instance.post("/auth/sign-up", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  if (!accessToken) throw new Error("회원가입 실패");

  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  console.log(accessToken);

  return accessToken;
}

const auth = {
  signUp,
};

export default auth;

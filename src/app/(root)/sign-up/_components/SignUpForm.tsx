"use client";
import API from "@/api/API";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";

function SignUpForm() {
  const { logIn } = useAuth();

  const [signUpData, setSignUpData] = useState({
    email: "",
    pw: "",
    confirmPw: "",
  });

  const { mutate, isPending } = useMutation({ mutationFn: API.auth.signUp });

  const handleSubmit = async (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    const { email, pw, confirmPw } = signUpData;
    e.preventDefault();

    if (!email) return alert("이메일을 입력해 주세요.");
    if (!pw) return alert("비밀번호를 입력해 주세요.");
    if (!confirmPw) return alert("비밀번호 확인을 입력해 주세요.");
    if (pw !== confirmPw)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    const data = { email, pw };

    mutate(data, {
      onSuccess: () => logIn,
      onError: (err) => console.log(err),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
    >
      <Input
        value={signUpData.email}
        name="email"
        type="email"
        label="이메일"
        onChangeHandler={(e) =>
          setSignUpData({ ...signUpData, email: e.target.value })
        }
      />
      <Input
        value={signUpData.pw}
        name="password"
        type="password"
        label="비밀번호"
        onChangeHandler={(e) =>
          setSignUpData({ ...signUpData, pw: e.target.value })
        }
      />
      <Input
        value={signUpData.confirmPw}
        name="confirm-password"
        type="password"
        label="비밀번호 확인"
        onChangeHandler={(e) =>
          setSignUpData({ ...signUpData, confirmPw: e.target.value })
        }
      />
      <div className="mt-2"></div>
      <Button text="회원가입하기" />
    </form>
  );
}

export default SignUpForm;

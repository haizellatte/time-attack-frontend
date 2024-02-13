"use client";

import Button from "@/app/(root)/sign-up/_components/Button";
import Input from "@/app/(root)/sign-up/_components/Input";
import { toggleModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";

function Modal() {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({
    email: "",
    pw: "",
  });

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={() => dispatch(toggleModal(false))}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md w-full max-w-[400px] px-5 py-8"
      >
        <h2 className="font-bold text-3xl text-center my-12">로그인</h2>
        <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
          <Input
            value={userData.email}
            name="email"
            type="email"
            label="이메일"
            onChangeHandler={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input
            value={userData.pw}
            name="password"
            type="password"
            label="비밀번호"
            onChangeHandler={(e) =>
              setUserData({ ...userData, pw: e.target.value })
            }
          />
          <div className="mt-2"></div>
          <Button text="로그인하기" />
        </section>
      </div>
    </div>
  );
}

export default Modal;

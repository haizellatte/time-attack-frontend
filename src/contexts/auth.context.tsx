"use client";

import { instance } from "@/api/API";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: (accessToken: string) => void;
  logOut: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const router = useRouter();

  const logIn = () => {
    setIsLoggedIn(true);
    // todo: 액세스 토큰 부여
  };

  const logOut = () => {
    setIsLoggedIn(false);
    // todo : 액세스 토큰 제거
  };

  useEffect(() => {
    if (!isLoggedIn) {
      instance.defaults.headers.common.Authorization = "";
      // todo : 로그인 모달 띄우기
    }
    router.replace("/");
  }, [router, isLoggedIn]);

  const value: AuthContextValue = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;

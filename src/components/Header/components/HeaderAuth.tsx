"use client";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function HeaderAuth() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isLoggedIn ? (
        <>
          <Link href="/cart" className="text-[15px] font-medium">
            장바구니
          </Link>
          <Link href="/log-out" className="text-[15px] font-medium">
            로그아웃
          </Link>
        </>
      ) : (
        <>
          <Link href="/sign-up" className="text-[15px] font-medium">
            회원가입
          </Link>
          <Link href="/log-in" className="text-[15px] font-medium">
            로그인
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuth;

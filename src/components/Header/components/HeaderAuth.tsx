import Link from "next/link";

function HeaderAuth() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href="sign-up" className="text-[15px] font-medium">
        회원가입
      </Link>
      <Link href="log-in" className="text-[15px] font-medium">
        로그인
      </Link>
    </div>
  );
}

export default HeaderAuth;

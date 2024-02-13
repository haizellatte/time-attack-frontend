"use client";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { toggleModal } from "@/redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";

function HeaderAuth() {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

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
          <div
            className="text-[15px] font-medium cursor-pointer"
            onClick={() => dispatch(toggleModal(true))}
          >
            로그인
          </div>
        </>
      )}
      {isModalOpen && <Modal />}
    </div>
  );
}

export default HeaderAuth;

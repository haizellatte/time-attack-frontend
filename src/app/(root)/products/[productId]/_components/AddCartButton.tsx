"use client";

import { useAuth } from "@/contexts/auth.context";
import CartQuery from "@/react-query/CartQuery";
import { toggleModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store";

import ProductType from "@/types/ProductType";
import { useEffect, useState } from "react";

function AddCartButton({ product }: { product: ProductType }) {
  const [isExistCart, setIsExistCart] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAuth();

  const { cartProducts, addCart, removeCart } = CartQuery();

  const handleAddCart = () => {
    if (!isLoggedIn) {
      dispatch(toggleModal(true));
    } else {
      alert("장바구니에 추가되었습니다.");
      addCart(product.id);
      setIsExistCart(true);
    }
  };

  const handleDeleteCart = () => {
    alert("장바구니에서 제거되었습니다.");
    removeCart(product.id);
    setIsExistCart(false);
  };

  useEffect(() => {
    if (!cartProducts) return;
  }, [cartProducts]);

  // todo : 초기 마운팅 시 장바구니에 해당 아이디가 있으면 상태 바꿔주기

  return (
    <>
      {!isExistCart ? (
        <button
          className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
          data-color="black"
          onClick={handleAddCart}
        >
          장바구니에 담기
        </button>
      ) : (
        <button
          className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
          data-color="white"
          onClick={handleDeleteCart}
        >
          장바구니에서 빼기
        </button>
      )}
    </>
  );
}

export default AddCartButton;

"use client";

import { useAuth } from "@/contexts/auth.context";
import { setDeleteProduct, setInsertProduct } from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ProductType from "@/types/ProductType";
import { useEffect, useState } from "react";

function AddCartButton({ product }: { product: ProductType }) {
  const [isExistCart, setIsExistCart] = useState(false);
  const dispatch = useAppDispatch();
  const carts = useAppSelector((state) => state.cart.carts);
  // todo: 로그인 안되어 있으면 로그인 모달 띄우기
  const { isLoggedIn } = useAuth();

  const findIndex = carts.findIndex(
    (cartProduct) => cartProduct.id === product.id
  );

  const handleAddCart = () => {
    alert("장바구니에 추가되었습니다.");
    dispatch(setInsertProduct(product));
    setIsExistCart(true);
  };

  const handleDeleteCart = () => {
    alert("장바구니에서 제거되었습니다.");
    dispatch(setDeleteProduct(product.id));
    setIsExistCart(false);
  };

  useEffect(() => {
    if (findIndex > -1) {
      setIsExistCart(true);
    }
  }, []);

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

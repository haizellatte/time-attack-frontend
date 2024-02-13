"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import CartItem from "./CartItem";

function CartItems() {
  const carts = useAppSelector((state) => state.cart.carts);

  return (
    <ul className="border-b">
      {carts.length > 0 ? (
        carts.map((product) => (
          <div key={product.id}>
            <CartItem product={product} />
          </div>
        ))
      ) : (
        <section className="flex items-center justify-center flex-col">
          <h6>장바구니가 비어 있습니다.</h6>
          <div className="w-64 mt-8">
            <Link href="/">
              <button
                className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
                data-color="white"
              >
                쇼핑하러 가기
              </button>
            </Link>
          </div>
        </section>
      )}
    </ul>
  );
}

export default CartItems;

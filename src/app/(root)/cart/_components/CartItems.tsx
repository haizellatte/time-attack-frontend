"use client";
import CartQuery from "@/react-query/CartQuery";
import Link from "next/link";
import CartItem from "./CartItem";

function CartItems() {
  const { cartProducts } = CartQuery();

  return (
    <ul className="border-b">
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((cart: any) => (
          <div key={cart.product.id}>
            <CartItem product={cart.product} quantity={cart.quantity} />
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

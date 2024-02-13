// interface;

import { useAuth } from "@/contexts/auth.context";
import ProductType from "@/types/ProductType";

function AddCartButton({ product }: { product: ProductType }) {
  const { isLoggedIn } = useAuth();

  console.log("버튼", product);

  return (
    <button
      className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
      data-color="black"
    >
      장바구니에 담기
    </button>
  );
}

export default AddCartButton;

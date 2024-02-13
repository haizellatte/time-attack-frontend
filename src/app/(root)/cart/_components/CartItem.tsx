"use client";
import useAmount from "@/hooks/useAmount";
import ProductType from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";

function CartItem({ product }: { product: ProductType }) {
  const { amount, decreaseAmount, increaseAmount } = useAmount(
    Number(product.id)
  );

  return (
    <>
      {product && (
        <li className="flex justify-between items-center">
          <Link
            href={`/product/${product.id}`}
            className="flex h-40 sm:h-56 border-t py-5 gap-x-5"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={product.imgSrc}
                alt="product-image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover absolute h-full w-full transparent left-0 top-0 right-0 bottom-0"
                sizes="100vw"
                fill
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-y-1 sm:gap-y-2.5 grow">
              <div className="text-sm sm:text-base font-bold">
                {`${product.brand.nameKr} / ${product.brand.nameEn}`}
              </div>
              <h6 className="text-sm sm:text-lg">{product.name}</h6>
              <div className="flex gap-x-2.5 items-center text-sm sm:text-base ">
                <span className="line-through text-red-500">{`₩${product.originalPrice.toLocaleString()}`}</span>
                <span className="font-bold">{`₩${product.price.toLocaleString()}`}</span>
              </div>
              <div className="flex text-xs sm:text-sm">
                <div>{`${product.deliveryType} | 잔여재고 ${product.onlineStock}ea`}</div>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-3 border border-black self-center h-4 w-12 sm:h-8 sm:w-24 items-stretch shrink-0">
            <button
              onClick={decreaseAmount}
              className="bg-black text-white flex items-center justify-center text-lg font-bold"
            >
              -
            </button>
            <span className="flex items-center justify-center text-[15px] font-bold">
              {amount}
            </span>
            <button
              onClick={increaseAmount}
              className="bg-black text-white flex items-center justify-center text-lg font-bold"
            >
              +
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default CartItem;

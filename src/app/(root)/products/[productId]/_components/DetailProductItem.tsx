"use client";

import API from "@/api/API";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AddCartButton from "./AddCartButton";

function DetailProductItem() {
  const { productId } = useParams();

  const { data: product } = useQuery({
    queryKey: ["detailProductItems", { isList: true }],
    queryFn: () => API.getDetailProductApi(Number(productId)),
    refetchOnWindowFocus: true,
  });

  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      {product && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
          <div className="relative aspect-[3/4]">
            <Image
              src={product.imgSrc}
              alt="product-image"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform absolute h-full w-full transparent left-0 top-0 right-0 bottom-0"
            />
          </div>
          <div className="py-8 flex flex-col">
            <Link
              href={`/brands?brandId=${product.brand.id}}`}
              className="text-[15px] border-b pb-2.5 mb-2.5  font-bold"
            >
              <h2>{`${product.brand.nameKr} / ${product.brand.nameEn}`}</h2>
            </Link>
            <h1 className="text-lg">{product.name}</h1>
            <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
              <div className="text-slate-900 font-bold">정가</div>
              <div className="col-span-4 line-through text-red-500">
                {`₩${product.originalPrice.toLocaleString()}`}
              </div>
              <div className="text-slate-900 font-bold">판매가</div>
              <div className="col-span-4 font-semibold">
                {`₩${product.price.toLocaleString()}`}
              </div>
              <div className="text-slate-900 font-bold">배송</div>
              <div className="col-span-4">{product.deliveryType}</div>
              <div className="text-slate-900 font-bold">잔여 재고</div>
              <div className="col-span-4">{product.onlineStock}</div>
            </div>
            <AddCartButton product={product} />
          </div>
        </section>
      )}
    </main>
  );
}

export default DetailProductItem;

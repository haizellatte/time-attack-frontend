"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

interface ProductItemProps {
  product: Array<ComponentProps<typeof ProductItem>["product"]>;
}

function ProductItem({ product }: ProductItemProps) {
  const { brand, imgSrc, name, originalPrice, price } = product;

  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col group"
    >
      <div className="aspect-[3/4] relative mb-4">
        <Image
          src={imgSrc}
          alt={name}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform absolute h-full w-full transparent left-0 top-0 right-0 bottom-0"
        />
      </div>
      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{brand.nameEn}</div>
        <h6 className="text-[15px]">{name}</h6>
        <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
          <span className="text-red-500 line-through font-semibold">
            {originalPrice.toLocaleString()}
          </span>
          <span className="font-bold">{price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;

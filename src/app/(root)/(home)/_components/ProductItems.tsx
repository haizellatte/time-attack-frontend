"use client";

import API from "@/api/API";
import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";

function ProductItems() {
  const { data: products } = useQuery({
    queryKey: ["productItems", { isList: true }],
    queryFn: API.getAllProductsApi,
    refetchOnWindowFocus: true,
  });

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products?.map((product: any) => (
          <li key={nanoid()}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItems;

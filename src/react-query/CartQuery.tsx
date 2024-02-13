"use client";

import API from "@/api/API";
import { queryClient } from "@/app/_providers/reactQuery.provider";
import { useMutation, useQuery } from "@tanstack/react-query";

function CartQuery() {
  const { data: cartProducts } = useQuery({
    queryKey: ["carts", { isList: true }],
    queryFn: API.cartApi.getCartApi,
    refetchOnWindowFocus: true,
  });

  const { mutate: addCart } = useMutation({
    mutationFn: API.cartApi.addCartApi,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });

  const { mutate: removeCart } = useMutation({
    mutationFn: API.cartApi.removeCartApi,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });

  return { cartProducts, addCart, removeCart };
}

export default CartQuery;

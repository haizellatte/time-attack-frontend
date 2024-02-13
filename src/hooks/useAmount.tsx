import { setDeleteProduct } from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";

function useAmount(id: number) {
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (amount < 1) {
      dispatch(setDeleteProduct(id));
    }
  }, [amount]);

  const decreaseAmount = () => setAmount(() => amount - 1);
  const increaseAmount = () => setAmount(() => amount + 1);

  return { amount, decreaseAmount, increaseAmount };
}

export default useAmount;

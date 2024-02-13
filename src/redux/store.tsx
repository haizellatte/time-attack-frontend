"use client";

import { configureStore } from "@reduxjs/toolkit";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = {
  isOpen: boolean;
};

const initialState: ModalType = {
  isOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default ModalSlice.reducer;
export const { toggleModal } = ModalSlice.actions;

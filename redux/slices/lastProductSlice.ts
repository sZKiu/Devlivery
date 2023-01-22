import { createSlice } from "@reduxjs/toolkit";

interface Payload {
  payload: {
    name: string;
    amount: number;
  };
}

interface State {
  name: string;
  amount: number;
}

const initialState = {
  name: "",
  amount: 0,
};

export const lastProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLastProduct: (state: State, action: Payload) => {
      state.name = action.payload.name;
      state.amount = action.payload.amount;
    },
  },
});

export const { setLastProduct } = lastProductSlice.actions;

export default lastProductSlice.reducer;

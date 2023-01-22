import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
  price: number;
  img: string;
  amount: number;
}

interface Slice {
  name: string;
}

interface Payload {
  payload: {
    name: string;
    price: number;
    img: string;
    amount: number;
  };
}

const initialState: State[] = [];

export const productSlice: any = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: Payload): void => {
      const product: State = {
        name: action.payload.name,
        price: action.payload.price,
        img: action.payload.img,
        amount: action.payload.amount,
      };
      state.push(product);
    },
    setIncreaseAmount: (state, action: { payload: { name: string } }): void => {
      state.forEach((el, ind) => {
        if (el.name === action.payload.name) {
          el.amount += 1;
        }
      });
    },
    setDecreaseAmount: (state, action: { payload: { name: string } }): void => {
      state.forEach((el, ind) => {
        if (el.name === action.payload.name) {
          el.amount -= 1;
        }
      });
    },
    setDeleteProduct: (state, action: { payload: { name: string } }): void => {
      state.forEach((el, ind: number) => {
        if (el.name === action.payload.name) {
          state.splice(ind, 1);
        }
      });
    },
    setCleanAll: (state): void => {
      state.splice(0, state.length);
    },
  },
});

export const {
  setProduct,
  setIncreaseAmount,
  setDecreaseAmount,
  setDeleteProduct,
  setCleanAll,
} = productSlice.actions;

export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import Data from "../../assets/imgData/imgData";

interface Food {
  name: string;
  img: string;
  price: number;
  calories: number;
  categorie: string;
}

interface Payload {
  payload: {
    name: string;
    img: string;
    price: number;
    calories: number;
    categorie: string;
  };
}

const initialState = [...Data];

export const allProductsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: Payload) => {
      const product: Food = {
        name: action.payload.name,
        img: action.payload.img,
        price: action.payload.price,
        calories: action.payload.calories,
        categorie: action.payload.categorie,
      };
      state.push(product);
    },
  },
});

export const { addProduct } = allProductsSlice.actions;

export default allProductsSlice.reducer;

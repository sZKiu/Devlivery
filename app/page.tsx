"use client";
import { Fragment } from "react";
import Header from "@/components/generic/Header/Header";
import Footer from "@/components/generic/Footer/Footer";
import FirstGlance from "../components/home/FirstGlance/FirstGlance";
import FruitSwiper from "../components/home/FruitsSwiper/FruitSwiper";
import FoodCategories from "../components/home/FoodCategories/FoodCategories";
import Cart from "@/components/generic/Cart/Cart";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header />
        <main className="px-8 pb-12 bg-slate-50 overflow-hidden">
          <FirstGlance />

          <FruitSwiper />

          <FoodCategories />

          <Cart />
        </main>
      </Provider>

      <Footer />
    </Fragment>
  );
}

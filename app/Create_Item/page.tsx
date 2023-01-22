"use client";
import React, { Fragment } from "react";
import Head from "./head";
import Header from "../../components/generic/Header/Header";
import Footer from "@/components/generic/Footer/Footer";
import store from "../../redux/store";
import { Provider } from "react-redux";
import CreateItem from "@/components/Create_/CreateItem";

function Create_Item() {
  return (
    <Fragment>
      <Head />

      <Provider store={store}>
        <Header />

        <main className="px-8 py-4 min-h-[76vh] bg-slate-50 flex justify-center items-center">
          <CreateItem />
        </main>
      </Provider>

      <Footer />
    </Fragment>
  );
}

export default Create_Item;

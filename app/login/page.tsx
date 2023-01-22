"use client";
import React, { Fragment } from "react";
import Head from "./head";
import Header from "../../components/generic/Header/Header";
import Footer from "@/components/generic/Footer/Footer";
import Formularie from "@/components/login/Formularie";
import store from "../../redux/store";
import { Provider } from "react-redux";

function Login() {
  return (
    <Fragment>
      <Head/>

      <Provider store={store}>
        <Header />
      </Provider>

      <main className="px-8 pb-12 min-h-[72vh] bg-slate-50">
        <Formularie />
      </main>

      <Footer />
    </Fragment>
  );
}

export default Login;

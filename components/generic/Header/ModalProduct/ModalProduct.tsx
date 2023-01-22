"use client";
import React, { useEffect, useState } from "react";
import "./ModalProduct.css";
import { GoVerified } from "react-icons/go";
import { useSelector } from "react-redux";

interface Props {
  timeOut?: any;
  cls?: string;
}

interface Product {
  name: string;
  img: string;
  price: number;
  amount: number;
}

interface Name_Amount {
  name: string;
  amount: number;
}

function ModalProduct({ timeOut, cls }: Props) {
  const lastProduct = useSelector((state: any) => state.lastProduct);
  setTimeout(() => (timeOut !== undefined ? timeOut() : null), 1500);

  return (
    <div
      className={
        lastProduct?.name !== ""
          ? `modal-product ${cls !== undefined ? cls : ""}`
          : "modal-product no-background"
      }
    >
      {lastProduct?.name !== "" ? <GoVerified /> : ""}

      {lastProduct?.name !== ""
        ? `${lastProduct?.amount} ${lastProduct?.name?.replaceAll(
            "-",
            " "
          )} added`
        : ""}
    </div>
  );
}

export default React.memo(ModalProduct);

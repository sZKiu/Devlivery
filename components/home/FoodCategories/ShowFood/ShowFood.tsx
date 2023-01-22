"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../../redux/slices/productSlice";
import { setLastProduct } from "../../../../redux/slices/lastProductSlice";
import { StaticImageData } from "next/image";
import { MdShoppingBasket } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

interface CatProps {
  name: string;
  price: number;
  calories: number;
  img: string;
  categorie: string;
}

interface Products {
  name: string;
  price: number;
  img: string;
  amount: number;
}

function ShowFood({ cat }: { cat: string }) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: any) => state.allProducts);
  const products = useSelector((state: any) => state.product);

  const handlerProducts = ({
    name,
    img,
    price,
  }: {
    name: string;
    img: string;
    price: number;
  }): void => {
    const isInside = products.some((el: Products) => el.name === name);

    if (isInside) {
      const product = products.filter((el: Products) => el.name === name);

      dispatch(
        setIncreaseAmount({
          name,
        })
      );

      dispatch(
        setLastProduct({
          name,
          amount: product[0].amount + 1,
        })
      );
    } else {
      dispatch(
        setProduct({
          name,
          price,
          img,
          amount: 1,
        })
      );

      dispatch(
        setLastProduct({
          name,
          amount: 1,
        })
      );
    }
  };

  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-3 pt-4 w-fit my-0 mx-auto">
      {allProducts?.map(
        ({ name, img, price, calories, categorie }: CatProps, i: number) => {
          if (categorie === cat.toLocaleLowerCase())
            return (
              <div
                key={i}
                className="relative grid two-three bg-white rounded-xl pt-4 pb-2 px-4 shadow-black/10 shadow-md w-[300px] h-[140px] transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-items-center items-center justify-center">
                  <img src={img} alt={name} className="h-[5.5rem]" />
                </div>

                <div className="grid gap-1 justify-end justify-items-end">
                  <button
                    onClick={() => handlerProducts({ name, img, price })}
                    className="p-[7px] rounded-full transition duration-300 bg-red-600 hover:bg-zinc-900 text-white w-fit h-fit"
                  >
                    <MdShoppingBasket className="" />
                  </button>

                  <h4 className="pt-3 text-zinc-700 font-semibold text-sm">
                    {name}
                  </h4>

                  <p className="text-xs text-gray-400 font-medium">
                    {calories} Calories
                  </p>

                  <div className="flex justify-center items-center">
                    <FaDollarSign className="text-[0.65rem] text-red-700" />

                    <span className="font-bold text-zinc-800 text-sm">
                      {price}
                    </span>
                  </div>
                </div>
              </div>
            );
        }
      )}
    </div>
  );
}

export default ShowFood;

"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
  setIncreaseAmount,
  setDecreaseAmount,
  setDeleteProduct,
  setCleanAll,
} from "../../../redux/slices/productSlice";
import { setLastProduct } from "../../../redux/slices/lastProductSlice";
import Empty from "../../../assets/img/emptyCart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

interface Product {
  name: string;
  img: string;
  price: number;
  amount: number;
}

function Cart() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product);

  useEffect(() => {
    let result = 0;
    const semiTotal = products.map(({ price, amount }: Product) => {
      return price * amount;
    });

    const total = semiTotal.map((el: number) => {
      result += el;

      return result;
    });

    setTotal(total.at(-1));
  }, [products]);

  const handlerCart = (): void => {
    const d = document;

    d?.getElementById("cart")?.classList.add("translate-x-[100rem]");
    d?.getElementById("cart")?.classList.remove("translate-x-0");
    setTimeout(() => {
      d?.getElementById("cart")?.classList.add("opacity-0");
    }, 300);

    d?.getElementById("op-cart")?.classList.add("opacity-0");
    d?.getElementById("op-cart")?.classList.remove("opacity-1");
    setTimeout(() => {
      d?.getElementById("op-cart")?.classList.add("translate-x-[100rem]");
    }, 300);
  };

  const deleteAll = (): void => {
    dispatch(setCleanAll());

    setTimeout(() => {
      const d = document;

      d?.getElementById("cart")?.classList.add("translate-x-[100rem]");
      d?.getElementById("cart")?.classList.remove("translate-x-0");
      setTimeout(() => {
        d?.getElementById("cart")?.classList.add("opacity-0");
      }, 300);

      d?.getElementById("op-cart")?.classList.add("opacity-0");
      d?.getElementById("op-cart")?.classList.remove("opacity-1");
      setTimeout(() => {
        d?.getElementById("op-cart")?.classList.add("translate-x-[100rem]");
      }, 300);
    }, 600);
  };

  const decreaseAmount_Delete = (amount: number, name: string) => {
    if (amount <= 1) {
      dispatch(setDeleteProduct({ name }));
    } else {
      dispatch(setDecreaseAmount({ name }));
    }
  };

  return (
    <Fragment>
      <div
        className="fixed right-0 top-0 bottom-0 w-[25%] z-[350] bg-white border border-l-zinc-300 opacity-0 translate-x-[100rem] transition-transform duration-300"
        id="cart"
      >
        <div className="flex justify-between items-center px-4 pt-5">
          <button
            className="font-semibold text-xl cursor-pointer"
            onClick={handlerCart}
          >
            <AiOutlineArrowLeft />
          </button>

          <h4 className="font-semibold text-zinc-800 text-lg">Cart</h4>

          <button
            onClick={deleteAll}
            className="bg-gray-200 flex items-center gap-2 p-1 rounded-lg"
          >
            <p className="font-normal text-sm">Clear</p>

            <RxCrossCircled className="font-semibold" />
          </button>
        </div>

        {products.length === 0 ? (
          <div className="absolute top-1/2 right-0 left-0 -translate-y-1/2">
            <img src={Empty.src} alt="Cart Empty" />

            <p className="mt-4 font-bold text-center text-zinc-700">
              Add Some Items To Your Cart
            </p>
          </div>
        ) : (
          <div className="mt-6 pt-4 w-full h-full bg-zinc-800 rounded-3xl">
            <div className="pb-4 px-3 h-[55%] overflow-y-scroll non-scrollbar">
              {products.map(
                ({ name, img, price, amount }: Product, i: number) => {
                  return (
                    <div
                      key={i}
                      className="text-white bg-zinc-700 p-2 rounded-lg grid col1-5 gap-2 mt-2 h-[72px]"
                    >
                      <div className="p-0.5 flex items-center justify-center">
                        <img src={img} alt={name} className="h-[3rem]" />
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="grid items-center h-[80%]">
                          <h5 className="text-sm font-semibold h-min">
                            {name}
                          </h5>

                          <p className="text-sm h-min">$ {price}</p>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                          <button
                            onClick={() => decreaseAmount_Delete(amount, name)}
                            className="font-semibold text-sm"
                          >
                            <AiOutlineMinus />
                          </button>
                          <div className="font-semibold text-sm">
                            <p>{amount}</p>
                          </div>
                          <button
                            onClick={() => {
                              dispatch(setIncreaseAmount({ name }));
                            }}
                            className="font-semibold text-sm"
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="bg-zinc-700 h-[35%] w-full mt-4 rounded-3xl text-white py-6 px-6 grid">
              <div className="flex justify-between font-semibold">
                <p>Total</p>

                <p>${total === undefined ? 0 : total}</p>
              </div>

              <button
                onClick={() => {
                  setTimeout(() => {
                    dispatch(setCleanAll());
                  }, 200);
                }}
                className="w-full h-fit py-1 px-1 flex justify-center bg-orange-500 rounded-3xl"
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className="fixed left-0 top-0 bottom-0 z-[500] bg-black/80 w-[75%] translate-x-[100rem] opacity-0 transition-opacity duration-300"
        id="op-cart"
      />
    </Fragment>
  );
}

export default Cart;

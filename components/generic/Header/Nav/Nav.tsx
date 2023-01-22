"use client";
import React, { useState, useEffect, Fragment } from "react";
import Avatar from "../../../../assets/img/avatar.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { RxExit } from "react-icons/rx";

interface Account {
  name: string;
  img: string;
  password: string;
}

function Nav() {
  const products = useSelector((state: any) => state.product);
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    if (localStorage.getItem("account-devlivery-sk")) {
      const account =
        localStorage?.getItem("account-devlivery-sk") ??
        "{name: 'emp', img: 'emp', password: 'emp'}";
      setAccount(JSON.parse(account));
    }
  }, []);

  const handlerCart = (): void => {
    const d = document;

    d?.getElementById("cart")?.classList.remove("translate-x-[100rem]");
    d?.getElementById("cart")?.classList.add("translate-x-0");
    d?.getElementById("cart")?.classList.remove("opacity-0");

    d?.getElementById("op-cart")?.classList.remove("translate-x-[100rem]");
    d?.getElementById("op-cart")?.classList.add("opacity-1");
    d?.getElementById("op-cart")?.classList.remove("opacity-0");
  };

  return (
    <div className="flex items-center gap-12">
      <nav>
        <ul className="flex gap-4 text-gray-700">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Service</li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="relative text-xl text-gray-700 transition duration-300 hover:text-orange-600"
          onClick={handlerCart}
        >
          {products.length === 0 ? null : (
            <div className="absolute -top-3 -right-3 bg-orange-400 w-4 h-4 text-white rounded-full flex items-center justify-center">
              <span className="text-[0.65rem] font-semibold">
                {products.length < 10 ? products.length : "+9"}
              </span>
            </div>
          )}
          <FaShoppingCart className="" />
        </button>

        <div className="relative">
          <button
            onClick={() =>
              showModalAccount
                ? setShowModalAccount(false)
                : setShowModalAccount(true)
            }
          >
            {account ? (
              account.img ? (
                <img
                  src={account.img}
                  alt="Avatar"
                  className="w-8 h-8 transition-transform duration-300 hover:scale-110 rounded-full"
                />
              ) : (
                <img
                  src={Avatar.src}
                  alt="Avatar"
                  className="w-8 h-8 transition-transform duration-300 hover:scale-110"
                />
              )
            ) : (
              <img
                src={Avatar.src}
                alt="Avatar"
                className="w-8 h-8 transition-transform duration-300 hover:scale-110"
              />
            )}
          </button>

          {showModalAccount ? (
            <div className="absolute right-0 w-max bg-white border border-zinc-800 text-zinc-800">
              {account === null ? (
                <div className="flex flex-col items-center">
                  <p className="text-zinc-800 font-medium py-2 px-3">
                    Sign in to unlock new things!
                  </p>

                  <Link className="pb-2 px-3" href={`login`}>
                    <span className="text-sm bg-orange-500 text-white px-3 py-[0.2rem] rounded-xl transition duration-300 hover:bg-black">
                      Sign In
                    </span>
                  </Link>
                </div>
              ) : (
                <Fragment>
                  <p className="text-sm py-2 px-3">
                    Hello{" "}
                    <span className="text-orange-400">{account.name}</span>
                  </p>

                  <div className="text-sm">
                    <Link
                      href="/Create_Item"
                      className="flex w-full items-center gap-2 transition duration-300 hover:bg-gray-200 py-2 px-3"
                    >
                      <span>New Item</span> <AiOutlinePlus />
                    </Link>

                    <button
                      onClick={() => {
                        localStorage.removeItem("account-devlivery-sk");
                        location.reload();
                      }}
                      className="flex w-full items-center gap-2 transition duration-300 hover:bg-gray-200 py-2 px-3"
                    >
                      <span>Log out</span> <RxExit />
                    </button>
                  </div>
                </Fragment>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;

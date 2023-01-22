"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import ModalProduct from "./ModalProduct/ModalProduct";
import Nav from "./Nav/Nav";

function Header() {
  const [isChanged, setIsChanged] = useState(false);
  const lastProduct = useSelector((state: any) => state.lastProduct);

  useEffect(() => {
    lastProduct.amount === 0 ? setIsChanged(false) : setIsChanged(true);
  }, [lastProduct]);

  useEffect(() => {
    setIsChanged(false);
  }, []);

  return (
    <header className="sticky z-[250] top-0 bg-white py-2 px-12 flex justify-between">
      {isChanged ? (
        <ModalProduct
          timeOut={() => {
            setIsChanged(false);
          }}
          cls="translate3rem"
        />
      ) : (
        <ModalProduct />
      )}

      <Logo />

      <Nav />
    </header>
  );
}

export default Header;

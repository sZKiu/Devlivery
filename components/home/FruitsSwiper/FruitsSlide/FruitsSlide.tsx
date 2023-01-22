import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../../redux/slices/productSlice";
import { setLastProduct } from "../../../../redux/slices/lastProductSlice";
import { StaticImageData } from "next/image";
import { MdShoppingBasket } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  name: string;
  img: string;
  price: number;
  calories: number;
}

interface Products {
  name: string;
  price: number;
  img: string;
  amount: number;
}

function FruitsSlide({ img, name, calories, price }: Props) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: any) => state.allProducts);
  const products = useSelector((state: any) => state.product);
  const lastProducts = useSelector((state: any) => state.lastProduct);

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
    <>
      <div className="absolute top-3">
        <img src={img} alt={name} className="h-[7rem]" />
      </div>

      <div className="grid gap-1 justify-end justify-items-end">
        <button
          onClick={() => handlerProducts({ img, name, price })}
          className="p-[7px] rounded-full bg-zinc-900 text-white w-fit h-fit transition duration-300 hover:bg-red-600"
        >
          <MdShoppingBasket className="" />
        </button>

        <h4 className="pt-3 text-zinc-700 font-semibold">{name}</h4>

        <p className="text-xs text-gray-400 font-medium">{calories} Calories</p>

        <div className="flex justify-center items-center">
          <FaDollarSign className="text-[0.65rem] text-red-700" />

          <span className="font-bold text-zinc-800 text-sm">{price}</span>
        </div>
      </div>
    </>
  );
}

export default FruitsSlide;

import React from "react";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  img: string;
  title: string;
  des: string;
  price: number;
}

function FoodCard({ img, title, des, price }: Props) {
  return (
    <div className="relative z-[200] grid gap-3 justify-center text-center w-[10rem] pt-3 pb-2 bg-white/90 rounded-2xl shadow-black/10 shadow-md">
      <img
        src={img}
        alt={title}
        className="absolute z-100 -top-14 left-1/2 -translate-x-1/2 h-[8rem]"
      />

      <h4 className="pt-16 text-zinc-800 font-semibold text-lg">{title}</h4>

      <p className="text-sm text-gray-600/60">{des}</p>

      <div className="flex justify-center items-center">
        <FaDollarSign className="text-[0.65rem] text-red-700" />

        <span className="font-semibold text-zinc-800 text-sm">{price}</span>
      </div>
    </div>
  );
}

export default FoodCard;

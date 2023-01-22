"use client";
import React, { Fragment } from "react";
import { Cat } from "../../../../assets/imgData/imgData";
import { IoFastFoodSharp } from "react-icons/io5";

interface Props {
  setCat: React.Dispatch<React.SetStateAction<string>>;
  cat: string;
}

function Categories({ setCat, cat }: Props) {
  return (
    <div className="flex justify-center gap-4 pt-6 pb-2">
      {Cat.map((categorie: string, i: number) => {
        return (
          <button
            onClick={() => setCat(categorie)}
            key={i}
            className={`shadow-black/30 shadow-md w-[5.65rem] h-[6rem] rounded-lg flex justify-center justify-items-center items-center flex-col gap-3 transition-transform duration-300 hover:scale-105 ${
              cat !== categorie ? "bg-white" : "bg-red-600"
            }`}
          >
            <div
              className={`${
                cat !== categorie
                  ? "bg-red-600 text-white"
                  : "bg-white text-zinc-700"
              } p-2 rounded-full`}
            >
              <IoFastFoodSharp />
            </div>

            <h4
              className={`${
                cat !== categorie ? "text-zinc-600" : "text-white"
              } `}
            >
              {categorie}
            </h4>
          </button>
        );
      })}
    </div>
  );
}

export default Categories;

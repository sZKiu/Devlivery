import React from "react";
import Bike from "../../../../assets/img/delivery.png";

function FirstPart() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center w-fit h-min px-3 py-1 bg-orange-100 rounded-3xl">
        <p className="text-orange-600 font-bold">Bike Delivery</p>

        <div className="w-6 h-6 bg-white rounded-full shadow-md shadow-zinc-700/40">
          <img src={Bike.src} alt="Delivery Image" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[3.90rem] font-bold">
          The Fastest Delivery in{" "}
          <span className="text-orange-400">Your City</span>
        </h1>

        <p className="text-zinc-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          aspernatur iste ipsam repudiandae nostrum reprehenderit corporis non,
          fugit voluptatibus nisi?
        </p>

        <button className="self-start bg-orange-500 px-3 py-[.35rem] text-white rounded-lg text-sm mt-2 shadow-zinc-800/40 shadow-md transition-transform duration-300 hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default FirstPart;

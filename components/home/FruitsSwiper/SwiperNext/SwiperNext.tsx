import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineCaretRight } from "react-icons/ai";

function SwiperNext() {
  const swiper = useSwiper();

  return (
    <button
      className="p-[6px] rounded-lg h-min bg-orange-400 text-white transition-transform duration-200 hover:scale-105"
      onClick={() => swiper.slideNext()}
    >
      <AiOutlineCaretRight className="flex justify-center items-center" />
    </button>
  );
}

export default SwiperNext;

import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineCaretLeft } from "react-icons/ai";

function SwiperPrev() {
  const swiper = useSwiper();

  return (
    <button
      className="p-[6px] rounded-lg h-min bg-orange-400 text-white transition-transform duration-200 hover:scale-105"
      onClick={() => swiper.slidePrev()}
    >
      <AiOutlineCaretLeft className="flex justify-center items-center" />
    </button>
  );
}

export default SwiperPrev;

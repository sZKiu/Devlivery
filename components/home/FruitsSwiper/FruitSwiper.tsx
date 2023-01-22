"use client";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { StaticImageData } from "next/image";
import FruitsSlide from "./FruitsSlide/FruitsSlide";
import SwiperNext from "./SwiperNext/SwiperNext";
import SwiperPrev from "./SwiperPrev/SwiperPrev";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

interface Food {
  name: string;
  img: string;
  des: string;
  price: number;
  calories: number;
  categorie: string;
}

function FruitSwiper() {
  const [isReadyToShow, setIsReadyToShow] = useState<true | false>(false);
  const allProducts = useSelector((state: any) => state.allProducts);
  const swiper = useRef(null);

  useEffect(() => {
    swiper.current ? setIsReadyToShow(true) : setIsReadyToShow(false);
    document.querySelector(".swiper-wrapper")?.classList.add("p-2");
  }, []);

  return (
    <section className="pt-6 pb-4">
      <Swiper
        ref={swiper}
        className={`flex gap-6 py-1 px-1 ${
          isReadyToShow ? "flex-col-reverse" : " flex-col"
        }`}
        spaceBetween={10}
        loop={true}
        slidesPerView={4}
      >
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-zinc-800">
            <h2>Our Fresh and Healthy Fruits</h2>
            <div className="p-0.5 bg-orange-500 w-[40%]" />
          </div>

          <div className="flex items-center gap-3">
            <SwiperPrev />

            <SwiperNext />
          </div>
        </div>

        {isReadyToShow ? (
          <Fragment>
            {allProducts.map((fruit: Food, i: number) => {
              if (fruit.categorie === "fruits")
                return (
                  <SwiperSlide
                    key={i}
                    className="relative bg-white rounded-xl pt-4 pb-2 px-4 shadow-black/10 shadow-md  transition-transform duration-300 hover:scale-105"
                  >
                    <FruitsSlide
                      img={fruit.img}
                      name={fruit.name}
                      calories={fruit.calories}
                      price={fruit.price}
                    />
                  </SwiperSlide>
                );
            })}
          </Fragment>
        ) : (
          <div className="flex justify-center items-center">
            <ClipLoader color="#f97316" size={25} />
          </div>
        )}
      </Swiper>
    </section>
  );
}

export default FruitSwiper;

import React from "react";
import FoodCard from "../../../generic/FoodCard/FoodCard";
import StrawBerrie from "../../../../assets/img/f1.png";
import IceCream from "../../../../assets/img/i1.png";
import ChickenKebab from "../../../../assets/img/c3.png";
import FishKebab from "../../../../assets/img/fi1.png";
import Hero from "../../../../assets/img/heroBg.png";

interface FoodData {
  img: string;
  title: string;
  des: string;
  price: number;
}

function SecondPart() {
  const show: FoodData[] = [
    {
      img: StrawBerrie.src,
      title: "StrawBerries",
      des: "Fresh strawserries",
      price: 10.25,
    },
    {
      img: IceCream.src,
      title: "Ice Cream",
      des: "Chocolate & vanilla",
      price: 5.25,
    },
    {
      img: ChickenKebab.src,
      title: "Chicken Kebab",
      des: "Mixed kebab plate",
      price: 8.25,
    },
    {
      img: FishKebab.src,
      title: "SeaFood Salad",
      des: "Mixed fish kebab",
      price: 6.25,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute right-[7rem] z-100 w-[54%] mt-10 grid grid-cols-2 gap-y-12">
        {show.map(
          (food: FoodData, i: number): JSX.Element => (
            <FoodCard
              key={i}
              img={food.img}
              title={food.title}
              des={food.des}
              price={food.price}
            />
          )
        )}
      </div>

      <img src={Hero.src} alt="Hero" className="absolute z-25 top-0 right-0 h-[29rem] w-[22rem]" />
    </div>
  );
}

export default SecondPart;

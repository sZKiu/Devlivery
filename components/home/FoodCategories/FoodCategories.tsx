"use client";
import React, { Fragment, useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import ShowFood from "./ShowFood/ShowFood";

function FoodCategories() {
  const [cat, setCat] = useState<string>("Chicken");
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.querySelector(".swiper-initialized")
      ? setShow(true)
      : setShow(false);
  }, []);

  return (
    <section>
      {show ? (
        <Fragment>
          <div className="text-xl font-semibold text-zinc-800 w-max">
            <h2>Our Hot Dishes</h2>
            <div className="p-0.5 bg-orange-500 w-[40%]" />
          </div>

          <Categories setCat={setCat} cat={cat} />

          <ShowFood cat={cat} />
        </Fragment>
      ) : null}
    </section>
  );
}

export default FoodCategories;

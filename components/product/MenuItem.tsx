import Image from "next/image";
import React from "react";
import BasketLogo from "../ui/BasketLogo";
import Link from "next/link";

function MenuItem() {
  return (
    <Link href="/product">
      <div className=" bg-secondary group/item rounded-3xl cursor-pointer">
        <div className=" w-full bg-gray-100 flex justify-center py-10 rounded-bl-[46px] rounded-t-2xl">
          <div className=" relative w-32 h-32 ">
            <Image
              src="/images/pizza.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className=" group-hover/item:scale-125 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
        <div className=" p-6 text-white">
          <h4 className=" text-xl font-semibold">Delicious Pizza</h4>
          <p className=" text-base">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque
          </p>
          <div className=" flex justify-between items-center ">
            <span>$20</span>
            <button className=" bg-primary w-10 h-10 rounded-full !p-0 flex justify-center items-center">
              {" "}
              <BasketLogo />{" "}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;

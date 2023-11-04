import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";
import ProductSize from "../../components/ui/ProductSize";
import OptionBox from "../../components/ui/OptionBox";

function Product() {
  return (
    <div className=" flex h-screen items-center gap-20 py-20 flex-wrap ">
      <div className=" relative md:flex-1 md:w-4/6 h-4/6 w-full ">
        <Image
          src="/images/pizza.png"
          layout="fill"
          alt="product"
          objectFit="contain"
        />
      </div>
      <div className=" md:flex-1 md:pr-20 md:pl-0 px-3 md:text-start text-center">
        <Title MyClassName=" text-6xl" text="Pizza" />
        <span className=" text-primary text-2xl font-bold underline underline-offset-2 my-4 inline-block">
          $10
        </span>
        <p className=" text-sm my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          possimus nostrum quos quia odit, voluptates provident accusantium
          ullam atque ipsum illum cum deserunt enim pariatur, recusandae aliquam
          non rem quaerat!
        </p>
        <div>
          <h3 className=" text-xl font-bold">Chouse the size</h3>
          <div className=" flex items-center gap-x-20 md:justify-start justify-center">
            <ProductSize text="Small" size="12" />
            <ProductSize text="Medium" size="16" />
            <ProductSize text="Large" size="20" />
          </div>
        </div>
        <div className="flex gap-x-5 my-7 md:justify-start justify-center">
          <OptionBox text="Ketçap" />
          <OptionBox text="Mayonez" />
          <OptionBox text="Hardal" />
        </div>
        <button className=" btn-primary"> Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;

import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

function CustomerItem({ image }: Props) {
  return (
    <div className=" my-5 mx-4">
      <div className=" p-6 bg-secondary text-white rounded-md">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita cum
          quibusdam, atque dolor fugiat iste labore saepe a itaque adipisci
          pariatur. Officiis distinctio qui nobis odit. Voluptates sint minima
          voluptatum!
        </p>
        <div className=" flex flex-col mt-3">
          <span className=" text-lg font-semibold">Moana Michell </span>
          <span>magna aliqua</span>
        </div>
      </div>
      <div className=" relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 flex justify-center  before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5">
        <Image
          alt=""
          src={image}
          layout="fill"
          objectFit="contain"
          className=" rounded-full "
        />
      </div>
    </div>
  );
}

export default CustomerItem;

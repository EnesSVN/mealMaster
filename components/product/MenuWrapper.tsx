import React from "react";
import Title from "../ui/Title";
import WrapperButton from "../ui/WrapperButton";
import MenuItem from "./MenuItem";

function MenuWrapper() {
  return (
    <div className=" container mx-auto mb-16 ">
      <div className="flex flex-col items-center w-full">
        <Title text="Our Menu" MyClassName="text-5xl" />
        <div>
          <WrapperButton text="All" />
          <WrapperButton text="Burger" />
          <WrapperButton text="Pizza" />
          <WrapperButton text="Drink" />
        </div>
      </div>

      <div className=" mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MenuWrapper;

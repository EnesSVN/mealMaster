import React from "react";
import Title from "./Title";
import OrderNow from "./OrderNow";

function CarouselItem() {
  return (
    <div className="   container mx-auto w-full text-white mt-48 flex flex-col items-start gap-y-10">
      <Title MyClassName=" text-6xl" text="Fast Food Restaurant" />
      <p className=" text-sm sm:w-1/2 w-full">
        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
        ad mollitia laborum quam quisquam esse error unde. Tempora ex
        doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus
        libero ipsam.
      </p>
      <OrderNow />
    </div>
  );
}

export default CarouselItem;

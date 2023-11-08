import React from "react";
import Title from "../ui/Title";
import CustomerItem from "../customerItems/CustomerItem";

function Customers() {
  return (
    <div className=" container mx-auto ">
      <Title
        text="What say our customers "
        MyClassName="text-4xl text-center"
      />
      <div className=" flex gap-x-10 ">
        <CustomerItem image="/images/man.jpg" />
        <CustomerItem image="/images/woman.jpg" />
      </div>
    </div>
  );
}

export default Customers;

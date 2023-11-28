import React, { useState } from "react";
import Title from "../ui/Title";
import InputWitoutValidation from "../form/InputWitoutValidation";
import Input from "../form/Input";

function CatagoryAdmin() {
  const [catagory, setCatagory] = useState("");
  return (
    <div className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 ">
      <Title text="Catagory" MyClassName=" text-4xl " />
      <div>
        <div className=" flex gap-4 flex-1 mt-4 items-center">
          <Input
            placeholder="Add Catagory"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            type="text"
            name="catagory"
          />
          <button className=" btn-primary w-24 h-auto">Add</button>
        </div>
        <div className=" mt-10">
          <div className="flex justify-between">
            <b className=" text-xl">Pizza</b>
            <button className=" btn-primary !bg-red-500">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatagoryAdmin;

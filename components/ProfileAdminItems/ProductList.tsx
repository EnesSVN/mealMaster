import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

function ProductList() {
  return (
    <div className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 ">
      <Title text="Products" MyClassName=" text-4xl " />

      <div className="  flex items-center flex-1 mt-5  overflow-x-auto w-full mb-10">
        <table className=" w-full text-sm text-center  text-gray-500 ">
          <thead className=" text-xs bg-gray-700">
            <tr>
              <th scope="col" className=" py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className=" py-3 px-6">
                ID
              </th>
              <th scope="col" className=" py-3 px-6">
                TITLE
              </th>
              <th scope="col" className=" py-3 px-6">
                PRICE
              </th>
              <th scope="col" className=" py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  bg-secondary hover:bg-primary transition-all ease-in-out">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1">
                <Image src="/images/pizza.png" alt="" width={50} height={50} />
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                23642346
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Good Pizza
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10.00
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className=" btn-primary !bg-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;

import React from "react";
import Title from "../ui/Title";

function OrderProfile() {
  return (
    <div className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 ">
      <Title text="Orders" MyClassName=" text-4xl " />

      <div className="items-center  overflow-x-auto mt-10">
        <table className=" w-full text-sm text-center  text-gray-500 ">
          <thead className=" text-xs bg-gray-700">
            <tr>
              <th scope="col" className=" py-3 px-6">
                ID
              </th>
              <th scope="col" className=" py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className=" py-3 px-6">
                DATE
              </th>
              <th scope="col" className=" py-3 px-6">
                TOTAL
              </th>{" "}
              <th scope="col" className=" py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  bg-secondary hover:bg-primary transition-all ease-in-out">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1">
                <span>55743456</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Istanbul</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>28/08/2023</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>18$</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>preparing</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderProfile;

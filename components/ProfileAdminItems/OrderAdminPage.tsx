import React from "react";
import Title from "../ui/Title";

function OrderAdminPage() {
  return (
    <div className=" lg:p-8 mb-10 lg:my-0 mt-5 flex-1 ">
      <Title text="Orders" MyClassName=" text-4xl " />

      <div className="  flex items-center flex-1 mt-5  overflow-x-auto w-full mb-10">
        <table className=" w-full text-sm text-center  text-gray-500 ">
          <thead className=" text-xs bg-gray-700">
            <tr>
              <th scope="col" className=" py-3 px-6">
                PRODUCT ID
              </th>
              <th scope="col" className=" py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className=" py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className=" py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className=" py-3 px-6">
                STATUS
              </th>
              <th scope="col" className=" py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  bg-secondary hover:bg-primary transition-all ease-in-out">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                23642346
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Enes SEVEN
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10.00
              </td>{" "}
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                cash
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className=" btn-primary !bg-green-500">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderAdminPage;

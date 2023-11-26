import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";
function Cart() {
  return (
    <div className=" min-h-[calc(100vh_-_475px)] ">
      <div className=" flex justify-between md:flex-row flex-col ">
        <div className=" min-h-[calc(100vh_-_475px)] flex items-center flex-1 px-10 overflow-x-auto">
          <table className=" w-full text-sm text-center  text-gray-500 ">
            <thead className=" text-xs bg-gray-700">
              <tr>
                <th scope="col" className=" py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className=" py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className=" py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className=" py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="  bg-secondary hover:bg-primary transition-all ease-in-out">
                <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1">
                  <Image
                    src="/images/pizza.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <span>Good Pizza</span>
                </td>
                <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>Extra Cheese, Extra Sauce</span>
                </td>
                <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>$ 10.00</span>
                </td>
                <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>1</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className=" bg-secondary min-h-[calc(100vh_-_475px)] flex flex-col justify-center px-7 text-white md:mb-0 mb-5  
        "
        >
          <Title text="Cart Total" MyClassName=" text-4xl" />

          <div className="flex flex-col gap-2 mb-5">
            <p>
              <b>Subtotal:</b> $ 10.00
            </p>
            <p>
              <b>Discount:</b> $ 00.00
            </p>
            <p>
              <b>Total:</b> $ 9.00
            </p>
          </div>
          <button className="btn-primary">Checkout Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

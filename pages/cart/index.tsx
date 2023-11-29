import Title from "@/components/ui/Title";
import Product from "@/interface/productInterface";
import { reset } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const { products, quantity, total } = useSelector(
    (state: { cart: Product }) => state.cart
  );
  const resetList = () => {
    dispatch(reset());
  };

  return (
    <div className=" min-h-[calc(100vh_-_475px)] ">
      <div className=" flex justify-between md:flex-row flex-col ">
        <div className="min-h-[calc(100vh_-_475px)] flex items-center flex-1 px-10 overflow-x-auto">
          <table className=" w-full text-sm text-center  text-gray-500 my-10 ">
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
              {products.map((product, index) => (
                <tr
                  className="  bg-secondary hover:bg-primary transition-all ease-in-out hover:text-white"
                  key={index}
                >
                  <td className=" py-4 px-6 font-medium whitespace-nowrap  flex items-center gap-x-1">
                    <Image
                      src="/images/pizza.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap ">
                    {product?.selectedOptions?.map(
                      (option: { name: string }, index: number) => (
                        <span key={index}>{option.name}, </span>
                      )
                    )}
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap ">
                    <span>$ {product.price}</span>
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap ">
                    <span>{product.quantity}</span>
                  </td>
                </tr>
              ))}
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
              <b>Subtotal:</b> $ {total}
            </p>
            <p>
              <b>Discount:</b> $ 00.00
            </p>
            <p>
              <b>Total:</b> $ {total}
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              resetList();
            }}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

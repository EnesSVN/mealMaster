import Image from "next/image";

function Order() {
  return (
    <div className=" min-h-[calc(100vh_-_475px)] flex justify-between items-center  flex-col p-10">
      <div className="  flex items-center flex-1  overflow-x-auto w-full mb-10">
        <table className=" w-full text-sm text-center  text-gray-500 ">
          <thead className=" text-xs bg-gray-700">
            <tr>
              <th scope="col" className=" py-3 px-6">
                ORDER ID
              </th>
              <th scope="col" className=" py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className=" py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className=" py-3 px-6">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  bg-secondary hover:bg-primary transition-all ease-in-out">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1">
                12454667224346
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Enes SEVEN
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Istanbul
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" flex justify-between w-full p-10 bg-primary">
        <div className=" relative flex flex-col">
          <Image src="/images/paid.png" alt="" width={50} height={50} />
          <span>Payment</span>
        </div>
        <div className=" relative flex flex-col">
          <Image src="/images/bake.png" alt="" width={50} height={50} />
          <span>Preparing</span>
        </div>
        <div className=" relative flex flex-col">
          <Image src="/images/bike.png" alt="" width={50} height={50} />
          <span>On the way</span>
        </div>
        <div className=" relative flex flex-col">
          <Image src="/images/delivered.png" alt="" width={50} height={50} />
          <span>Delivered</span>
        </div>
      </div>
    </div>
  );
}

export default Order;

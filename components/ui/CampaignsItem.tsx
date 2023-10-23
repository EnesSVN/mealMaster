import Image from "next/image";
import React from "react";
import Title from "./Title";
import OrderNow from "./OrderNow";

function CampaignsItem() {
  return (
    <div className=" bg-secondary flex-1 rounded-md py-5 px-4 flex items-center gap-4  ">
      <div className="relative h-44 w-44 after:content-['']  border-primary border-2 rounded-full overflow-hidden">
        <Image
          alt=""
          src="/images/campaing.jpg"
          layout="fill"
          objectFit="cover"
          className=" hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="text-white font-dancing my-2 flex flex-col gap-y-2">
        <Title MyClassName="text-2xl " text="Tasty Thursdays" />
        <div>
          <span className=" text-5xl ">20%</span>
          <span className=" text-sm inline-block ml-2">off</span>
        </div>

        <OrderNow icon={true} />
      </div>
    </div>
  );
}

export default CampaignsItem;

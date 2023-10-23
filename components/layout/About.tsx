import Image from "next/image";
import React from "react";
import Title from "../ui/Title";

function About() {
  return (
    <div className=" bg-secondary w-full py-16">
      <div className="container mx-auto flex items-center gap-20  justify-center flex-wrap-reverse ">
        <div className=" relative w-[28rem] h-[38rem]">
          <Image src="/images/about.png" alt="" layout="fill" />
        </div>

        <div className=" text-white md:w-1/2 ">
          <Title text="We Are Feane" MyClassName="text-4xl" />
          <p className=" my-6">
            {`There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. If you are going to use a passage of 
            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All`}
          </p>
          <button className=" btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;

import Image from "next/image";
import React from "react";
import CarouselItem from "../ui/CarouselItem";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div className=" absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <ul className=" flex flex-row justify-center items-center">{dots}</ul>
      </div>
    ),
    customPaging: function (i: any) {
      return (
        <div
          className=" w-3 h-3 border rounded-full bg-white mt-10 "
          style={{ transition: "all .5s ease" }}
        ></div>
      );
    },
  };
  return (
    <div className=" h-screen w-full container mx-auto -mt-[88px]">
      <div className=" absolute top-0 left-0 w-full h-full">
        <div className=" relative h-full w-full">
          <Image
            src={"/images/carouselBg.jpg"}
            layout="fill"
            alt=""
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider>
    </div>
  );
}

export default Carousel;

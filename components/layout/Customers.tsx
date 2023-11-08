import React from "react";
import Title from "../ui/Title";
import CustomerItem from "../customerItems/CustomerItem";
import Slider from "react-slick";
import NextButton from "../ui/NextButton";
import PrevButton from "../ui/PrevButton";

function Customers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className=" container mx-auto ">
      <Title
        text="What say our customers "
        MyClassName="text-4xl text-center"
      />{" "}
      <div>
        <Slider {...settings}>
          <CustomerItem image="/images/man.jpg" />
          <CustomerItem image="/images/woman.jpg" />{" "}
          <CustomerItem image="/images/man.jpg" />
          <CustomerItem image="/images/woman.jpg" />{" "}
        </Slider>{" "}
      </div>
    </div>
  );
}

export default Customers;

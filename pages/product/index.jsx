import Image from "next/image";
import React, { useState } from "react";
import Title from "../../components/ui/Title";
import ProductSize from "../../components/ui/ProductSize";
import OptionBox from "../../components/ui/OptionBox";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const optionsDefault = [
  { id: 1, name: "Ketçap", price: 1 },
  { id: 2, name: "Mayonez", price: 2 },
  {
    id: 3,
    name: "Hardal",
    price: 3,
  },
];
const footItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 10,
    dedc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    extraOptions: [{ id: 1, name: "Ketçap", price: 1 }],
  },
];

function Product() {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [options, setOptions] = useState(optionsDefault);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { products, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSize = (index) => {
    const diff = prices[index] - prices[size];
    setPrice(price + diff);
    setSize(index);
  };

  const handleOption = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      setPrice(price + item.price);
      setSelectedOptions([...selectedOptions, item]);
    } else {
      setPrice(price - item.price);
      setSelectedOptions(
        selectedOptions.filter((selected) => selected.id !== item.id)
      );
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...footItems[0], selectedOptions, price, quantity: 1 })
    );
  };
  console.log(products, quantity, total);
  return (
    <div className=" flex md:h-screen relative items-center gap-20 md:py-20 pt-10 flex-wrap mb-16">
      <div className=" relative md:flex-1 md:w-4/6 h-44 md:h-full w-full ">
        <Image
          src="/images/pizza.png"
          layout="fill"
          alt="product"
          objectFit="contain"
        />
      </div>
      <div className=" md:flex-1 md:pr-20 md:pl-0 px-3 md:text-start text-center">
        <Title MyClassName=" text-6xl" text="Pizza" />
        <span className=" text-primary text-2xl font-bold underline underline-offset-2 my-4 inline-block">
          ${price}
        </span>
        <p className=" text-sm my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          possimus nostrum quos quia odit, voluptates provident accusantium
          ullam atque ipsum illum cum deserunt enim pariatur, recusandae aliquam
          non rem quaerat!
        </p>
        <div>
          <h3 className=" text-xl font-bold">Chouse the size</h3>
          <div className=" flex items-center gap-x-20 md:justify-start justify-center">
            <ProductSize
              text="Small"
              size="8"
              onclick={() => handleSize(0)}
              selected={size === 0}
            />
            <ProductSize
              text="Medium"
              size="12"
              onclick={() => handleSize(1)}
              selected={size === 1}
            />
            <ProductSize
              text="Large"
              size="16"
              onclick={() => handleSize(2)}
              selected={size === 2}
            />
          </div>
        </div>
        <div className="flex gap-x-5 my-7 md:justify-start justify-center">
          {options.map((option) => (
            <OptionBox
              onclick={(e) => handleOption(e, option)}
              key={option.id}
              text={option.name}
            />
          ))}
        </div>
        <button className=" btn-primary" onClick={handleClick}>
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

import React from "react";

type Props = {
  text: string;
};

function WrapperButton({ text }: Props) {
  return (
    <button className=" px-4 py-2 bg-secondary rounded-3xl text-white ">
      {text}
    </button>
  );
}

export default WrapperButton;

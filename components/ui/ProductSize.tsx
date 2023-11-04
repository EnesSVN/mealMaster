import Image from "next/image";
import React from "react";

type ProductSizeProps = {
  text: string;
  size: string;
};

function ProductSize({ text, size }: ProductSizeProps) {
  return (
    <div className={`relative w-${size} h-${size}`}>
      <Image src="/images/sizePizza.png" layout="fill" alt="product" />
      <span className=" absolute top-0 -right-6 text-xs bg-primary  rounded-full px-3 font-medium">
        {text}
      </span>
    </div>
  );
}

export default ProductSize;

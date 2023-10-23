import React from "react";
import BasketLogo from "./BasketLogo";

type Props = {
  icon?: boolean;
};

function OrderNow({ icon }: Props) {
  return (
    <button className=" btn-primary flex gap-1 ">
      OrderNow
      {icon && <BasketLogo />}
    </button>
  );
}

export default OrderNow;

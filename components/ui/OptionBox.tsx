import React from "react";

function OptionBox({ text }: { text: string }) {
  return (
    <label className=" flex items-center gap-x-1">
      <input type="checkbox" className=" h-5 w-5 accent-primary" />{" "}
      <span className=" text-sm font-semibold">{text}</span>
    </label>
  );
}

export default OptionBox;

import React from "react";

type OptionBoxProps = {
  text: string;
  onclick: () => void;
};

function OptionBox({ text, onclick }: OptionBoxProps) {
  return (
    <label className=" flex items-center gap-x-1" onClick={onclick}>
      <input type="checkbox" className=" h-5 w-5 accent-primary" />{" "}
      <span className=" text-sm font-semibold">{text}</span>
    </label>
  );
}

export default OptionBox;

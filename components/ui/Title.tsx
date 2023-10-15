import { type } from "os";
import React from "react";

type TitleProps = {
  text: string;
  MyClassName?: string;
};

export default function Title({ text, MyClassName }: TitleProps) {
  return <div className={` font-dancing font-bold ${MyClassName}`}>{text}</div>;
}

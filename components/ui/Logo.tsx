import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <span className=" text-3xl font-dancing text-primary font-bold">
        Meal Master
      </span>
    </Link>
  );
}

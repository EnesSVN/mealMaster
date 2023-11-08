import React from "react";

function PrevButton() {
  return (
    <button className=" absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center rounded-full w-12 h-12 mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default PrevButton;

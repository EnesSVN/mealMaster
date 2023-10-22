import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import CloseIcon from "../ui/CloseIcon";

type SearchModalProps = {
  setSearchModal: (value: boolean) => void;
};

export default function SearchModal({ setSearchModal }: SearchModalProps) {
  return (
    <div className="w-screen h-screen z-50 top-0 left-0 fixed after:content-[''] after:w-screen after:h-screen after:absolute after:bg-white after:top-0 after:left-0 after:opacity-70   grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setSearchModal(false)}>
        <div className=" w-full h-full grid place-content-center">
          <div className=" relative z-50 md:w-[37rem] w-[20rem] h-[37rem] bg-white  border border-gray-400 rounded-2xl px-10 ">
            <button
              className=" absolute top-5 right-5"
              onClick={() => setSearchModal(false)}
            >
              <CloseIcon />
            </button>
            <Title text="Search" MyClassName="text-4xl text-center" />
            <input
              type="text"
              placeholder="Search..."
              className=" border border-primary w-full  my-10"
            />
            <div>
              <ul>
                <li className=" flex items-center justify-between font-bold p-2 hover:bg-primary cursor-pointer transition-all">
                  <div className=" relative flex">
                    <Image
                      src="/images/pizza.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>Good Pizza</span>
                  <span>10$</span>
                </li>
                <li className=" flex items-center justify-between font-bold p-2 hover:bg-primary cursor-pointer transition-all">
                  <div className=" relative flex">
                    <Image
                      src="/images/pizza.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>Good Pizza</span>
                  <span>10$</span>
                </li>{" "}
                <li className=" flex items-center justify-between font-bold p-2 hover:bg-primary cursor-pointer transition-all">
                  <div className=" relative flex">
                    <Image
                      src="/images/pizza.png"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>Good Pizza</span>
                  <span>10$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

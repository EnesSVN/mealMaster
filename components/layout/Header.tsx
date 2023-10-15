import React, { useState } from "react";
import Logo from "../ui/Logo";
import UserLogo from "../ui/UserLogo";
import BasketLogo from "../ui/BasketLogo";
import SearchLogo from "../ui/SearchLogo";

import SearchModal from "../modals/SearchModal";

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);

  return (
    <div className=" h-20 bg-secondary ">
      <div className=" container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex">
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <a href="" className=" px-2">
            <UserLogo />
          </a>
          <a href="" className=" px-2">
            <BasketLogo />
          </a>
          <button
            className=" px-2"
            onClick={() => {
              setSearchModal(true);
            }}
          >
            <SearchLogo />
          </button>
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {searchModal && <SearchModal setSearchModal={setSearchModal} />}
    </div>
  );
};

export default Header;

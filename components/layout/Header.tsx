import React, { useState } from "react";
import Logo from "../ui/Logo";
import UserLogo from "../ui/UserLogo";
import BasketLogo from "../ui/BasketLogo";
import SearchLogo from "../ui/SearchLogo";
import SearchModal from "../modals/SearchModal";
import HamburgerMenuIcon from "../ui/HamburgerMenuIcon";
import CloseIcon from "../ui/CloseIcon";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import Product from "@/interface/productInterface";

const Header = () => {
  const router = useRouter();
  const [searchModal, setSearchModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const { products } = useSelector((state: { cart: Product }) => state.cart);

  return (
    <div
      className={
        "h-20  z-50 relative  " +
        (router.asPath === "/" ? " bg-transparent" : " bg-secondary")
      }
    >
      <div className=" container mx-auto  text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={
            "sm:static absolute top-0 left-0 h-screen sm:w-auto sm:h-auto  w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden " +
            (menu === true && "!grid place-content-center ")
          }
        >
          <div
            className=" absolute top-5 right-5 sm:hidden "
            onClick={() => setMenu(false)}
          >
            <CloseIcon />
          </div>
          <ul className="flex sm:flex-row flex-col item items-center justify-end">
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <Link href={"/menu"}>MENU</Link>
            </li>
            <li className=" px-2 py-5 hover:text-primary cursor-pointer">
              <Link href={"/reservation"}>BOOK TABLE</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Link href="/auth/login" className=" px-2">
            <UserLogo />
          </Link>
          <Link href="/cart" className=" px-2 relative">
            <BasketLogo />
            {products.length > 0 && (
              <span className=" w-4 h-4 text-xs bg-primary grid place-items-center rounded-full absolute -top-1 -right-1 text-secondary font-semibold">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className=" px-2"
            onClick={() => {
              setSearchModal(true);
            }}
          >
            <SearchLogo />
          </button>
          <a href="" className=" md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button className=" sm:hidden block" onClick={() => setMenu(!menu)}>
            <HamburgerMenuIcon />
          </button>
        </div>
      </div>
      {searchModal && <SearchModal setSearchModal={setSearchModal} />}
    </div>
  );
};

export default Header;

import React from "react";
import ExitIcon from "@/components/ui/ExitIcon";
import HomeIcon from "@/components/ui/HomeIcon";
import KeyIcon from "@/components/ui/KeyIcon";
import UserLogo from "@/components/ui/UserLogo";
import Image from "next/image";
import UserItem from "./UserItem";

function ProfileUser() {
  return (
    <div className=" border border-gray-400  w-80">
      <div className=" relative flex flex-col items-center px-10 py-5">
        <Image
          src="/images/man.jpg"
          alt=""
          width={100}
          height={100}
          className=" rounded-full"
        />
        <b className=" text-2xl">Enes SEVEN</b>
      </div>
      <ul>
        <UserItem Icon={HomeIcon} text="Account" />

        <UserItem Icon={KeyIcon} text="Password" />

        <UserItem Icon={UserLogo} text="Orders" />

        <UserItem Icon={ExitIcon} text="Exit" />
      </ul>
    </div>
  );
}

export default ProfileUser;

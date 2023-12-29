import React from "react";
import ExitIcon from "@/components/ui/ExitIcon";
import HomeIcon from "@/components/ui/HomeIcon";
import KeyIcon from "@/components/ui/KeyIcon";
import UserLogo from "@/components/ui/UserLogo";
import Image from "next/image";
import UserItem from "./UserItem";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {
  tabs: number;
  setTabs: React.Dispatch<React.SetStateAction<number>>;
};

function ProfileUser({ tabs, setTabs }: Props) {
  const { data: session } = useSession();
  const { push } = useRouter();
  if (!session) {
    push("/");
  }
  const handleLogout = () => {
    if (confirm("Are you sure to logout?")) {
      signOut({ redirect: false });
      push("/");
    }
  };

  return (
    <div className=" border border-gray-400  lg:w-80 w-full flex-shrink-0">
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
        <UserItem
          Icon={HomeIcon}
          text="Account"
          id={0}
          tabs={tabs}
          setTabs={setTabs}
        />

        <UserItem
          Icon={KeyIcon}
          text="Password"
          id={1}
          tabs={tabs}
          setTabs={setTabs}
        />

        <UserItem
          Icon={UserLogo}
          text="Orders"
          id={2}
          tabs={tabs}
          setTabs={setTabs}
        />

        <UserItem
          Icon={ExitIcon}
          text="Exit"
          id={3}
          tabs={tabs}
          setTabs={setTabs}
          onClick={handleLogout}
        />
      </ul>
    </div>
  );
}

export default ProfileUser;

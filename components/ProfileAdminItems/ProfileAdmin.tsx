import React from "react";
import UserItem from "../profileItems/UserItem";
import Image from "next/image";
import ProductIcon from "../ui/ProductIcon";
import UserLogo from "../ui/UserLogo";
import CategorieIcon from "../ui/CategorieIcon";
import FooterIcon from "../ui/FooterIcon";
import ExitIcon from "../ui/ExitIcon";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type Props = {
  tabs: number;
  setTabs: React.Dispatch<React.SetStateAction<number>>;
};

function ProfileAdmin({ tabs, setTabs }: Props) {
  const { push } = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;
  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure you want to delete your account?")) {
        const res = await axios.put(`${api}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Account closed");
        }
      }
    } catch (error) {}
  };

  return (
    <div className=" border border-gray-400  lg:w-80 w-full flex-shrink-0">
      <div className=" relative flex flex-col items-center px-10 py-5">
        <Image
          src="/images/admin.png"
          alt=""
          width={100}
          height={100}
          className=" rounded-full"
        />
        <b className=" text-2xl">Admin</b>
      </div>
      <ul>
        <UserItem
          Icon={ProductIcon}
          text="Products"
          id={0}
          tabs={tabs}
          setTabs={setTabs}
        />{" "}
        <UserItem
          Icon={UserLogo}
          text="Orders"
          id={1}
          tabs={tabs}
          setTabs={setTabs}
        />
        <UserItem
          Icon={CategorieIcon}
          text="Categories"
          id={2}
          tabs={tabs}
          setTabs={setTabs}
        />
        <UserItem
          Icon={FooterIcon}
          text="Footer"
          id={3}
          tabs={tabs}
          setTabs={setTabs}
        />{" "}
        <UserItem
          Icon={ExitIcon}
          text="Exit"
          id={4}
          tabs={tabs}
          setTabs={setTabs}
          onClick={closeAdminAccount}
        />
      </ul>
    </div>
  );
}

export default ProfileAdmin;

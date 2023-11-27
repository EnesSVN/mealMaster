import React from "react";

type Props = {
  Icon: React.FC;
  text: string;
};

function UserItem({ Icon, text }: Props) {
  return (
    <li className="border w-full p-3 flex gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-100 ">
      <Icon />
      <button>{text}</button>
    </li>
  );
}

export default UserItem;

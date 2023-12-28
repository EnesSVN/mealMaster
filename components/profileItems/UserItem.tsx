import React from "react";

type Props = {
  Icon: React.FC;
  text: string;
  id: number;
  tabs: number;
  setTabs: React.Dispatch<React.SetStateAction<number>>;
  onClick?: () => void;
};

function UserItem({ Icon, text, id, tabs, setTabs, onClick }: Props) {
  return (
    <li
      onClick={() => {
        text === "Exit" ? onClick() : setTabs(id);
      }}
      className={
        "border w-full p-3 flex gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-100 " +
        (tabs === id ? "bg-primary text-white" : "")
      }
    >
      <Icon />
      <button>{text}</button>
    </li>
  );
}

export default UserItem;

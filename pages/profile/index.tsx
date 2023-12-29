import AccountSetting from "@/components/profileItems/AccountSetting";
import PasswordSetting from "@/components/profileItems/PasswordSetting";
import ProfileUser from "@/components/profileItems/ProfileUser";
import React, { useState } from "react";
import OrderProfile from "@/components/profileItems/OrderProfile";
import { getSession } from "next-auth/react";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className=" flex px-10 lg:flex-row flex-col ">
      <ProfileUser tabs={tabs} setTabs={setTabs} />
      {tabs === 0 && <AccountSetting />}
      {tabs === 1 && <PasswordSetting />}
      {tabs === 2 && <OrderProfile />}
    </div>
  );
}

export async function getServerSideProps({ req: any }) {
  const session = await getSession({ req: any });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Profile;

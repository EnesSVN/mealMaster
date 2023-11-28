import AccountSetting from "@/components/profileItems/AccountSetting";
import ProfileUser from "@/components/profileItems/ProfileUser";
import React, { useState } from "react";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className=" flex px-10 lg:flex-row flex-col ">
      <ProfileUser tabs={tabs} setTabs={setTabs} />
      {tabs === 0 && <AccountSetting />}
    </div>
  );
}

export default Profile;

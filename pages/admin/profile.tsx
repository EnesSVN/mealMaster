import React, { useState } from "react";
import ProfileAdmin from "@/components/ProfileAdminItems/ProfileAdmin";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className=" flex px-10 lg:flex-row flex-col ">
      <ProfileAdmin tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default Profile;

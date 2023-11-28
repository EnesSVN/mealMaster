import React, { useState } from "react";
import ProfileAdmin from "@/components/ProfileAdminItems/ProfileAdmin";
import ProductList from "@/components/ProfileAdminItems/ProductList";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className=" flex px-10 lg:flex-row flex-col ">
      <ProfileAdmin tabs={tabs} setTabs={setTabs} />
      {tabs === 0 && <ProductList />}
    </div>
  );
}

export default Profile;

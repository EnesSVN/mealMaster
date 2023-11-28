import React, { useState } from "react";
import ProfileAdmin from "@/components/ProfileAdminItems/ProfileAdmin";
import ProductList from "@/components/ProfileAdminItems/ProductList";
import OrderAdminPage from "@/components/ProfileAdminItems/OrderAdminPage";
import CatagoryAdmin from "@/components/ProfileAdminItems/CatagoryAdmin";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className=" flex px-10 lg:flex-row flex-col ">
      <ProfileAdmin tabs={tabs} setTabs={setTabs} />
      {tabs === 0 && <ProductList />}
      {tabs === 1 && <OrderAdminPage />}
      {tabs === 2 && <CatagoryAdmin />}
    </div>
  );
}

export default Profile;

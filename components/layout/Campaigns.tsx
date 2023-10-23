import React from "react";
import CampaignsItem from "../ui/CampaignsItem";

function Campaigns() {
  return (
    <div className="flex sm:justify-between justify-center gap-5 container mx-auto py-24 flex-wrap  ">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
}

export default Campaigns;

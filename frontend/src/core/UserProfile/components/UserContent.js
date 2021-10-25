import React from "react";
import OrderList from "./OrderList";
import ProfileDetails from "./ProfileDetails";
import Wishlist from "./Wishlist";

const UserContent = ({ currentTab }) => {
  return (
    <div className="col-md-9">
      <div className="tab-content" id="settingTabContent">
        {currentTab === "Profile" && <ProfileDetails />}

        {currentTab === "Orders" && <OrderList />}

        {currentTab === "Wishlist" && <Wishlist />}
      </div>
    </div>
  );
};

export default UserContent;

import React from "react";
import OrderList from "./OrderList";
import StoreProductList from "./StoreProductList";

const StoreContents = ({ currentTab }) => {
  return (
    <div className="col-md-9">
      <div className="tab-content" id="settingTabContent">
        {currentTab === "Products" && <StoreProductList />}
        {currentTab === "Orders" && <OrderList />}
      </div>
    </div>
  );
};

export default StoreContents;

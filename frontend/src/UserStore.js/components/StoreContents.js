import React from "react";
import OrderList from "./OrderList";
import StoreProductList from "./StoreProductList";

const StoreContents = ({ currentTab, orderStatus }) => {
  return (
    <div className="col-md-9">
      <div className="tab-content" id="settingTabContent">
        {currentTab === "Products" && <StoreProductList />}
        {currentTab === "Orders" && <OrderList orderStatus={orderStatus} />}
      </div>
    </div>
  );
};

export default StoreContents;

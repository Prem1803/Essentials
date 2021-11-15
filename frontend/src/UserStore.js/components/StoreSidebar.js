import React from "react";

const StoreSidebar = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="col-md-3 mb-3 pr-xl-5">
      <h2>Store Settings</h2>

      <ul className="nav nav-pills flex-column" id="settingTab" role="tablist">
        <li className="nav-item">
          <div
            className={
              currentTab === "Products" ? "nav-link active" : "nav-link "
            }
            onClick={() => {
              setCurrentTab("Products");
            }}
          >
            {" "}
            <i className="fa fa-user"> </i> Products
          </div>
        </li>

        <li className="nav-item">
          <div
            className={
              currentTab === "Orders" ? "nav-link active" : "nav-link "
            }
            onClick={() => {
              setCurrentTab("Orders");
            }}
          >
            <i className="fa fa-shopping-bag"> </i>Orders
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StoreSidebar;

import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="col-md-3 mb-3 pr-xl-5">
      <h2>Account</h2>

      <ul className="nav nav-pills flex-column" id="settingTab" role="tablist">
        <li className="nav-item">
          <div
            className={
              currentTab === "Profile" ? "nav-link active" : "nav-link "
            }
            onClick={() => {
              setCurrentTab("Profile");
            }}
          >
            {" "}
            <i className="fa fa-user"> </i> Profile
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
            <i className="fa fa-shopping-bag"> </i>My Order
          </div>
        </li>

        <li className="nav-item">
          <div
            className={
              currentTab === "Wishlist" ? "nav-link active" : "nav-link "
            }
            onClick={() => {
              setCurrentTab("Wishlist");
            }}
          >
            <i className="fa fa-heart"> </i> wishlist
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            <i className="fa fa-sign-out"> </i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;

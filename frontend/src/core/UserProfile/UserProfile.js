import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UserContent from "./components/UserContent";
import UserSidebar from "./components/UserSidebar";

const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState("Profile");

  return (
    <div className="essential-customer-account">
      <Navbar />
      <div className="account-setting">
        <div className="container">
          <div className="row">
            <UserSidebar
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
            />
            <UserContent currentTab={currentTab} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;

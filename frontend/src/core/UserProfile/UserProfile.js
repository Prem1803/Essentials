import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import store from "../../store";
import CoverLoader from "../Components/CoverLoader";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UserContent from "./components/UserContent";
import UserSidebar from "./components/UserSidebar";

const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState("Profile");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  let user = store.getState().userLogin;
  useEffect(() => {
    if (user.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  store.subscribe(() => {
    user = store.getState().userLogin;
    if (user.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn !== null) {
      if (isLoggedIn) {
        setLoading(false);
      } else {
        navigate("/login");
      }
    }
  }, [isLoggedIn]);
  if (loading) return <CoverLoader />;

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

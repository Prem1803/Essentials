import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CoverLoader from "../core/Components/CoverLoader";
import Footer from "../core/Components/Footer";
import Navbar from "../core/Components/Navbar";
import store from "../store";
import StoreContents from "./components/StoreContents";
import StoreHeader from "./components/StoreHeader";
import StoreSidebar from "./components/StoreSidebar";

const UserStore = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderStatus, setOrderStatus] = useState("");
  let user = store.getState().userLogin;
  useEffect(() => {
    if (user.token) {
      setIsLoggedIn(true);
    } else {
      console.log(user.token);
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
  const [currentTab, setCurrentTab] = useState("Products");
  if (loading) return <CoverLoader />;

  return (
    <div className="store-section">
      <Navbar />

      <StoreHeader
        setCurrentTab={setCurrentTab}
        setOrderStatus={setOrderStatus}
        currentTab={currentTab}
      />
      <div className="account-setting">
        <div className="container">
          <div className="row">
            <StoreSidebar
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            <StoreContents currentTab={currentTab} orderStatus={orderStatus} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserStore;

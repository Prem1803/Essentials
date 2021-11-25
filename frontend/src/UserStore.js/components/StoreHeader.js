import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getStoreOrderSummary } from "../../actions/OrderActions";
import { getUserDetails, updateUserDetails } from "../../actions/UserActions";
import CoverLoader from "../../core/Components/CoverLoader";
import store from "../../store";

const StoreHeader = ({ currentTab, setCurrentTab, setOrderStatus }) => {
  const [storeName, setStore] = useState("Prem's Store");
  const [edit, setEdit] = useState(false);
  const [total, setTotal] = useState("");
  const [completed, setCompleted] = useState("");
  const [pending, setPending] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const saveStoreName = () => {
    setEdit(false);
    let formData = new FormData();
    formData.append("store", storeName);
    dispatch(updateUserDetails(formData));
  };
  let user = store.getState().user;
  let storeOrderSummary = store.getState().storeOrderSummary;
  let navigate = useNavigate();
  useEffect(() => {
    if (user.userDetails) {
      if (!user.userDetails.store) navigate("/profile");
      setStore(user.userDetails.store);
    } else {
      dispatch(getUserDetails());
    }
    if (storeOrderSummary.total === 0) {
      setLoading(true);
      dispatch(getStoreOrderSummary());
    } else {
      setTotal(storeOrderSummary.total);
      setPending(storeOrderSummary.pending);
      setCompleted(storeOrderSummary.completed);
    }
  }, []);
  store.subscribe(() => {
    user = store.getState().user;
    storeOrderSummary = store.getState().storeOrderSummary;
    setTotal(storeOrderSummary.total);
    setPending(storeOrderSummary.pending);
    setCompleted(storeOrderSummary.completed);
    if (storeOrderSummary.loading) setLoading(true);
    else {
      setLoading(false);
    }
    if (user.userDetails) {
      if (!user.userDetails.store) navigate("/profile");
      setStore(user.userDetails.store);
    }
  });
  return (
    <div className="store-section-header">
      <div className="container">
        <div className="row">
          <div className="essential-heading">
            {edit ? (
              <div className="form ui ">
                <div className="ui left icon input field w-100">
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => {
                      setStore(e.target.value);
                    }}
                    placeholder="Your store Name"
                  />
                  <button className="btn btn-orange" onClick={saveStoreName}>
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <h1 className="heading_text">
                {" "}
                {storeName}{" "}
                <i className="fa fa-edit" onClick={() => setEdit(true)}></i>
              </h1>
            )}

            <div className="graph graph-sm">
              <img src="img/about/graphic.png" alt="Graph" title="Graph" />
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        {" "}
        <div className="col-xl-4 col-lg-4 col-md-12">
          {" "}
          <div className="card">
            {" "}
            <div className="card-body text-center">
              {" "}
              <h5>Total Orders</h5>
              {loading ? (
                <h2>
                  <CoverLoader />
                </h2>
              ) : (
                <>
                  <h2>{total}</h2>{" "}
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      setOrderStatus("");
                      if (currentTab !== "Orders") setCurrentTab("Orders");
                    }}
                  >
                    View All
                  </button>
                </>
              )}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-xl-4 col-lg-4 col-md-12 ">
          {" "}
          <div className="card">
            {" "}
            <div className="card-body text-center">
              {" "}
              <h5>Completed Orders</h5>
              {loading ? (
                <h2>
                  <CoverLoader />
                </h2>
              ) : (
                <>
                  {" "}
                  <h2> {completed}</h2>{" "}
                  <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => {
                      setOrderStatus("Delivered");
                      if (currentTab !== "Orders") setCurrentTab("Orders");
                    }}
                  >
                    View All
                  </button>
                </>
              )}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-xl-4 col-lg-4 col-md-12 ">
          {" "}
          <div className="card">
            {" "}
            <div className="card-body text-center">
              {" "}
              <h5>Pending Orders</h5>
              {loading ? (
                <h2>
                  <CoverLoader />
                </h2>
              ) : (
                <>
                  {" "}
                  <h2>{pending}</h2>{" "}
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => {
                      setOrderStatus("Placed");
                      if (currentTab !== "Orders") setCurrentTab("Orders");
                    }}
                  >
                    View All
                  </button>
                </>
              )}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default StoreHeader;

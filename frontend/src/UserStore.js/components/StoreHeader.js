import React, { useState } from "react";

const StoreHeader = ({ storeName }) => {
  const [store, setStore] = useState(storeName);
  const [edit, setEdit] = useState(false);
  const saveStoreName = () => {
    console.log(store);
    setEdit(false);
  };
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
                    value={store}
                    onChange={(e) => {
                      setStore(e.target.value);
                    }}
                  />
                  <button className="btn btn-orange" onClick={saveStoreName}>
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <h1 className="heading_text">
                {" "}
                {store}{" "}
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
              <h5>Total Orders</h5> <h2>834</h2>{" "}
              <button className="btn btn-outline-primary btn-sm">
                View All
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-xl-4 col-lg-4 col-md-12 ">
          {" "}
          <div className="card">
            {" "}
            <div className="card-body text-center">
              {" "}
              <h5>Completed Orders</h5> <h2> 238</h2>{" "}
              <button className="btn btn-outline-warning btn-sm">
                View All
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-xl-4 col-lg-4 col-md-12 ">
          {" "}
          <div className="card">
            {" "}
            <div className="card-body text-center">
              {" "}
              <h5>Pending Orders</h5> <h2>562</h2>{" "}
              <button className="btn btn-outline-success btn-sm">
                View All
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default StoreHeader;

import React from "react";
import SingleItem from "./SingleItem";

const LatestItems = () => {
  return (
    <div className="product-areaholder">
      <div className="container">
        <div className="row">
          <h2 className="text-left product-heading">
            {" "}
            Latest Arrived Grocery Item{" "}
          </h2>
        </div>
        <div className="row">
          <div className="items-on-sale">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestItems;

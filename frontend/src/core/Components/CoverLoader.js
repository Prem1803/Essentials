import React from "react";

const CoverLoader = ({ image }) => {
  return <div id="cover-spin" className={image && "product-img-fluid"}></div>;
};

export default CoverLoader;

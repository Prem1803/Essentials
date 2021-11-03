import React from "react";

const CoverLoader = ({ image }) => {
  return <div id="cover-spin" className={image && "img-fluid"}></div>;
};

export default CoverLoader;

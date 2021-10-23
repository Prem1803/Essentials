import React from "react";
import Footer from "../Components/Footer";
import Header from "./components/Header";
import ItemsOnSale from "./components/ItemsOnSale";
import LatestItems from "./components/LatestItems";

const Home = () => {
  return (
    <div className="grocino-home">
      <Header />
      <ItemsOnSale />
      <LatestItems />

      <Footer />
    </div>
  );
};

export default Home;

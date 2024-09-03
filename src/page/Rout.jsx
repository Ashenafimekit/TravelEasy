import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Fotter from "../component/Footer";
import Filter from "../component/Filter";
import RoutCards from "../component/RoutCards";

const Rout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Filter />
      <RoutCards />
      <Fotter />
    </div>
  );
};

export default Rout;

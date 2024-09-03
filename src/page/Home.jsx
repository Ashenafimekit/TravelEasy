import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Search from "../component/Search";
import CarouselT from "../component/CarouselT";
import Destination from "../component/Destination";
import Choose from "../component/Choose";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Search />
      <CarouselT />
      <Destination />
      <Choose />
      <Footer />
    </div>
  );
};

export default Home;

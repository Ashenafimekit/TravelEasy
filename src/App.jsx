import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Search from "./component/Search";
import Carousel from "./component/CarouselT";

const App = () => {
  return (
    <div className="h-full">
      <Header/>
      <Hero/>
      <Search/>
      <Carousel/>
    </div>
  );
};

export default App;

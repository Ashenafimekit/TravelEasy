import React from "react";
import { Carousel } from "antd";
import image1 from "../assets/highway.jpg";
import image2 from "../assets/mountains2.jpg";
import image3 from "../assets/road1.jpg";
import image4 from "../assets/road2.jpg";
import image5 from "../assets/winding.jpg";


const CarouselT = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 py-8">
      <div className="font-bold text-2xl">
        <h2>Explore Our Popular Routes</h2>
      </div>
      <div className="w-2/3 max-w-screen-lg overflow-hidden rounded-lg shadow-lg relative">
        <Carousel
          afterChange={onChange}
          autoplay
          arrows
          speed={3000}
          pauseOnHover
          centerMode
          centerPadding="100px"
          
        >
          <div className="flex items-center justify-center h-64 p-2">
            <img src={image1} alt="Highway" className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg " />
          </div>
          <div className="flex items-center justify-center h-64 p-2">
            <img src={image2} alt="Mountains" className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg " />
          </div>
          <div className="flex items-center justify-center h-64 p-2">
            <img src={image3} alt="Road 1" className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg " />
          </div>
          <div className="flex items-center justify-center h-64 p-2">
            <img src={image4} alt="Road 2" className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg " />
          </div>
          <div className="flex items-center justify-center h-64 p-2">
            <img src={image5} alt="Winding Road" className="carousel-item object-cover w-full h-full rounded-2xl shadow-lg " />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselT;


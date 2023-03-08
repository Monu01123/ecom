import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import img1 from "./first.png";
import img2 from "./second.jpg";
import img3 from "./third.jpg";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const data = [
  //   { MyImage },
  //   "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-10//w/1920/IMAGE-landscape-fill-1be0803e-a276-4a5f-941b-86962080ca5d-default_0.jpg?ts=1678092636085",
  //   "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-collection/subhome-xmedia-10//w/1920/IMAGE-landscape-fill-cf6c2ad1-d4da-40c4-b4da-c229a40c6100-default_0.jpg?ts=1678090101027",
  // ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;

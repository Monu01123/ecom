import React from "react";
import "./About.css";
import second from "./about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src={second} alt="Our Clothing Brand" className="about-us__image" />
      <h1 className="about-us__heading">Louis Vuitton</h1>
      <p className="about-us__text">
        Louis Vuitton is one of the largest international fashion companies. It
        belongs to Inditex, one of the world’s largest distribution groups. The
        customer is at the heart of our unique business model, which includes
        design, production, distribution and sales through our extensive retail
        network.
      </p>
    </div>
  );
};

export default AboutUs;

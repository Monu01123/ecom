import React from "react";
import "./Footer.scss";
import MyImage from "./payment_option.jpg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <NavLink to="/products/1" className="footer_items">
            <span>Women</span>
          </NavLink>
          <span>
            <NavLink to="/products/2" className="footer_items">
              Men
            </NavLink>
          </span>
          <span>
            <NavLink to="/products/1" className="footer_items">
              Shoes
            </NavLink>
          </span>
          <span>
            <NavLink to="/products/2" className="footer_items">
              New Arrivals
            </NavLink>
          </span>
          <span>
            <NavLink to="/products/1" className="footer_items">
              Accesories
            </NavLink>
          </span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Recommended Topics</h1>
          <span>Shipping & Delivery</span>
          <span>Payments & Pricing</span>
          <span>Returns, Refunds</span>
          <span>Managing Your Account</span>
          <span>More Help</span>
        </div>
        <div className="item">
          <h1>Some things you can do here</h1>
          <span>Yours Orders</span>
          <span>Payment setting</span>
          <span>your address</span>
          <span>talk to us</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Louis Vuitton</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={MyImage} alt="payment options" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

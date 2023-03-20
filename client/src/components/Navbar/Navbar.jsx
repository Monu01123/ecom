import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import MyImage from "./icon.png";
import Profile from "../Profile/Profile";
import Tooltip from "@mui/material/Tooltip";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import { NavLink } from "reactstrap";

const Navbar = () => {
  //for check cart is open or not
  const [open, setOpen] = useState(false);
  //for check profile is open or not
  const [open1, setOpen1] = useState(false);
  const products = useSelector((state) => state.cart.products);
  //for login logout button check
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={MyImage} alt="" className="flag" />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Louis Vuitton
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          {/* <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div> */}
          <div className="icons">
            {/* <SearchIcon /> */}

            {/* <FavoriteBorderOutlinedIcon /> */}
            <div className="cartIcon" onClick={() => setOpen1(!open1)}>
              <Tooltip title="Profile" placement="top-start" arrow>
                <PersonOutlineOutlinedIcon />
              </Tooltip>
            </div>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <Tooltip title="cart" placement="top-start" arrow>
                <ShoppingCartOutlinedIcon />
              </Tooltip>
              <span>{products.length} </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
      {open1 && <Profile />}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <NavLink
          to="https://m.facebook.com/215138065124/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon sx={{ color: "white" }} />
        </NavLink>

        <NavLink
          to="https://www.instagram.com/louisvuitton/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon sx={{ color: "white" }} />
        </NavLink>

        <NavLink
          to="https://twitter.com/louisvuitton_hq?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon sx={{ color: "white" }} />
        </NavLink>

        <NavLink
          to="https://eu.louisvuitton.com/eng-e1/homepage"
          target="_blank"
          rel="noreferrer"
        >
          <GoogleIcon sx={{ color: "white" }} />
        </NavLink>
        <NavLink
          to="https://www.pinterest.com/humphret/louis-vuitton/"
          target="_blank"
          rel="noreferrer"
        >
          <PinterestIcon sx={{ color: "white" }} />
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;

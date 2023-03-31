import { React, useState } from "react";
import "./Profile.css";
import profile from "./profile1.jpg";
import { userData } from "./../../pages/Login/helpers";
import { NavLink } from "reactstrap";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Tooltip from "@mui/material/Tooltip";
import LoginIcon from "@mui/icons-material/Login";

function Item() {
  const { username } = userData();
  if (username) {
    return (
      <>
        <LogoutOutlinedIcon style={{ color: "white" }} />;
      </>
    );
  } else {
    return <LoginIcon style={{ color: "white" }} />;
  }
}

const Profile = () => {
  const { username } = userData();
  //for login logout button check
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="profile_card">
      <img className="profileimage" src={profile} alt="Profile" />
      <div className="profile_details">
        <h2 className="user_name">{sessionStorage.getItem("username")}</h2>
        <address className="address">
          {sessionStorage.getItem("address")}
        </address>
      </div>
      <div isOpen={isOpen} navbar>
        <NavLink href="/logout">
          <Tooltip title="Profile" placement="top-start" arrow>
            <Item />
          </Tooltip>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;

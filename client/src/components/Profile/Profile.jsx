import profile from "./profile1.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { userData } from "./../../pages/Login/helpers";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [expanded, setExpanded] = useState(false);
  let [changeicon, setChangeicon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { username } = userData();

  function handleExpand() {
    setChangeicon(!changeicon);
    setExpanded(!expanded);
  }

  return (
    <div className="profile_card">
      <img className="profileimage" src={profile} alt="Profile" />
      <div isOpen={isOpen} className="toggle_login">
        <Link
          to="/login"
          style={{ cursor: "pointer" }}
          // onClick={localStorage.setItem("user", "")}
        >
          {username ? (
            <Tooltip title="Logout" placement="top-start" arrow>
              <LoginIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Logout" placement="top-start" arrow>
              <LogoutOutlinedIcon />
            </Tooltip>
          )}
        </Link>
      </div>
      {changeicon && (
        <h3
          className="user_name"
          style={{
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          }}
        >
          {sessionStorage.getItem("username")}
          {username}
        </h3>
      )}

      <div className="profile_expand_button">
        <span onClick={handleExpand} className="show_details">
          {changeicon ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </span>
      </div>
      {expanded && (
        <div className="details">
          <div className="DetailItem">
            <h1>
              <b
                style={{
                  fontFamily:
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}
              >
                {username}
              </b>
            </h1>
          </div>
          <div className="DetailItem">
            <b> Address : </b>
            <br />
            <small>
              <address>{sessionStorage.getItem("address")}</address>
            </small>
          </div>
          <div className="DetailItem">
            <b> Email : </b>
            <br />
            <small>
              <em>{sessionStorage.getItem("email")}</em>
            </small>
          </div>
          <div className="DetailItem">
            <b> Mobile No : </b> <br />
            <small>{sessionStorage.getItem("mobile_number")}</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

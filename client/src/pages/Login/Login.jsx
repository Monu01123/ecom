import React, { useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { storeUser } from "./helpers";
import "./Login.css";
import { NavLink } from "react-router-dom";

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          // toast.success("Logged in successfully!", {
          //   hideProgressBar: true,
          // });
          window.alert("success");
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      // toast.error(error.message, {
      //   hideProgressBar: true,
      // });
      window.alert("alert");
    }
  };

  return (
    <div className="main_login_page">
      <div className="login_container">
        <form>
          <h4>LOG IN TO YOUR ACCOUNT</h4>
          <input
            type="email"
            name="identifier"
            value={user.identifier}
            onChange={handleChange}
            placeholder="E-MAIL"
            className="inp"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            className="inp"
          />
          <button type="button" onClick={handleLogin} className="login_button">
            LOG IN
          </button>
        </form>
      </div>
      {/*--------registration navlink button---------*/}
      <div className="Register_container">
        <h4>NEED AN ACCOUNT?</h4>
        <NavLink to="/registration">
          <button className="reg_link">REGISTER</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;

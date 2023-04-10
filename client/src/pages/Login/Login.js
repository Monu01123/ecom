import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { storeUser } from "./helpers";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
const initialUser = { password: "", identifier: "" };

const Login = () => {
  // const [email, setEmail] = useState("");
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    let email = user.identifier;
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Login success", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
          setUser(initialUser);
          setTimeout(function () {
            navigate("/");
          }, 1000);
        }
      }
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.status === 401 || !data) {
        console.log("error");
      } else {
        console.log("Email sent");
      }
    } catch (error) {
      toast.error("Login error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
    dispatch(resetCart());
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
            autocomplete="off"
            required
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            className="inp"
            autocomplete="off"
            required
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

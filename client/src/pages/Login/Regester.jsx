import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const initialUser = { email: "", password: "", username: "" };
const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const [pass, setpass] = useState("");
  const [num, setnum] = useState("");

  const handleInputChange = (event) => {
    setpass(event.target.value);
    setnum(event.target.value);
  };
  const handleNumChange = (event) => {
    setnum(event.target.value);
  };

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          // toast.success("Registered successfully!", {
          //   hideProgressBar: true,
          // });
          window.alert("success");
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      // toast.error(error.message, {
      //   hideProgressBar: true,
      // });
      window.alert("alert");
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className="main_login_page reg_form">
      <div className="login_container register_form">
        <form>
          <h4>LOG IN TO YOUR ACCOUNT</h4>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder="NAME"
            className="inp"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            placeholder="E-MAIL"
            className="inp"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
            placeholder="PASSWORD"
            className="inp"
          />
          <input
            type="text"
            name="ADDRESS"
            value={pass}
            onChange={handleInputChange}
            placeholder="ADDRESS"
            className="inp"
          />
          <input
            type="number"
            name="telephone"
            value={num}
            onChange={handleNumChange}
            placeholder="+91 TELEPHONE"
            className="inp"
          />
          <button color="primary" onClick={signUp} className="login_button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

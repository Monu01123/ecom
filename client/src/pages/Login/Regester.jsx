import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialUser = { email: "", password: "", username: "" };
const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const [address, setaddress] = useState("");
  const [num, setnum] = useState("");

  const handleInputChange = (event) => {
    setaddress(event.target.value);
    setnum(event.target.value);
  };
  const handleNumChange = (event) => {
    setnum(event.target.value);
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("address", address);
          toast.success("You are registered", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });

          setTimeout(function () {
            navigate("/login");
          }, 1000);
        }
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
        <form method="get" onClick={signUp}>
          <h4>LOG IN TO YOUR ACCOUNT</h4>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder="NAME"
            className="inp"
            autocomplete="off"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            placeholder="E-MAIL"
            className="inp"
            autocomplete="off"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
            placeholder="PASSWORD"
            className="inp"
            autocomplete="off"
          />
          <input
            type="text"
            name="ADDRESS"
            value={address}
            onChange={handleInputChange}
            placeholder="ADDRESS"
            className="inp"
            autocomplete="off"
          />
          <input
            type="number"
            name="telephone"
            value={num}
            onChange={handleNumChange}
            placeholder="+91 TELEPHONE"
            className="inp"
            autocomplete="off"
          />
          <button color="primary" className="login_button">
            Sign up
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Registration;

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const initialUser = { email: "", password: "", username: "" };
// const Registration = () => {
//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();
//   const [address, setaddress] = useState("");
//   const [num, setnum] = useState("");

//   const handleInputChange = (event) => {
//     setaddress(event.target.value);
//     setnum(event.target.value);
//   };
//   const handleNumChange = (event) => {
//     setnum(event.target.value);
//   };

//   const signUp = async (event) => {
//     event.preventDefault();
//     try {
//       const url = `http://localhost:1337/api/auth/local/register`;
//       if (user.username && user.email && user.password) {
//         const res = await axios.post(url, user);
//         if (!!res) {
//           window.alert("success");
//           setUser(initialUser);
//           navigate("/login");
//           sessionStorage.setItem("username", user.username);
//           sessionStorage.setItem("address", address);
//         }
//       }
//     } catch (error) {
//       window.alert("alert");
//     }
//   };

//   const handleUserChange = ({ target }) => {
//     const { name, value } = target;
//     setUser((currentUser) => ({
//       ...currentUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="main_login_page reg_form">
//       <div className="login_container register_form">
//         <form>
//           <h4>LOG IN TO YOUR ACCOUNT</h4>
//           <input
//             type="text"
//             name="username"
//             value={user.username}
//             onChange={handleUserChange}
//             placeholder="NAME"
//             className="inp"
//             autocomplete="off"
//           />
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleUserChange}
//             placeholder="E-MAIL"
//             className="inp"
//             autocomplete="off"
//           />
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleUserChange}
//             placeholder="PASSWORD"
//             className="inp"
//             autocomplete="off"
//           />
//           <input
//             type="text"
//             name="ADDRESS"
//             value={address}
//             onChange={handleInputChange}
//             placeholder="ADDRESS"
//             className="inp"
//             autocomplete="off"
//           />
//           <input
//             type="number"
//             name="telephone"
//             value={num}
//             onChange={handleNumChange}
//             placeholder="+91 TELEPHONE"
//             className="inp"
//             autocomplete="off"
//           />
//           <button color="primary" onClick={signUp} className="login_button">
//             Sign up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

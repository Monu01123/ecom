import React, { useState, useRef } from "react";
import "./Contact_Us.css"; // import your css file
import emailjs from "@emailjs/browser";
import CancelIcon from "@mui/icons-material/Cancel";
import { pink } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zie9fbf",
        "template_32exq8l",
        form.current,
        "Yy_BxydS-hmZUn5rk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 500);
            }),
            {
              pending: "message sending",
              success: "message sent",
              error: "error received!",
            }
          );
          setShowForm(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="contact-form">
      <div className="contact-first-div">
        <div className="contact-second-div">
          <h3>EMAIL US</h3>
          <p>Our advisors will be delighted to answer your questions</p>
          <button
            className="open-form-button"
            onClick={() => setShowForm(true)}
          >
            Contact Us
          </button>
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>

      {showForm && (
        <div className="form_overlay">
          <div className="form_popup">
            <button className="pop_up_close" onClick={() => setShowForm(false)}>
              <CancelIcon sx={{ color: pink[500] }} />
            </button>
            <br />
            <br />
            <form ref={form} onSubmit={sendEmail} className="form_pop_up">
              <h2 className="pop_up_heading">Contact Us</h2>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                required
              ></textarea>
              <input type="submit" value="Send" id="pop_up_submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;

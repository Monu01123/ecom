import React, { useState, useRef } from "react";
import "./Contact_Us.css"; // import your css file
import emailjs from "@emailjs/browser";
import shopy from "./shopy.jpg";
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
        "service_6bootbp",
        "template_jgfkcuf",
        form.current,
        "TDScN8GqxXd0UPQNJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast("Wow so easy!");
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
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-popup">
            <div className="shopy_image">
              <img src={shopy} alt="" />
            </div>
            <div className="contact_form">
              <button
                className="close-form-button"
                onClick={() => setShowForm(false)}
              >
                <CancelIcon sx={{ color: pink[500] }} />
              </button>
              <br />
              <br />
              <h2>Contact Us</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="user_email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <input type="submit" value="Send" id="contact_submit_btn" />
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;

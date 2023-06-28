import React from "react";
import "./contact.scss";

import {
  FaGithubSquare,
  FaLinkedin,
  FaLink,
  FaFacebookSquare,
} from "react-icons/fa";
import { notify_success, notify_warning } from "../../utils/notifications";

const Contact = () => {
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      if (isValidEmail(event.target.value)) {
        notify_success("Thanks! we will get back to you..");
        event.target.value = "";
      } else notify_warning("Not a valid email..");
    }
  };

  return (
    <div className="contact_container">
      <div className="contact_info">
        <p>Our newsletter</p>
        <div className="contact_input">
          <input
            type="email"
            placeholder="Email here.."
            onKeyDown={(e) => handleSubmit(e)}
          />
        </div>
      </div>
      <div className="contact_icons">
        <p>Be in touch with us</p>
        <div className="contact_icons_conatiner">
          <FaGithubSquare className="contact_icon" />
          <FaLinkedin className="contact_icon" />
          <FaLink className="contact_icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

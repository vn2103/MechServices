import React from "react";
import "./social.css";

const Social = () => {
  return (
    <div className="social">
      <h2>Join the Conversation</h2>
      <div className="ico">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/mech_help_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=9270199836&text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/mechhelp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/p/mech_help_-100091437937415"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="tel:+919270199836"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i class="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;

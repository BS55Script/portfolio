import React from "react";
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaAward } from "react-icons/fa";

const contactDetails = [
  { label: "Email",
    value: "bsah5882@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=bsah5882@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "LinkedIn",
    value: "Bhawani Prasad Sah",
    link: "https://www.linkedin.com/in/bhawani-prasad-sah-b9020a300/",
    icon:<FaLinkedin />,
  },
  {
    label: "Credly",
    value: "",
    link: "https://www.credly.com/users/bhawani-prasad-sah",
    icon: <FaAward />,
  },
  {
    label: "GitHub",
    value: "github.com",
    link: "https://github.com/BS55Script",
    icon: <FaGithub />,
  },
];

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-intro">
          Whether you want to connect professionally or just say hello, feel free to reach out!
        </p>
        <div className="contact-list">
          {contactDetails.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="contact-item"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-card">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-info">
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Bhawani Prasad Sah. All rights reserved.
      </footer>
    </>
  );
};

export default Contact;

import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>MODERN LIFESTYLE STORE</h2>
          </div>
          <div className="footer-info">
            <div className="footer-section">
              <h3>Office</h3>
              <p>Cairo , Egypt</p>
              <p>Tel: +201143607452</p>
              <p>Email: mai.mo.alii3@gmail.com</p>
            </div>
            <div className="footer-section">
              <h3>Business hours</h3>
              <p>Monday - Friday: 9am – 6pm</p>
              <p>Saturday: 9am - 12pm</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Get social</p>
          <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

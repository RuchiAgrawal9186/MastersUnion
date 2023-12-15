import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div style={{ display: "flex" }}>
            <a href="#" className="brand">
              <img src="./images/Group 4308.svg" alt="" />{" "}
            </a>
            <h2>Resume.AI</h2>
          </div>

          <div style={{ display: "flex" }}>
            <div className="line"></div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
            </ul>
          </div>

          <div style={{ display: "flex" }}>
            <div className="line"></div>
            <ul>
              <li>Testimonials</li>
              <li>Clients</li>
            </ul>
          </div>

          <div style={{ display: "flex" }}>
            <div className="line"></div>
            <ul>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="horizonatalline"></div>

        <div className="bottom">
          <div>Copyright @ 2023 masters’ union</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
          <div>Cookie Policy</div>

          <div className="icons">
            <div className="circle">
              <img src="./images/facebook logo.svg" alt="" />
            </div>
            <div className="circle">
              <img src="./images/Twitter logo.png" alt="" />
            </div>
            <div className="circle">
              <img src="./images/linkedin logo.svg" alt="" />
            </div>
            <div className="circle">
              <img src="./images/instagram logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

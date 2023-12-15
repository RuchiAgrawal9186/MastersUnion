import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("show");
  };
  return (
    <>
      <nav>
        <div className="container">
          <div style={{ display: "flex" }}>
            <a href="#" className="brand">
              <img src="./images/Group 4308.svg" alt="" />{" "}
            </a>
            <h2>Resume.AI</h2>
          </div>

          <ul className="nav-menu" ref={navRef}>
            <li className="login">
              <a href="/login">Sign In</a>
            </li>
            <li className="signup">
              <a href="/signup">Create my resume</a>
            </li>

            <div className="close_btn" onClick={showNavbar}>
              <i className="fa-solid fa-xmark fa-2xl"></i>
              {/* <span className='matirial-symbol-outlined'>close</span> */}
            </div>
          </ul>
        </div>

        <div className="btn_toggle" onClick={showNavbar}>
          <i className="fa-solid fa-bars fa-2xl"></i>
          {/* <span className='material-symbols-sharp'>sort</span> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

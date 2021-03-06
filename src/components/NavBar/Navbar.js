import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "../Button/Button";
import alakhe from "../../assets/images/alakhe.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 600) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <p onClick={closeMobileMenu}>ALAKHE</p>
            <img
              src={alakhe}
              alt="alakheLogo"
              style={{ width: "60px", height: "50px" }}
              onClick={closeMobileMenu}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                DONATE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">DONATE</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

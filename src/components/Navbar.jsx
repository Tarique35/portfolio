import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div>
      <nav
        className={
          scrolled
            ? "scrolled navbar navbar-expand-lg"
            : "navbar navbar-expand-lg"
        }
        style={{display:"flex",justifyContent:"space-around"}}
      >
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a
                  href="#"
                  className={
                    activeLink === "home"
                      ? "active nav-link navbar-link"
                      : "nav-link navbar-link"
                  }
                  onClick={() => onUpdateLink("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={
                    activeLink === "skills"
                      ? "active nav-link navbar-link"
                      : "nav-link navbar-link"
                  }
                  onClick={() => onUpdateLink("skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={
                    activeLink === "projects"
                      ? "active nav-link navbar-link"
                      : "nav-link navbar-link"
                  }
                  onClick={() => onUpdateLink("projects")}
                >
                  Projects
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <button
                className="vvd"
                onClick={() => {
                  console.log("connect");
                }}
              >
                <span>Let's Connect</span>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

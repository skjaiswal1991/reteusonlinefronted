import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    color: "#F15B2A",
  };

  return (
    <div>
      <header className="header-with-topbar">
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-uppercase alt-font d-flex align-items-center justify-content-center justify-content-md-start">
                <a
                  href="tel:1234567890"
                  className="text-white"
                  title="Call us 123-456-7890"
                >
                  Call us 123-456-7890
                </a>
                <div className="separator-line"></div>
                <a
                  href="mailto:info@RateUsOnline.com"
                  className="text-white"
                  title="no-reply@domain.com"
                >
                  info@RateUsOnline.com
                </a>
              </div>
              <div className="col-md-6 d-none d-md-flex align-items-center justify-content-end">
                <div className="icon-social-topbar">
                  <a
                    href="#"
                    title="Facebook"
                    target="_blank"
                    className="text-white"
                  >
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a
                    href="#"
                    title="Twitter"
                    target="_blank"
                    className="text-white"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    target="_blank"
                    className="text-white"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-xl navbar-dark">
              <a className="navbar-brand" href="#">
                <img src="/images/logo.png" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContentXL"
                aria-controls="navbarSupportedContentXL"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContentXL"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link alt-font" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle alt-font"
                      href="#"
                      id="navbarDropdownXL"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Articles
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownXL"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Videos
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle alt-font"
                      href="#"
                      id="navbarDropdownXL"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Business Directory
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownXL"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link alt-font" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link alt-font" href="#">
                      Welcome back Abhi
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

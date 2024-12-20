import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg desktop-navbar">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">
            <img src="/images/logomymanas 1.png" alt="logo" />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to="/">
                  About Us
                </NavLink>
              </li>

              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </NavLink>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  News & Events
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/">
                  Contact Us
                </NavLink>
              </li>
              <button className="custom-btn">
                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Donate
                  </NavLink>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar fixed-top mobile-navbar">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            data-aos="fade-right" // Fade in as you scroll
            data-aos-duration="1500"
            title="logo"
          >
            <img src="/images/logomymanas 1.png" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-aos="fade-left" // Fade in as you scroll
            data-aos-duration="1500"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <NavLink
                className="navbar-brand"
                to="/"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
                title="logo"
              >
                <img src="/images/logomymanas 1.png" alt="logo" />
              </NavLink>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <NavLink class="nav-link" aria-current="page" to="/">
                    About Us
                  </NavLink>
                </li>

                <li class="nav-item dropdown">
                  <NavLink
                    class="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Education
                  </NavLink>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="/">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    News & Events
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/">
                    Contact Us
                  </NavLink>
                </li>
                <button className="custom-btn">
                  <li class="nav-item">
                    <NavLink class="nav-link" to="/">
                      Donate
                    </NavLink>
                  </li>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

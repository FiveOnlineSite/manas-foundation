import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-3 col-6">
            <NavLink className="navbar-brand" to="/">
              <img src="/images/logomymanas 2.png" alt="logo" />
            </NavLink>
          </div>
          <div className="col-lg-6 d-flex justify-content-end col-6">
            <div className="social-media">
              <NavLink className="navbar-item" to="/">
                <img
                  src="/images/icons/ic_baseline-facebook.png"
                  alt="social"
                />
              </NavLink>

              <NavLink className="navbar-item" to="/">
                <img
                  src="/images/icons/ph_instagram-logo-fill.png"
                  alt="social"
                />
              </NavLink>

              <NavLink className="navbar-item" to="/">
                <img
                  src="/images/icons/entypo-social_linkedin-with-circle.png"
                  alt="social"
                />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="row copyright-row">
          <p>
            © COPYRIGHT My Manas Foundation 2020. A 501(c)(3) Nonprofit
            Organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

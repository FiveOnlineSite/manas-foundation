import React from "react";
import { NavLink } from "react-router-dom";

const Difference = () => {
  return (
    <section className="difference-section">
      <div className="container">
        <div className="support-text-div" data-aos="fade-left">
          <h2 className="extra-big-text">Start making a difference!</h2>

          <img
            src="/images/icons/dharma-white-logo (2) 1.png"
            alt="logo"
            className="donate-img"
          />
          <div className="donate-para">
            <button className="custom-btn bridge-btn">
              <NavLink className="nav-link" to="/">
                Donate Now
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;

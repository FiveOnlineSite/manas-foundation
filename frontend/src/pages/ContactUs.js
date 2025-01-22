import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <Layout>
      <section className="banner contact-banner">
        <div className="container-fluid">
          <div className="banner-text">
            <h1
              className="banner-title black-text wow"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              Affordable education for life, today.
            </h1>

            <p
              className="paragraph wow black-text"
              data-aos="fade-up" // Fade in as you scroll
              data-aos-duration="1500"
            >
              We promote equality and curiosity mindsets through direct and
              indirect assistance in education, for children seeking quality
              teaching and personal growth.
            </p>
            <NavLink to="/">
              <button className="custom-btn white-btn border-btn wow">
                <li className="nav-link ">Explore</li>
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;

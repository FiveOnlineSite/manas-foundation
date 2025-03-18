import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/A7402577 1.png" alt="Group 8126" />
          <div className="banner-text about-banner-text contact-banner-text">
            <h1
              className="banner-title black-text wow black-text"
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

      <section className="contact-form">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-9">
                <h6 className="section-subtitle">Get Started</h6>

                <h2 className="section-title">
                  Get in touch with us. <br /> We're here to assist you.
                </h2>
              </div>
              <div className="col-lg-3 d-flex justify-content-lg-end justify-content-start mb-lg-0 mb-5">
                <ul className="contact-links">
                  <li>
                    <a href="#">
                      <img src="/images/icons/fb.png" alt="fb" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/icons/insta.png" alt="insta" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/icons/twitter.png" alt="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="get-started-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label for="full-name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="full-name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label for="phone-number" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone-number"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label for="email-address" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email-address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label for="email-address" className="form-label">
                          Inquiry Type
                        </label>
                        <select className="form-select">
                          <option selected disabled>
                            Select Inquiry Type
                          </option>
                          <option value="Manas Academy">
                            New Admission – Manas Academy
                          </option>
                          <option value="Vidhya Vanam">
                            New Admission – Vidhya Vanam
                          </option>
                          <option value="Scholarships / Financial Aid">
                            Scholarships / Financial Aid
                          </option>
                          <option value="Employment Opportunities">
                            Employment Opportunities
                          </option>
                          <option value="Vendor / Supplier Opportunities">
                            Vendor / Supplier Opportunities
                          </option>
                          <option value="Volunteer Opportunities">
                            Volunteer Opportunities
                          </option>
                          <option value="Want to Donate">Want to Donate</option>
                          <option value="General Information Request">
                            General Information Request
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <label for="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          rows="2"
                          className="form-control"
                          id="message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <button className="custom-btn bridge-btn">
                          <NavLink className="nav-link" to="/">
                            LEAVE US A MESSAGE
                          </NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="section-subtitle">Contact Info</h6>

              <h2 className="section-title">
                We are always happy to assist you
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 mt-lg-0 mt-5">
                  <div className="contact-div">
                    <h6>India</h6> <span></span>
                    <h6>
                      <a href="mailto:Info.manasacademy@mymanas.org">
                        Info.manasacademy@mymanas.org
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br /> Bidwal-Shergarh Road, Tehsil Badnawar,
                      Dist. Dhar, Dhar, MP 454665 India
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1 offset-0 mt-lg-0 mt-5">
                  <div className="contact-div">
                    <h6>US</h6> <span></span>
                    <h6>
                      <a href="mailto:Info.manasacademy@mymanas.org">
                        Info.manasacademy@mymanas.org
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br />
                      2213 Nantucket Dr. Unit C, Houston, TX 77057
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="contact-div">
                  <h6>
                    For Jobs, send resume to{" "}
                    <a href="mailto:hr.manasacademy@mymanas.org">
                      hr.manasacademy@mymanas.org
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mt-5">
            <div className="contact-div d-flex align-items-center justify-content-center">
              <h6>
                For Admission and Additional Information, send us a message or
                call __________:
              </h6>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;

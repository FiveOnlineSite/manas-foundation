import React from "react";
import { NavLink } from "react-router-dom";

const ReachOut = () => {
  return (
    <section className="get-started">
      <div className="container">
        <div
          className="col-lg-12 wow"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 order-lg-1 order-2 mt-xl-0 mt-5">
              <h6 className="section-subtitle">GET STARTED</h6>

              <h2 className="section-title w-55">
                Reach out! We’d love to talk to you.
              </h2>

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
                          <option value="Want to Donate">
                          Want to Donate
                          </option>
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
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="bridging-img">
                <img
                  src="/images/banner/Vector 6.png"
                  alt="vector-6"
                  className="bridging-img1"
                />
                <div className="bridging-img2">
                  <img
                    src="/images/banner/two-students-studying-together-online-with-laptop-park.png"
                    alt="briding-img"
                  />
                </div>

                <img
                  src="/images/banner/Vector 7.png"
                  alt="vector-7"
                  className="bridging-img3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;

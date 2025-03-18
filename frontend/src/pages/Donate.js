import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import Testimonials from "../components/Testimonials";
import Achivements from "../components/Achivements";

const Donate = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img
            src="/images/banner/A7402508.jpg"
            alt="scope-banner"
            className="about-img"
          />
          <div className="about-banner-text">
            <h1 className="banner-title mt-5">Support Us</h1>
          </div>
        </div>
      </section>

      <section className="inspiring-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="section-title text-start p-0">
                  You can make a difference. Invest in the world’s future
                  leaders, today.
                </h4>
              </div>
              <div className="col-lg-6">
                <p className="paragraph bridge-para light-paragraph mt-0">
                  With your generous donations we are able to help students
                  foster a sense of equality and curiosity that can help them
                  develop their talents, build their self esteem, and set
                  themselves on the road to success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="half-img-section about-half-img">
        <Difference />
      </section>
      <section className="bg-img-row">
        <div className="container">
          <div className="values-div">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  {/* <h6 className="section-subtitle">Lorem Ipsum</h6> */}

                  <h2 className="section-title">
                    What can your contribution do?
                  </h2>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contribution-points p-2">
                        <h1 className="section-title">$50 USD</h1>
                        <p className="paragraph bridge-para">
                          Can provide a student with basic school materials for
                          a year, such as notebooks, pencils, among others.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contribution-points p-2">
                        <h1 className="section-title">$500 USD</h1>
                        <p className="paragraph bridge-para">
                          Can help a teacher to enhance their pedagogical skills
                          through training in integrated learning concepts.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contribution-points p-2">
                        <h1 className="section-title">$1500 USD</h1>
                        <p className="paragraph bridge-para">
                          Can help us upgrade an entire classroom to an
                          integrated learning environment.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contribution-points p-2">
                        <h1 className="section-title">$2500 USD</h1>
                        <p className="paragraph bridge-para">
                          Can provide scholarship to a student for a year to
                          attend higher (college) education.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Achivements />

      <Testimonials />
    </Layout>
  );
};

export default Donate;

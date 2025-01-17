import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import Testimonials from "../components/Testimonials";

const Donate = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/scope-banner.png" alt="scope-banner" />
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
                <p className="paragraph bridge-para light-paragraph">
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
                  <h6 className="section-subtitle">Lorem Ipsum</h6>

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

      <section className="achivements-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h6 className="section-subtitle">ACHIEVEMENTS</h6>

              <h2 className="section-title">Lorem Ipsum Dolor set</h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6 mt-lg-0 mt-5">
                  <div className="achivements-div">
                    <img
                      src="/images/banner/Mask-Group-13.png"
                      alt="achivement-img"
                    />
                    <h4 className="banner-subtitle small-line-height text-start mt-4">
                      Manas Academy
                    </h4>
                    <p className="paragraph bridge-para">
                      The acquisition and development of Manas Academy in rural
                      Madhya Pradesh, India. The school is now serving +1,500
                      children from +80 villages.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5">
                  <div className="achivements-div">
                    <img
                      src="/images/banner/Group-8263.png"
                      alt="achivement-img"
                    />
                    <h4 className="banner-subtitle small-line-height text-start mt-4">
                      Google Non-profit Recognition
                    </h4>
                    <p className="paragraph bridge-para">
                      Because Google recognizes My Manas Foundation as a
                      non-profit educational services organization, My Manas
                      Institutes are able to use G Suite for Education for free.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <div className="achivements-div">
                    <img
                      src="/images/banner/Mask-Group-14-1.png"
                      alt="achivement-img"
                    />
                    <h4 className="banner-subtitle small-line-height text-start mt-4">
                      Technology Solutions for Everyone
                    </h4>
                    <p className="paragraph bridge-para">
                      Students in areas without access to computers or the
                      internet are able to use cell phones to participate in
                      online or virtual education they might not otherwise have
                      access to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <div className="achivements-div">
                    <img
                      src="/images/banner/opportunitiesmym.png"
                      alt="achivement-img"
                    />
                    <h4 className="banner-subtitle small-line-height text-start mt-4">
                      Enhancing Opportunities
                    </h4>
                    <p className="paragraph bridge-para">
                      In our first year we have implemented integrated learning
                      projects using our four pillars of education: knowledge,
                      skills, values, and mindset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </Layout>
  );
};

export default Donate;

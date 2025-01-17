import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";

const Institution = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/scope-banner.png" alt="scope-banner" />
          <div className="about-banner-text">
            <h1 className="banner-title mt-5">Institutions</h1>
          </div>
        </div>
      </section>

      <section className="inspiring-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="section-title text-start p-0">
                  Bringing new opportunities for youth
                </h4>
              </div>
              <div className="col-lg-6 offset-lg-1 offset-0">
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

      <section className="bridging-gap">
        <div className="container">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <h6 className="section-subtitle">Lorem Ipsum</h6>
                <h2 className="section-title">
                  Our proposed model includes four specific pillars:
                </h2>
              </div>
              <div
                className="col-lg-6 wow"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
              >
                <p className="paragraph bridge-para">
                  This model allows students to build holistic life skills, and
                  prepares them to overcome any situation that they encounter
                  with, using the best approach possible.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="pillars-div">
                  <div className="pillar-title d-flex justify-content-between">
                    <h2 className="section-title small-line-height p-0">
                      Knowledge
                    </h2>
                    <div>
                      <img
                        src="/images/icons/Group 8264.png"
                        alt="pillar-img"
                      />
                    </div>
                  </div>
                  <p className="paragraph bridge-para">
                    We will provide children with the best academic curriculum
                    in all subjects and technology to empower them with required
                    knowledge to continue their education for life.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pillars-div">
                  <div className="pillar-title d-flex justify-content-between">
                    <h2 className="section-title small-line-height p-0">
                      Skills
                    </h2>
                    <div>
                      <img
                        src="/images/icons/Group 8357.png"
                        alt="pillar-img"
                      />
                    </div>
                  </div>
                  <p className="paragraph bridge-para">
                    We will train children in skills, such as communication,
                    teamwork, critical thinking, and problem solving so that
                    they may effectively apply their knowledge from the
                    classroom to the real world.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pillars-div">
                  <div className="pillar-title d-flex justify-content-between">
                    <h2 className="section-title small-line-height p-0">
                      Values
                    </h2>
                    <div>
                      <img
                        src="/images/icons/Group 8358.png"
                        alt="pillar-img"
                      />
                    </div>
                  </div>
                  <p className="paragraph bridge-para">
                    We will teach children important values such as respect,
                    responsibility, and fairness so that they may ethically
                    apply the knowledge and skills they have gained in their
                    education.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pillars-div">
                  <div className="pillar-title d-flex justify-content-between">
                    <h2 className="section-title small-line-height p-0">
                      Mindset
                    </h2>
                    <div>
                      <img
                        src="/images/icons/Group 8356.png"
                        alt="pillar-img"
                      />
                    </div>
                  </div>
                  <p className="paragraph bridge-para">
                    We will promote positive mindsets in children that nurture
                    curiosity, growth, resilience, and empathy. This philosophy
                    will help these children continue to develop themselves,
                    their values, and help them succeed in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="institutions-section">
        <div className="container">
          <h6 className="section-subtitle">Our INSTITUTIONS</h6>
          <h2 className="section-title">Lorem ipsum dolor set</h2>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="institutions-div">
                  <img src="/images/banner/Layer 2.png" alt="institution-img" />
                  <p className="paragraph bridge-para mt-5">
                    Lorem ipsum dolor sit amet. Vel maiores corporis et quisquam
                    molestiae qui tenetur culpa et quam dolores aut voluptate
                    molestiae rem nobis deleniti. Lorem ipsum dolor sit amet.
                    Vel maiores corporis et quisquam molestiae qui tenetur culpa
                    et quam dolores aut
                  </p>

                  <button className="custom-btn bridge-btn my-3">
                    <NavLink
                      className="nav-link"
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      KNOW MORE
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="institutions-div">
                  <img src="/images/banner/Layer 2.png" alt="institution-img" />
                  <p className="paragraph bridge-para mt-5">
                    Lorem ipsum dolor sit amet. Vel maiores corporis et quisquam
                    molestiae qui tenetur culpa et quam dolores aut voluptate
                    molestiae rem nobis deleniti. Lorem ipsum dolor sit amet.
                    Vel maiores corporis et quisquam molestiae qui tenetur culpa
                    et quam dolores aut
                  </p>

                  <button className="custom-btn bridge-btn my-3">
                    <NavLink
                      className="nav-link"
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      KNOW MORE
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference />
    </Layout>
  );
};

export default Institution;

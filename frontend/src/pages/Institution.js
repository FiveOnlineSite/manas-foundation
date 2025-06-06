import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";

const Institution = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img
            src="/images/banner/KG Graduation 06.jpg"
            alt="scope-banner"
            className="about-img"
          />
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
              <div className="col-lg-6 offset-lg-1 offset-0 ">
                <p className="paragraph bridge-para light-paragraph pt-0 mt-0">
                  With your generous support we are able to help students foster
                  a sense of equality and curiosity that can help them develop
                  their talents, build their self esteem, and set themselves on
                  the road to success.
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
                {/* <h6 className="section-subtitle">Lorem Ipsum</h6> */}
                <h2 className="section-title">
                  Our model includes four specific pillars:
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
                  <p className="paragraph bridge-para pillars-para">
                    We provide children with the best academic curriculum in all
                    subjects and technology to empower them with required
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
                  <p className="paragraph bridge-para pillars-para">
                    We train children in skills, such as communication,Add
                    commentMore actions teamwork, critical thinking, and problem
                    solving so that they may effectively apply their knowledge
                    from the classroom to the real world.
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
                  <p className="paragraph bridge-para pillars-para">
                    We teach children important values such as respect,Add
                    commentMore actions responsibility, and fairness so that
                    they may ethically apply the knowledge and skills they have
                    gained in their education.
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
                  <p className="paragraph bridge-para pillars-para">
                    We promote positive mindsets in children that nurtureAdd
                    commentMore actions curiosity, growth, resilience, and
                    empathy. This philosophy will help these children continue
                    to develop themselves, their values, and help them succeed
                    in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="institutions-section">
        <div className="container">
          {/* <h6 className="section-subtitle">Our INSTITUTIONS</h6> */}
          <h2 className="section-title">Our Institutions</h2>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="institutions-div">
                  <img src="/images/banner/academy.png" alt="institution-img" />
                  <p className="paragraph bridge-para mt-2">
                    A My Manas Society Institution
                  </p>
                  <p className="paragraph bridge-para mt-2">
                    A CBSE English Medium school serving over 90 villages in the
                    Badnawar and Sardarpur Tehsils in Dhar District, MP-India.
                    With the best infrastructure and qualified staff, our
                    emphasis is on well-rounded education that involves
                    physical, mental, moral, and spiritual aspects of learning,
                    which improves our students’ critical thinking, athletic
                    ability, and self-discipline.
                  </p>

                  <button className="custom-btn bridge-btn bridge-btn-one my-3">
                    <NavLink
                      className="nav-link"
                      to="/academy"
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      KNOW MORE
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="institutions-div">
                  <img
                    src="/images/banner/academy-two.png"
                    height="170px"
                    alt="institution-img"
                  />
                  <p className="paragraph bridge-para mt-2">
                    A Manas Sanctuary Foundation Institution
                  </p>
                  <p className="paragraph bridge-para mt-2">
                    <strong>—COMING SOON—</strong> <br />
                    An Integrated Learning Environment at Manas Sanctuary,
                    India. At Manas Sanctuary, Intellectual, Emotional and
                    Social educational programs will be provided in an
                    environment that fosters continuous learning to develop a
                    growth mindset. With open indoor and outdoor learning spaces
                    in over a 10-acre property away from city noises and
                    pollution, the Sanctuary vision includes housing for
                    students with teacher families on-site.
                  </p>

                  <button className="custom-btn bridge-btn bridge-btn-one my-3">
                    <NavLink
                      className="nav-link"
                      to="/vidhya-vanam"
                      // onClick={() => window.scrollTo(0, 0)}
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

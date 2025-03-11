import React from "react";
import Layout from "../components/Layout";
import Difference from "../components/Difference";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img
            src="/images/banner/diverse-kids-reading-books.png"
            alt="about-banner"
            className="about-img"
          />
          <div className="about-banner-text banner-text">
            <h1 className="banner-title">Academic Excellence Within Reach</h1>
          </div>
        </div>
      </section>

      <section className="inspiring-section">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <h4 className="small-title text-start px-0 py-3">
                  Inspiring excellence through growth and responsibility.
                </h4>
              </div>
              <div className="col-lg-4">
                <p className="paragraph bridge-para light-paragraph">
                  Promoting mindsets of equality and curiosity so that every
                  student may discover and develop the talent, discipline, and
                  self-esteem of fearless success.
                </p>
              </div>
              <div className="col-lg-4">
                <p className="paragraph bridge-para light-paragraph">
                  This non-profit provides direct and indirect assistance in
                  education and other related services to children in need of
                  higher education and personal growth.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <div className="director">
                      <div className="director-img">
                        <img
                          src="/images/icons/Group 8236.png"
                          alt="director-img"
                        />
                      </div>
                      <div className="director-content">
                        <h6>SRI VALLERU</h6>
                        <p>Board of director</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-lg-center justify-content-start">
                    <div>
                      <img src="/images/icons/signature.png" alt="signature" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference />

      <section className="half-img-section about-half-img">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row justify-content-center">
                <div className="half-img-text about-half-img-text p-lg-5 mb-0">
                  <h2
                    className="section-title text-center wow w-lg-50 w-100 p-1"
                    data-aos="zoom-in" // Fade in as you scroll
                    data-aos-duration="1500"
                  >
                    An inspiring vision to uplift youth.
                  </h2>

                  {/* <p className="paragraph bridge-para text-center">
                  Providing education that’s accessible to rural communities and opening learning opportunities that integrate top-tier education with holistic life skills.
                  </p> */}

                  <button className="custom-btn bridge-btn read-btn">
                    <NavLink className="nav-link" to="/">
                      GET STARTED
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-img-row">
        <div className="container">
          {/* <h6 className="section-subtitle"></h6> */}

          <h2 className="section-title">
            Unbreakable values and an unwavering commitment to the progress of
            all children.
          </h2>

          <p className="paragraph bridge-para">
          Providing education that’s accessible to rural communities and opening learning opportunities that integrate top-tier education with holistic life skills.
          </p>

          <div className="values-div">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img src="/images/icons/respect 1.png" alt="value-img" />
                      <h5>Respect</h5>
                    </div>

                    <p>
                      We believe in creating a safe and accessible learning
                      environment where respect, honesty, and tolerance are
                      fostered with compassion.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img
                        src="/images/icons/collaborate 1.png"
                        alt="value-img"
                      />
                      <h5>Collaboration</h5>
                    </div>

                    <p>
                    We believe teamwork and collaboration are essential for success in education and life.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img
                        src="/images/icons/expectation 1.png"
                        alt="value-img"
                      />
                      <h5>Expectations</h5>
                    </div>

                    <p>
                      We believe that maintaining rigorous standards and high
                      expectations for all students are key to excellence and
                      lifelong learning.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img
                        src="/images/icons/responsibility 1.png"
                        alt="value-img"
                      />
                      <h5>Responsibility</h5>
                    </div>

                    <p>
                    We encourage students to become independent thinkers who take ownership of their learning and grow into responsible global citizens.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img src="/images/icons/protest.png" alt="value-img" />
                      <h5>Equity</h5>
                    </div>

                    <p>
                    We are committed to providing every student with a balanced education that includes quality instruction, perseverance, tolerance, and inclusion.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title">
                      <img
                        src="/images/icons/confidence 1.png"
                        alt="value-img"
                      />
                      <h5>Pride</h5>
                    </div>

                    <p>
                      We believe in instilling a sense of pride in all of our
                      students, schools, and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inspiration-section">
        <h2 className="section-title text-center">Our Inspiration</h2>
        <div className="inspiration-div">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <img src="/images/banner/manas_valleru 1.png" alt="manas" />
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5">
                  <div className="beloved-text">
                    <h6 className="section-subtitle white-color">
                      the inspiration of our efforts.
                    </h6>

                    <h2 className="section-title white-color">
                      Our Beloved Manas
                    </h2>

                    <div className="inspiration-para">
                      <p>
                        Brilliance of his mind <br />
                        Shine without bind
                        <br />
                        His heart so pure
                        <br />
                        His smile so sure
                        <br />
                        Helping lives bloom
                        <br />
                        Always there to groom…
                      </p>

                      <p>
                        There’s no stopping now
                        <br />
                        The shine, the smile
                        <br />
                        The heart, the warmth
                        <br />
                        Forever spreading
                        <br />
                        To create a world
                        <br />
                        Where success has
                        <br />
                        No ending.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shaping-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right" // Fade in as you scroll
              data-aos-duration="1500"
            >
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
            <div className="col-lg-6">
              <div className="shaping-content bridging-text">
                {/* <h6 className="section-subtitle"></h6> */}

                <h2 className="section-title">Shaping future leaders.</h2>

                <p className="paragraph bridge-para">
                  You can give your children a bright future.
                  <br /> There are no extra costs for an opportunity
                  that is extraordinary.
                </p>

                {/* <div className="donate-para"> */}
                <button className="custom-btn bridge-btn">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    KNOW MORE
                  </NavLink>
                </button>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;

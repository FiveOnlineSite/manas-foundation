import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import AwardeesSlider from "../components/AwardeesSlider";

const Scholarship = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/scope-banner.png" alt="scope-banner" />
          <div className="about-banner-text">
            <h1 className="banner-title mt-5">Scholarships</h1>
          </div>
        </div>
      </section>

      <section className="assistance-section">
        <div className="container">
          <h4 className="small-title">
            Bringing new opportunities for youth through an education philosophy
            that fosters integral growth
          </h4>
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
                <h6 className="section-subtitle">LOREM IPSUM</h6>

                <h2 className="section-title w-100">
                  Our mission delivered in the United States
                </h2>

                <p className="paragraph bridge-para">
                  My Manas Foundation awards scholarships for higher education
                  institutions or vocational schools in the United States of
                  America for students living in the Houston and Greater
                  Houston areas.
                </p>

                <button className="custom-btn bridge-btn">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    START APPLICATION PROCESS
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="container">
          <h6 className="section-subtitle">Timeline</h6>

          <h2 className="section-title">Application Process</h2>

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="application col-lg-3 col-md-6 col-12 ">
                  <div className="application-div">
                    <img src="/images/icons/calendar.png" alt="calender" />
                    <h5>15th February</h5>
                    <p>Online Application Opening</p>
                  </div>

                  <div>
                    <img
                      src="/images/icons/arrow-right-circle.png"
                      alt="arrow-right"
                    />
                  </div>
                </div>

                <div className="application col-lg-3 col-md-6 col-12 mt-md-0 mt-5">
                  <div className="application-div">
                    <img src="/images/icons/calendar.png" alt="calender" />
                    <h5>1st June</h5>
                    <p>Applcation Submission Deadline</p>
                  </div>

                  <div>
                    <img
                      src="/images/icons/arrow-right-circle.png"
                      alt="arrow-right"
                    />
                  </div>
                </div>

                <div className="application col-lg-3 col-md-6 col-12 mt-lg-0 mt-5">
                  <div className="application-div">
                    <img src="/images/icons/calendar.png" alt="calender" />
                    <h5>1st July</h5>
                    <p>Results List Publication</p>
                  </div>

                  <div>
                    <img
                      src="/images/icons/arrow-right-circle.png"
                      alt="arrow-right"
                    />
                  </div>
                </div>

                <div className="application col-lg-3 col-md-6 col-12 mt-lg-0 mt-5">
                  <div className="application-div">
                    <img src="/images/icons/calendar.png" alt="calender" />
                    <h5>1st August</h5>
                    <p>Deposits of Funds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <h6 className="section-subtitle">STEPS</h6>

          <h2 className="section-title">Lorem Ipsum set dolor</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="steps-div">
                    <h2 className="steps-no">1</h2>
                    <p className="paragraph bridge-para ps-4 mt-0 mb-4">
                      Click <a href="#">here</a> to complete the online
                      scholarship application through Google Forms
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="steps-div">
                    <h2 className="steps-no">2</h2>

                    <p className="paragraph bridge-para ps-4 mt-0 mb-4">
                      Attach and send your documentation to{" "}
                      <a href="mailto:scholarship.usa@mymanas.org">
                        scholarship.usa@mymanas.org
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="steps-div">
                    <h2 className="steps-no">3</h2>

                    <p className="paragraph bridge-para ps-4 mt-0 mb-4">
                      Check the results at
                      <a href="https://mymanas.org/"> https://mymanas.org/</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="documents-section">
        <div className="container">
          <h6 className="section-subtitle">Documents</h6>

          <h2 className="section-title">Lorem Ipsum set dolor</h2>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-7">
                <ul className="documents-div">
                  <li>
                    Application for Federal Student Aid (FAFSA) OR Student Aid
                    Report.
                  </li>
                  <li>
                    Your and your parents’ or guardians’ federal income tax
                    return used in the completion of the FAFSA.
                  </li>
                  <li>High School Transcript with Final Grades.</li>
                  <li>
                    A written essay outlining your need for a scholarship, your
                    educational plans and goals, and your embodiment of the
                    underdog spirit. This could include any life situations or
                    challenges you have overcome and any other information that
                    could affect your financial status or ability to continue
                    your education (500 words max).
                  </li>
                  <li>
                    One recommendation letter from an individual in the school
                    administration or education system.
                  </li>
                  <li>
                    One recommendation letter from an individual that is
                    otherwise not related to you.
                  </li>
                  <li>
                    Budget for preferred college (full cost of attending
                    college, room and board, travel, books, miscellaneous).
                  </li>
                  <li>
                    List of other scholarships currently receive or have
                    received in the past.
                  </li>
                  <li>
                    Letter of acceptance from college of choice when available.
                  </li>
                  <li>Official SAT or ACT reports. (Optional)</li>
                </ul>
              </div>
              <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
                <div>
                  <img
                    src="/images/banner/924c80318fdb786e2f3307a9666dc70a.png"
                    alt="document-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-img-row">
        <div className="container">
          <h6 className="section-subtitle">Lorem Ipsum</h6>

          <h2 className="section-title">
            Unbreakable values and an unwavering commitment to the progress of
            all children.
          </h2>

          <p className="paragraph bridge-para">
            Providing education that’s accessible to rural and low-income
            communities and opening learning opportunities that integrate
            top-tier education with holistic life skills.
          </p>

          <div className="values-div">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        The application must be submitted by the deadline to be
                        considered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        Documents must be submitted in PDF format.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        Unofficial Transcripts are acceptable with the initial
                        application.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        Official Sealed Transcripts from all high schools or
                        colleges attended are required upon scholarship
                        selection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start ">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        If a student receives a scholarship based on a perceived
                        4-year university cost, and the student opts to attend
                        community college or trade school, the award amount may
                        be adjusted accordingly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-value">
                    <div className="value-title align-items-start">
                      <img src="/images/icons/Group 8339.png" alt="value-img" />
                      <p className="ps-3 pt-2">
                        Scholarship amounts are determined by a variety of
                        factors including, but not limited to: academic success,
                        income, and tuition cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="awardess-section">
        <div className="container">
          <h6 className="section-subtitle">SCHOLARSHIP AWARDEES</h6>

          <h2 className="section-title">Lorem Ipsum Dolor Emet Sit</h2>
          <AwardeesSlider />
        </div>
      </section>

      <section className="goal-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="section-subtitle">LOREM IPSUM</h6>

              <h2 className="section-title">
                Our goal is to reach those who are most disadvantaged
              </h2>
            </div>
            <div className="col-lg-7">
              <p className="paragraph bridge-para">
                We give additional consideration to youth who demonstrate the
                traits of an underdog.
              </p>
              <p className="paragraph bridge-para">
                We give additional consideration to youth who demonstrate the
                traits of an underdog. An underdog is an individual that,
                despite facing challenges such as those of academic or financial
                caliber, still displays the tenacity to better themselves given
                the right opportunity and can still endeavor to succeed in life
                with the right support.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div>
                <img
                  src="/images/banner/joyful-schoolboy-with-heavy-backpack.png"
                  alt="goal-img"
                  className="w-auto w-sm-100"
                />
                <h4 className="banner-subtitle small-line-height text-start mt-4">
                  Show us how Committed you are
                </h4>
                <p className="paragraph bridge-para">
                  We encourage you to speak about your passions, goals, and the
                  challenges you face either academically or personally.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div>
                <img
                  src="/images/banner/smiling-students-looking-globe.png"
                  alt="goal-img"
                  className="w-auto w-sm-100"
                />

                <h4 className="banner-subtitle small-line-height text-start mt-4">
                  Grades are important, but not everything
                </h4>
                <p className="paragraph bridge-para">
                  We believe that knowledge is not only represented by how high
                  grades are, but also the student’s attitude towards others and
                  problem solving capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;

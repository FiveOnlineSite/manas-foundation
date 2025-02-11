import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import ReachOut from "../components/ReachOut";

const Scope = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/scope-banner.png" alt="scope-banner" />
          <div className="about-banner-text">
            <h5 className="banner-subtitle">EDUCATION</h5>
            <h1 className="banner-title">
              Intellectual and Emotional Learning
            </h1>
          </div>
        </div>
      </section>

      <section className="assistance-section">
        <div className="container">
          <h4 className="small-title">
            Assistance in higher education and personal growth to children with
            limited opportunities.
          </h4>
        </div>
      </section>

      <section className="funding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="section-subtitle">
                Funding High Quality Education
              </h6>

              <h2 className="section-title">
                Because all children have the right to education
              </h2>

              <div className="funding-img-div text-end pe-lg-5 pe-0">
                <img
                  src="/images/scope/group-young-children-running-playing-park.png"
                  className=" text-end"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <img
                src="/images/scope/school-boy-holding-delicious-apple.png"
                className="w-100 order-2 order-lg-1"
                alt=""
              />

              <div className="order-lg-2 order-1">
                <p className="paragraph bridge-para p-0 pt-2 ">
                  Scholarships are offered in the USA in partnership with
                  Scholarships America so young students can continue having the
                  best education available. The purpose is to design and deliver
                  students scholarship programs that meet their educational
                  needs and long-term professional objectives.
                </p>

                <button className="custom-btn bridge-btn">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Scholarships
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="enhancing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <h6 className="section-subtitle">LOREM IPSUM</h6> */}

              <h2 className="section-title">
                Enhancing Educational Institutions
              </h2>

              <p className="paragraph bridge-para p-0 pt-2">
                A network of schools located in rural India that share our
                integrated approach, lifting up children and allowing them to
                build holistic life skills through physical, mental, moral and
                spiritual aspects of learning.
                <br />
                This raises the level of thinking, knowledge skills, physical
                standards, discipline and scientific attitude of the students.
              </p>

              <button className="custom-btn bridge-btn">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Institutions
                </NavLink>
              </button>
            </div>

            <div className="col-lg-6 text-lg-end text-start">
              <div className="enhancing-img">
                <img
                  src="/images/school-children-dressed-uniform-have-fun-play-schoolyard.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference />

      <ReachOut />
    </Layout>
  );
};

export default Scope;

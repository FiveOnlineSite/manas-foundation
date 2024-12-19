import React from "react";
import Layout from "../components/Layout";
import SlickSlider from "../components/SlickSlider";
import { NavLink } from "react-router-dom";

const Home = () => {
  const homeBanner = [
    {
      image: "/images/slider/school-boy-holding-delicious-apple.png",
    },
    {
      video_thumbnail: "/images/slider/medium-shot-kids-playing-together.png",
      video: "/videos/3195394-uhd_3840_2160_25fps.mp4",
    },
    {
      video_thumbnail: "/images/slider/medium-shot-kids-playing-together.png",
      video: "/videos/3195394-uhd_3840_2160_25fps.mp4",
    },
    {
      video_thumbnail: "/images/slider/medium-shot-kids-playing-together.png",
      video: "/videos/3195394-uhd_3840_2160_25fps.mp4",
    },
  ];

  const homeBannerSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Layout>
        <section className="banner">
          <div className="container-fluid">
            <div className="left-img-div">
              <img
                className="left-img1"
                src="/images/banner/group-young-children-running-playing-park.png"
                alt="light-img"
              />
              <img
                className="left-img2"
                src="/images/banner/Vector 2.png"
                alt="light-img"
              />
              <img
                className="left-img3"
                src="/images/banner/medium-shot-friends-posing-together.png"
                alt="light-img"
              />
            </div>
            <div className="banner-text">
              <h1 className="banner-title">A Promising future begins here!</h1>

              <p>
                We promote equality and curiosity mindsets through direct and
                indirect assistance in education, for children seeking quality
                teaching and personal growth.
              </p>
              <NavLink to="/">
                <button className="custom-btn white-btn">
                  <li className="nav-link">Donate</li>
                </button>
              </NavLink>
            </div>

            <div className="right-img-div">
              <img
                className="right-img1"
                src="/images/banner/Vector 3.png"
                alt="right-img"
              />
              <img
                className="right-img2"
                src="/images/banner/portrait-young-girl-student-attending-school.png"
                alt="right-img"
              />
            </div>
          </div>
        </section>

        <section className="strategies">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="core-strategies-div">
                    <h6 className="section-subtitle">
                      What Makes Us Exceptional
                    </h6>

                    <h2 className="section-title">
                      Three Core Strategies for Our Mission in the US and India
                    </h2>

                    <div className="strategies-accordion">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Education Elevation
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p>
                                Supporting students with quality education
                                through scholarship, free of financial
                                limitations.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Institution Uplift
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p>
                                Supporting students with quality education
                                through scholarship, free of financial
                                limitations.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Opportunity Launch
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p>
                                Supporting students with quality education
                                through scholarship, free of financial
                                limitations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="core-strategies-img">
                    <img
                      src="/images/school-children-dressed-uniform-have-fun-play-schoolyard.png"
                      alt="core-strategy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-slider">
          <div className="row">
            <div className="home-slick-slider">
              <SlickSlider settings={homeBannerSettings} items={homeBanner} />
            </div>
          </div>
        </section>

        <section className="bridging-gap">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="bridging-img">
                    <img
                      src="/images/banner/Vector 6.png"
                      alt="vector-6"
                      className="bridging-img1"
                    />
                    <img
                      src="/images/banner/two-students-studying-together-online-with-laptop-park.png"
                      alt="briding-img"
                      className="bridging-img2"
                    />
                    <img
                      src="/images/banner/Vector 7.png"
                      alt="vector-7"
                      className="bridging-img3"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bridging-text">
                    <h6 className="section-subtitle">Empowering Education</h6>

                    <h2 className="section-title">
                      Bridging Gaps with Accessible, Holistic Learning
                    </h2>

                    <p>
                      Providing education that’s accessible to rural and
                      low-income communities and opening learning opportunities
                      that integrate top-tier education with holistic life
                      skills.
                    </p>

                    <button className="custom-btn bridge-btn">
                      <NavLink class="nav-link" to="/">
                        Know More
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=""></section>
      </Layout>
    </div>
  );
};

export default Home;

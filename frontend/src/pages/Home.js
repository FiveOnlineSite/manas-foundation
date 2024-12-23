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
              <h1
                className="banner-title wow"
                data-aos="fade-right" // Fade in as you scroll
                data-aos-duration="1500"
              >
                A Promising future begins here!
              </h1>

              <p className="paragraph">
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
                  <div className="bridging-text">
                    <h6 className="section-subtitle">Empowering Education</h6>

                    <h2 className="section-title">
                      Bridging Gaps with Accessible, Holistic Learning
                    </h2>

                    <p className="paragraph bridge-para">
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

        <section className="half-img-section">
          <div className="container">
            <div className="half-img-text">
              <h2 className="section-title text-center">
                Bringing new opportunities to the underdogs since 2019
              </h2>

              <button className="custom-btn bridge-btn read-btn">
                <NavLink class="nav-link" to="/">
                  READ OUR NEWSLETTER
                </NavLink>
              </button>
            </div>
          </div>
        </section>

        <section className="support-section">
          <div className="container">
            <div className="support-text-div">
              <h2>Your support is meaningful.</h2>
              <div className="support-para">
                <p className="paragraph bridge-para p-0">
                  “Out of 100 students, 29 percent of girls and boys drop out of
                  school before completing the full cycle of elementary
                  education, and often they are the most marginalized children.”
                </p>
                <p className="paragraph bridge-para unicef">©UNICEF</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container-fluid">
            <div className="col-lg-12">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-10 order-lg-1 order-2">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="member1"
                      role="tabpanel"
                      aria-labelledby="member1-tab"
                    >
                      <div className="col-lg-12">
                        <div className="row align-items-center justify-content-center">
                          <div className="testimonial-img1 col-lg-1">
                            <img
                              src="/images/testimonials/quote.png"
                              alt="quote"
                            />
                          </div>

                          <div className="testimonial-text col-lg-6 order-lg-1 order-2">
                            <h2 className="section-title">
                              Impactful Testimonials
                            </h2>
                            <p className="paragraph bridge-para testimonial-para">
                              Lorem ipsum dolor sit amet. Rem distinctio
                              corrupti cum earum iusto et veritatis facere ut
                              tempora sapiente eum assumenda amet. Non deleniti
                              porro est repudiandae aperiam ut fugit incidunt
                              sed esse animi id voluptates laboriosam et sequi
                              modi
                            </p>

                            <div className="testimonial-name ">
                              <h6>Eric Francis</h6>
                              <p>Volunteer</p>
                            </div>
                          </div>
                          <div className="testimonial-img col-lg-5 order-lg-2 order-1">
                            <img
                              src="/images/testimonials/testi-1-copyright-120x120.png"
                              alt="member"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="member2"
                      role="tabpanel"
                      aria-labelledby="member2-tab"
                    >
                      <div className="col-lg-12">
                        <div className="row align-items-center justify-content-center">
                          <div className="testimonial-img1 col-lg-1">
                            <img
                              src="/images/testimonials/quote.png"
                              alt="quote"
                            />
                          </div>

                          <div className="testimonial-text col-lg-6 order-lg-1 order-2">
                            <h2 className="section-title">
                              Impactful Testimonials
                            </h2>
                            <p className="paragraph bridge-para testimonial-para">
                              Lorem ipsum dolor sit amet. Rem distinctio
                              corrupti cum earum iusto et veritatis facere ut
                              tempora sapiente eum assumenda amet. Non deleniti
                              porro est repudiandae aperiam ut fugit incidunt
                              sed esse animi id voluptates laboriosam et sequi
                              modi
                            </p>

                            <div className="testimonial-name ">
                              <h6>Eric Francis</h6>
                              <p>Volunteer</p>
                            </div>
                          </div>
                          <div className="testimonial-img col-lg-5 order-lg-2 order-1">
                            <img
                              src="/images/testimonials/testi-2-copyright-120x120.png"
                              alt="member"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="member3"
                      role="tabpanel"
                      aria-labelledby="member3-tab"
                    >
                      <div className="col-lg-12">
                        <div className="row align-items-center justify-content-center">
                          <div className="testimonial-img1 col-lg-1">
                            <img
                              src="/images/testimonials/quote.png"
                              alt="quote"
                            />
                          </div>

                          <div className="testimonial-text col-lg-6 order-lg-1 order-2">
                            <h2 className="section-title">
                              Impactful Testimonials
                            </h2>
                            <p className="paragraph bridge-para testimonial-para">
                              Lorem ipsum dolor sit amet. Rem distinctio
                              corrupti cum earum iusto et veritatis facere ut
                              tempora sapiente eum assumenda amet. Non deleniti
                              porro est repudiandae aperiam ut fugit incidunt
                              sed esse animi id voluptates laboriosam et sequi
                              modi
                            </p>

                            <div className="testimonial-name ">
                              <h6>Eric Francis</h6>
                              <p>Volunteer</p>
                            </div>
                          </div>
                          <div className="testimonial-img col-lg-5 order-lg-2 order-1">
                            <img
                              src="/images/testimonials/testi-3-copyright-120x120.png"
                              alt="member"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="member4"
                      role="tabpanel"
                      aria-labelledby="member4-tab"
                    >
                      <div className="col-lg-12">
                        <div className="row align-items-center justify-content-center">
                          <div className="testimonial-img1 col-lg-1">
                            <img
                              src="/images/testimonials/quote.png"
                              alt="quote"
                            />
                          </div>

                          <div className="testimonial-text col-lg-6 order-lg-1 order-2">
                            <h2 className="section-title">
                              Impactful Testimonials
                            </h2>
                            <p className="paragraph bridge-para testimonial-para">
                              Lorem ipsum dolor sit amet. Rem distinctio
                              corrupti cum earum iusto et veritatis facere ut
                              tempora sapiente eum assumenda amet. Non deleniti
                              porro est repudiandae aperiam ut fugit incidunt
                              sed esse animi id voluptates laboriosam et sequi
                              modi
                            </p>

                            <div className="testimonial-name ">
                              <h6>Eric Francis</h6>
                              <p>Volunteer</p>
                            </div>
                          </div>
                          <div className="testimonial-img col-lg-5 order-lg-2 order-1">
                            <img
                              src="/images/testimonials/testi-2-copyright-120x120.png"
                              alt="member"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="member5"
                      role="tabpanel"
                      aria-labelledby="member5-tab"
                    >
                      <div className="col-lg-12">
                        <div className="row align-items-center justify-content-center">
                          <div className="testimonial-img1 col-lg-1">
                            <img
                              src="/images/testimonials/quote.png"
                              alt="quote"
                            />
                          </div>

                          <div className="testimonial-text col-lg-6 order-lg-1 order-2">
                            <h2 className="section-title">
                              Impactful Testimonials
                            </h2>
                            <p className="paragraph bridge-para testimonial-para">
                              Lorem ipsum dolor sit amet. Rem distinctio
                              corrupti cum earum iusto et veritatis facere ut
                              tempora sapiente eum assumenda amet. Non deleniti
                              porro est repudiandae aperiam ut fugit incidunt
                              sed esse animi id voluptates laboriosam et sequi
                              modi
                            </p>

                            <div className="testimonial-name ">
                              <h6>Eric Francis</h6>
                              <p>Volunteer</p>
                            </div>
                          </div>
                          <div className="testimonial-img col-lg-5 order-lg-2 order-1">
                            <img
                              src="/images/testimonials/testi-2-copyright-120x120.png"
                              alt="member"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 testimonial-links order-lg-2 order-1">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="#member1"
                        id="member1-tab"
                        data-bs-toggle="tab"
                        aria-controls="member1"
                      >
                        <img
                          src="/images/testimonials/testi-1-copyright-120x120.png"
                          alt="member"
                        />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#member2"
                        id="member2-tab"
                        data-bs-toggle="tab"
                        aria-controls="member2"
                      >
                        <img
                          src="/images/testimonials/testi-2-copyright-120x120.png"
                          alt="member"
                        />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#member3"
                        id="member3-tab"
                        data-bs-toggle="tab"
                        aria-controls="member3"
                      >
                        <img
                          src="/images/testimonials/testi-3-copyright-120x120.png"
                          alt="member"
                        />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#member4"
                        id="member4-tab"
                        data-bs-toggle="tab"
                        aria-controls="member4"
                      >
                        <img
                          src="/images/testimonials/testi-2-copyright-120x120.png"
                          alt="member"
                        />
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#member5"
                        id="member5-tab"
                        data-bs-toggle="tab"
                        aria-controls="member5"
                      >
                        <img
                          src="/images/testimonials/testi-2-copyright-120x120.png"
                          alt="member"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-events">
          <div className="container">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5 order-lg-1 order-2">
                  <div className="news-events-text">
                    <h6 className="section-subtitle">NEWS & EVENTS</h6>

                    <div className="d-flex justify-content-between w-100">
                      <h2 className="section-title">Editor’s Pick</h2>
                      <NavLink to="/">
                        <div className="d-flex align-items-start">
                          <img src="/images/icons/Group 8189.png" alt="arrow" />
                        </div>
                      </NavLink>
                    </div>

                    <div className="events-div">
                      <NavLink class="nav-link" to="/">
                        <div className="single-event d-flex">
                          <img src="/images/icons/Group 8179.png" alt="arrow" />
                          <div className="ps-3">
                            <div className="event-single-div d-flex">
                              <h6>NEWS</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>From help to hope: our aid in Eutopia</h5>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink class="nav-link" to="/">
                        <div className="single-event d-flex">
                          <img src="/images/icons/Group 8179.png" alt="arrow" />
                          <div className="ps-3">
                            <div className="event-single-div d-flex">
                              <h6>EVENT</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>Solutions to avoid global climate change</h5>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink class="nav-link" to="/">
                        <div className="single-event d-flex">
                          <img src="/images/icons/Group 8179.png" alt="arrow" />
                          <div className="ps-3">
                            <div className="event-single-div d-flex">
                              <h6>NEWS</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>Maldives announces coastal cleanup </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 order-lg-2 order-1">
                  <div className="news-img">
                    <img
                      src="/images/banner/image-18-copyright.png"
                      alt="banner"
                      className="w-100"
                    />
                    <div className="hope-div">
                      <h2>Hope after horror in Congo: Idir’s story</h2>

                      <p>
                        Lorem ipsum dolor sit amet. Et deserunt quod id voluptas
                        fugiat sed alias odit. Qui deleniti voluptas qui
                        perferendis saepe ut autem pariatur et veritatis illo
                        qui quis recusandae.
                      </p>

                      <div className="news-time-div">
                        <span></span>
                        <div className="news-time">
                          <h6>Event</h6>
                          <span>.</span>
                          <h6>Apr 21, 2020</h6>
                          <span>.</span>
                          <h6>0 Comments</h6>
                        </div>
                      </div>

                      <button className="custom-btn bridge-btn read-btn mt-3 mb-0">
                        <NavLink class="nav-link" to="/">
                          LEARN MORE
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="get-started">
          <div className="container">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-7 order-lg-1 order-2">
                  <h6 className="section-subtitle">GET STARTED</h6>

                  <h2 className="section-title w-55">
                    Reach out! We’d love to talk to you.
                  </h2>

                  <div className="get-started-form">
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div class="mb-4">
                            <label for="full-name" class="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="full-name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div class="mb-4">
                            <label for="phone-number" class="form-label">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="phone-number"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div class="mb-4">
                            <label for="email-address" class="form-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="email-address"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div class="mb-4">
                            <label for="email-address" class="form-label">
                              Inquiry Type
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Inquiry Type</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div class="mb-4">
                            <label for="message" class="form-label">
                              Message
                            </label>
                            <textarea
                              rows="2"
                              class="form-control"
                              id="message"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="mb-4">
                            <button className="custom-btn bridge-btn">
                              <NavLink class="nav-link" to="/">
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
      </Layout>
    </div>
  );
};

export default Home;

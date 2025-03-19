import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Achivements from "../components/Achivements";
import Testimonials from "../components/Testimonials";
import ReachOut from "../components/ReachOut";
import FacilitiesSlider from "../components/FacilitiesSlider";

const Academy = () => {
  const facilities = [
    {
      image: "/images/slider/Lab08.jpeg",
      text: "Sports & Recreational Spaces",
      modal_data: {
        videos: [
          // Use an array if multiple videos are needed
          {
            video_thumbnail: "/images/slider/Lab08.jpeg",
            src: "/videos/lv_0_20250221192257.mp4",
          },
          // {
          //   video_thumbnail: "/images/slider/Lab08.jpeg",
          //   src: "/videos/lv_0_20250221192257.mp4",
          // },
        ],
        modal_images: [
          "/images/slider/A7402682.jpg",
          "/images/slider/KG Students 04.jpg",
        ], // Use an array for multiple images
      },
    },
    {
      image: "/images/slider/Lab07.jpeg",
      text: "Extracurriculars",
      modal_data: {
        modal_images: [
          "/images/slider/DSC04685.jpg",
          "/images/slider/Dance Team02.jpeg",
          "/images/slider/DSC04762.jpg",
          "/images/slider/DSC04905.jpg",
          "/images/slider/Exhibition India.jpeg",
          "/images/slider/Exhibition Smart Village.jpeg",
          "/images/slider/OurScope-08.jpeg",
        ],
        videos: [
          {
            video_thumbnail: "/images/slider/Lab08.jpeg",
            src: "/videos/lv_0_20250221192441.mp4",
          },
        ],
      },
    },
    {
      image: "/images/slider/Lab09.jpeg",
      text: "Classrooms & Labs",
      modal_data: {
        modal_images: [
          "/images/slider/AboutUs-03.jpeg",
          "/images/slider/Gayatri 01.jpeg",
        ],
        videos: [
          {
            video_thumbnail: "/images/slider/Lab09.jpeg",
            src: "/videos/lv_0_20250221192441.mp4",
          },
        ],
      },
    },
  ];

  const facilitiesSettings = {
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
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img
            src="/images/banner/MA-Campus.jpg"
            alt="scope-banner"
            className="about-img"
          />
          <div className="about-banner-text">
            <h1 className="banner-title mt-5">Manas Academy</h1>
            <p className="paragraph bridge-para p-0 pt-2 para-two">
              “Knowledge alone does not guarantee success; skills, values and
              culture with a positive mindset are essential for a promising
              future.”
            </p>
          </div>
        </div>
      </section>

      <section className="enhancing-section history-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              {/* <h6 className="section-subtitle"></h6> */}

              <h2 className="section-title">HISTORY</h2>

              <p className="paragraph bridge-para p-0 pt-2">
                When My Manas Foundation began in 2019, it was with a mission to
                provide children in the rural areas lacking opportunities of an
                inclusive learning environment and a curriculum that integrates
                today’s educational requirements with tomorrow’s needs. Manas
                Academy has taken a full form after COVID-19 impact and is now
                providing meaningful education to the children in rural areas
                with excellent academic programs and an enthusiastic learning
                environment.
              </p>
            </div>

            <div className="col-lg-5 col-md-5 col-12">
              <div className="enhancing-img text-center">
                <img
                  src="/images/banner/academy_enhanced_enhanced.png"
                  alt="logo"
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* <h6 className="section-subtitle">Leadership team</h6> */}

              <h2 className="section-title">Leadership team</h2>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/teams/Sri Valleru.jpg"
                        alt="team"
                        className="team-img mt-4"
                      />
                      <img
                        src="/images/banner/Vector 8.png"
                        alt="down-img"
                        className="down-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Srikant (Sri) Valleru</h6>
                      <p>
                        Over 30 years of mutlitnational industry experience from
                        USA, with expertise in leadership coaching and
                        development of young graduates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1 mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div ">
                      <img
                        src="/images/teams/Gunjan Thakur.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 6.png"
                        alt="up-img"
                        className="up-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Gunjan Thakur</h6>
                      <p>
                        Over 20 years of teaching in CBSE schools with master’s
                        in education. Expertise in training educators and child
                        development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 8.png"
                        alt="down-img"
                        className="down-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 6.png"
                        alt="up-img"
                        className="up-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 8.png"
                        alt="down-img"
                        className="down-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Achivements />

      <section className="half-img-section about-half-img d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  {/* <h6 className="section-subtitle">CURRICULUM</h6> */}

                  <h2 className="section-title">Curriculum</h2>
                </div>

                <div className="col-lg-6 offset-lg-3">
                  <p className="paragraph bridge-para">
                    Lorem ipsum dolor sit amet. Vel cupiditate iusto id officia
                    dolores sed pariatur vero est asperiores veniam ea inventore
                    ipsa. Hic tenetur necessitatibus eum dolores consequuntur 33
                    autem saepe et assumenda nisi. Est earum provident est vitae
                    laudantium et omnis quae eos iusto architecto ut fugiat
                    itaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-img-row">
        <div className="container">
          {/* <h6 className="section-subtitle">lorem ipsum set</h6> */}

          <h2 className="section-title">Grade levels offered</h2>

          <div className="values-div grades-div">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  <div className="single-value ">
                    <div className="d-flex flex-column">
                      <div>
                        <img
                          src="/images/icons/background_2.png"
                          alt="value-img"
                        />
                      </div>

                      <h2 className="section-title pt-3 pb-0 grade-title">
                        Pre-primary
                      </h2>
                    </div>

                    <p className="pt-1 grade-para">
                      Can provide a student with basic school materials for a
                      year, such as notebooks, pencils, among others.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-5">
                  <div className="single-value">
                    <div className="d-flex flex-column">
                      <div>
                        <img
                          src="/images/icons/background_2 (1).png"
                          alt="value-img"
                        />
                      </div>

                      <h2 className="section-title pt-3 pb-0 grade-title">
                        Primary
                      </h2>
                    </div>

                    <p className="pt-1 grade-para">
                      Can help a teacher to enhance their pedagogical skills
                      through training in integrated learning concepts.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-5">
                  <div className="single-value">
                    <div className="d-flex flex-column">
                      <div>
                        <img
                          src="/images/icons/background_2 (2).png"
                          alt="value-img"
                        />
                      </div>

                      <h2 className="section-title pt-3 pb-0 grade-title">
                        Middle School
                      </h2>
                    </div>

                    <p className="pt-1 grade-para">
                      Can help us upgrade an entire classroom to an integrated
                      learning environment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-5">
                  <div className="single-value">
                    <div className="d-flex flex-column">
                      <div>
                        <img
                          src="/images/icons/background_2 (3).png"
                          alt="value-img"
                        />
                      </div>
                      <h2 className="section-title pt-3 pb-0 grade-title">
                        High School
                      </h2>
                    </div>

                    <p className="pt-1 grade-para">
                      Can provide scholarship to a student for a year to attend
                      higher (college) education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <div className="container">
          <h2 className="section-title pb-2">How to Apply</h2>
          <div className="apply-btn-div">
            <button className="custom-btn bridge-btn me-4">
              <NavLink className="nav-link" to="/">
                WHATSAPP US
              </NavLink>
            </button>

            <button className="custom-btn bridge-btn">
              <NavLink className="nav-link" to="/">
                CONTACT US
              </NavLink>
            </button>
          </div>
        </div>
      </section>

      <section className="facilties-slider">
        <div className="container">
          <h2 className="section-title">Facilities</h2>
        </div>
        <div className="row">
          <div
            className="home-slick-slider wow"
            data-aos="zoom-in" // Fade in as you scroll
            data-aos-duration="1500"
          >
            <FacilitiesSlider
              settings={facilitiesSettings}
              items={facilities}
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="section-subtitle">Contact Info</h6>

              <h2 className="section-title">
                We are always happy to assist you
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 mt-lg-0 mt-5">
                  <div className="contact-div">
                    <h6>India</h6> <span></span>
                    <h6>
                      <a href="mailto:Info.manasacademy@mymanas.org">
                        Info.manasacademy@mymanas.org
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br /> Bidwal-Shergarh Road, Tehsil Badnawar,
                      Dist. Dhar, Dhar, MP 454665 India
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1 offset-0 mt-lg-0 mt-5">
                  <div className="contact-div">
                    <h6>US</h6> <span></span>
                    <h6>
                      <a href="mailto:Info.manasacademy@mymanas.org">
                        Info.manasacademy@mymanas.org
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br />
                      2213 Nantucket Dr. Unit C, Houston, TX 77057
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="contact-div">
                  <h6>
                    For Jobs, send resume to{" "}
                    <a href="mailto:hr.manasacademy@mymanas.org">
                      hr.manasacademy@mymanas.org
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mt-5">
            <div className="contact-div d-flex align-items-center justify-content-center">
              <h6>
                For Admission and Additional Information, send us a message or
                call __________:
              </h6>
            </div>
          </div> */}
        </div>
      </section>

      <ReachOut />
    </Layout>
  );
};

export default Academy;

import React from "react";
import Slider from "react-slick";

const AwardeesSlider = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev custom-arrow" onClick={onClick}>
        <img src="/images/icons/chevron-down (1).png" alt="left-arrow" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next custom-arrow" onClick={onClick}>
        <img src="/images/icons/chevron-down.png" alt="right-arrow" />
      </button>
    );
  };

  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: "20px", // Padding around the centered slide
    slidesToShow: 3, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    focusOnSelect: true, // Focus on the selected slide
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Enable center mode
          // centerPadding: "150px",
        },
      },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="container">
      <div className="awardee-div">
        <Slider {...settings}>
          <div className="awardee-title">
            <div className="d-flex align-items-center">
              <div>
                <img src="/images/icons/Angel.png" className="w-100 schol-img-two" />
              </div>

              <div className="d-flex flex-column w-100 px-2">
                <div className="d-flex flex-row justify-content-between ">
                  <h4>Angel</h4>
                  <h6>2021</h6>
                </div>

                <h5>Houston Community College</h5>
              </div>
            </div>

            <p>
            This native Houstonian loves to travel and learn new languages. Service is a large part of her passion which is why she stays involved in her church and community. With her sights set on becoming a nurse, Angel demonstrates her commitment to excellence in her academic pursuits.
            </p>
          </div>

          <div className="awardee-title">
            <div className="d-flex align-items-center">
              <div>
                <img src="/images/icons/Curtis.png" className="w-100 schol-img-two" />
              </div>

              <div className="d-flex flex-column w-100 px-2">
                <div className="d-flex flex-row justify-content-between ">
                  <h4>Curtis</h4>
                  <h6>2021</h6>
                </div>

                <h5>University of Mississippi</h5>
              </div>
            </div>

            <p>
            An outgoing athlete, Curtis built a long history of community service and volunteering. He plans to combine his passion for science, math and medicine when he enters the PharmD program at Ole Miss. Along with swimming and golf, this Star Wars aficionado hopes to travel the world.
            </p>
          </div>

          <div className="awardee-title">
            <div className="d-flex align-items-center">
              <div>
                <img src="/images/icons/Breanna.png" className="w-100 schol-img-two" />
              </div>

              <div className="d-flex flex-column w-100 px-2">
                <div className="d-flex flex-row justify-content-between ">
                  <h4>Breanna</h4>
                  <h6>2021</h6>
                </div>

                <h5>University of Texas</h5>
              </div>
            </div>

            <p>
            Setting goals is nothing new for this biology student. Breanna has achieved much in her young life and plans to continue doing so in her chosen field of pediatrics. In her spare time, she enjoys baking, puzzles and listening to music. Among her goals, visiting at least 15 countries.
            </p>
          </div>

          <div className="awardee-title">
            <div className="d-flex align-items-center">
              <div>
                <img src="/images/icons/Mahima2.png" className="w-100 schol-img-two" />
              </div>

              <div className="d-flex flex-column w-100 px-2">
                <div className="d-flex flex-row justify-content-between ">
                  <h4>Mahima</h4>
                  <h6>2021</h6>
                </div>

                <h5>Indore Institute of Science and Technology</h5>
              </div>
            </div>

            <p>
            Our Manas Academy scholarship student from Jalampura, Dhar, MP, India with a goal to be an engineer, scored 90.5%tile in JEE, now studying  Bachelor of Technology in Computer Science at Indore Institute of Science and Technology.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AwardeesSlider;

import React from "react";
import Slider from "react-slick";

const SlickSlider = ({ items, settings }) => {
  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="element" key={index}>
            {item.video ? (
              <div className="video-thumbnail-container">
                <img
                  className="slider-thumbnail"
                  src={item.image || item.video_thumbnail}
                  alt={`Thumbnail ${index}`}
                />
                <div className="play-icon-overlay">
                  <img src="/images/icons/Group 8249.png" alt="play-icon" />
                </div>
              </div>
            ) : (
              <img src={item.image} alt="Slider Img" />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;

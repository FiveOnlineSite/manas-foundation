import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

const SlickSlider = ({ items, settings }) => {
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the video for the modal
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    console.log("Opening modal for video:", video);
    setSelectedVideo(video); // Set the selected video
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedVideo(null); // Clear the selected video
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    console.log("Modal state changed:", isModalOpen);
    if (isModalOpen && selectedVideo && videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  }, [isModalOpen, selectedVideo]);

  return (
    <>
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
                <div
                  className="play-icon-overlay"
                  onClick={() => openModal(item.video)}
                >
                  <img src="/images/icons/Group 8249.png" alt="play-icon" />
                </div>
              </div>
            ) : (
              <img src={item.image} alt="Slider Img" />
            )}
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" onClick={closeModal}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                {selectedVideo ? (
                  <video
                    ref={videoRef} // Attach the ref here
                    controls
                    className="modal-video"
                    onCanPlay={() => {
                      if (videoRef.current) {
                        videoRef.current.play(); // Ensure the video plays when it is ready
                      }
                    }}
                  >
                    <source src={selectedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>No video selected</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SlickSlider;

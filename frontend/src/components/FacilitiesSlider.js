import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { createPortal } from "react-dom";

const FacilitiesSlider = ({ items, settings }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(items[0]); // Track the current media (video/image) in the tab content

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  // Update current media on tab link click
  const handleTabClick = (mediaItem) => {
    setCurrentMedia(mediaItem);
  };

  // Effect to disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }

    // Cleanup when component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when modal is closed
    };
  }, [isModalOpen]); // Runs whenever `isModalOpen` changes

  // Modal component for lightbox gallery
  const Modal = () =>
    isModalOpen &&
    createPortal(
      <div
        className="modal fade show overflow-hidden facilities-modal"
        tabIndex="-1"
        role="dialog"
        style={{
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1050, // Ensure modal is above other content
        }}
        onClick={closeModal}
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="close-button"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row facilities-row">
                  <div className="col-lg-2 col-12">
                    <ul className="nav nav-tabs ">
                      {items.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <a
                            className={`nav-link ${
                              currentMedia === item ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(item)}
                          >
                            {item.video ? (
                              <div className="video-thumbnail-div">
                                <img
                                  src={item.video_thumbnail}
                                  alt={`Video Poster ${index}`}
                                  className="w-100 video-thumbnail"
                                />
                                <img
                                  src="/images/icons/Group 8249.png"
                                  alt="play-icon"
                                  className="tabs-play-icon"
                                  width={"50px"}
                                  height={"50px"}
                                />
                              </div>
                            ) : (
                              <img
                                src={item.image}
                                alt={`Modal img ${index}`}
                                className="w-100"
                              />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-10 col-12">
                    <div className="tab-content">
                      <div className="tab-pane fade active show">
                        <div className="col-lg-12">
                          <div className="row align-items-center justify-content-center">
                            <div className="facilities-slider">
                              {currentMedia.video ? (
                                <video
                                  src={currentMedia.video}
                                  controls
                                  autoPlay
                                  style={{ width: "100%", maxHeight: "80vh" }}
                                />
                              ) : (
                                <img
                                  src={currentMedia.image}
                                  alt={`Selected Content`}
                                  style={{ width: "100%", maxHeight: "80vh" }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {/* Render the slider */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="element" key={index}>
            <div className="video-thumbnail-container">
              <img
                className="slider-thumbnail"
                src={item.image || item.video_thumbnail}
                alt={`Thumbnail ${index}`}
              />
              <div className="slider-overlay"></div>
              <div
                className="modal-button"
                onClick={() => {
                  setCurrentMedia(item);
                  openModal();
                }}
              >
                <img src="/images/icons/Group 8338.png" alt="play-icon" />
              </div>
              <div className="slider-text">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Render the modal */}
      <Modal />
    </>
  );
};

export default FacilitiesSlider;

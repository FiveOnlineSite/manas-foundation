// import React, { useState, useRef, useEffect } from "react";
// import Slider from "react-slick";
// import { createPortal } from "react-dom";

// const FacilitiesSlider = ({ items, settings }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (video) => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const Modal = () =>
//     isModalOpen &&
//     createPortal(
//       <div
//         className="modal fade show"
//         tabIndex="-1"
//         role="dialog"
//         style={{
//           display: "block",
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//           zIndex: 1050, // Ensure modal is above other content
//         }}
//         onClick={closeModal}
//       >
//         <div
//           className="modal-dialog modal-xl modal-dialog-centered"
//           role="document"
//         >
//           <div className="modal-content modal-backdrop">
//             <div className="modal-header">
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   closeModal();
//                 }}
//               >
//                 {" "}
//                 <i className="fa-solid fa-circle-xmark"></i>
//               </button>
//             </div>
//             <div className="modal-body text-center"></div>
//           </div>
//         </div>
//       </div>,
//       document.body // Render modal at the root level
//     );

//   return (
//     <>
//       <Slider {...settings}>
//         {items.map((item, index) => (
//           <div className="element" key={index}>
//             <div className="video-thumbnail-container">
//               <img
//                 className="slider-thumbnail"
//                 src={item.image || item.video_thumbnail}
//                 alt={`Thumbnail ${index}`}
//               />
//               <div className="slider-overlay"></div>
//               <div className="modal-button" onClick={() => openModal(item)}>
//                 <img src="/images/icons/Group 8338.png" alt="play-icon" />
//               </div>
//               <div className="slider-text">
//                 <p>{item.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </>
//   );
// };

// export default FacilitiesSlider;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import { createPortal } from "react-dom";

// const FacilitiesSlider = ({ items, settings }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0); // Track the current item index in the modal

//   // Open the modal with the current index
//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Navigate to the next item
//   const nextItem = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   // Navigate to the previous item
//   const prevItem = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   // Modal component for lightbox gallery
//   const Modal = () =>
//     isModalOpen &&
//     createPortal(
//       <div
//         className="modal fade show"
//         tabIndex="-1"
//         role="dialog"
//         style={{
//           display: "block",
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//           zIndex: 1050, // Ensure modal is above other content
//         }}
//         onClick={closeModal}
//       >
//         <div
//           className="modal-dialog modal-xl modal-dialog-centered"
//           role="document"
//           onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   closeModal();
//                 }}
//                 className="close-button"
//               >
//                 <i className="fa-solid fa-circle-xmark"></i>
//               </button>
//             </div>
//             <div className="modal-body text-center">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-2">
//                     <ul className="nav nav-tabs">
//                       <li className="nav-item">
//                         <a
//                           className="nav-link active"
//                           aria-current="page"
//                           href="#member1"
//                           id="member1-tab"
//                           data-bs-toggle="tab"
//                           aria-controls="member1"
//                         >
//                           <img
//                             src="/images/testimonials/testi-1.png"
//                             alt="member"
//                             className="w-100"
//                           />
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a
//                           className="nav-link"
//                           href="#member2"
//                           id="member2-tab"
//                           data-bs-toggle="tab"
//                           aria-controls="member2"
//                         >
//                           <img
//                             src="/images/testimonials/testi-2.png"
//                             alt="member"
//                             className="w-100"
//                           />
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a
//                           className="nav-link"
//                           href="#member3"
//                           id="member3-tab"
//                           data-bs-toggle="tab"
//                           aria-controls="member3"
//                         >
//                           <img
//                             src="/images/testimonials/testi-3.png"
//                             alt="member"
//                             className="w-100"
//                           />
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a
//                           className="nav-link"
//                           href="#member4"
//                           id="member4-tab"
//                           data-bs-toggle="tab"
//                           aria-controls="member4"
//                         >
//                           <img
//                             src="/images/testimonials/testi-2.png"
//                             alt="member"
//                             className="w-100"
//                           />
//                         </a>
//                       </li>

//                       <li className="nav-item">
//                         <a
//                           className="nav-link"
//                           href="#member5"
//                           id="member5-tab"
//                           data-bs-toggle="tab"
//                           aria-controls="member5"
//                         >
//                           <img
//                             src="/images/testimonials/testi-1.png"
//                             alt="member"
//                             className="w-100"
//                           />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="col-lg-10">
//                     <div className="tab-content">
//                       <div
//                         className="tab-pane fade active show"
//                         id="member1"
//                         role="tabpanel"
//                         aria-labelledby="member1-tab"
//                       >
//                         <div className="col-lg-12">
//                           <div className="row align-items-center justify-content-center">
//                             {/* Render the current item */}
//                             {items[currentIndex].video ? (
//                               <video
//                                 src={items[currentIndex].video}
//                                 controls
//                                 style={{ width: "100%", maxHeight: "80vh" }}
//                               />
//                             ) : (
//                               <img
//                                 src={
//                                   items[currentIndex].image ||
//                                   items[currentIndex].video_thumbnail
//                                 }
//                                 alt={`Gallery Item ${currentIndex}`}
//                                 style={{ width: "100%", maxHeight: "80vh" }}
//                               />
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Navigation controls */}
//             <div className="modal-footer">
//               <button className="prev-button" onClick={prevItem}>
//                 Previous
//               </button>
//               <button className="next-button" onClick={nextItem}>
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>,
//       document.body // Render modal at the root level
//     );

//   return (
//     <>
//       {/* Render the slider */}
//       <Slider {...settings}>
//         {items.map((item, index) => (
//           <div className="element" key={index}>
//             <div className="video-thumbnail-container">
//               <img
//                 className="slider-thumbnail"
//                 src={item.image || item.video_thumbnail}
//                 alt={`Thumbnail ${index}`}
//               />
//               <div className="slider-overlay"></div>
//               <div
//                 className="modal-button"
//                 onClick={() => openModal(index)} // Pass index to openModal
//               >
//                 <img src="/images/icons/Group 8338.png" alt="play-icon" />
//               </div>
//               <div className="slider-text">
//                 <p>{item.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Render the modal */}
//       <Modal />
//     </>
//   );
// };

// export default FacilitiesSlider;
import React, { useState } from "react";
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
                              <img
                                src={item.video_thumbnail}
                                alt={`Video Poster ${index}`}
                                className="w-100"
                              />
                            ) : (
                              <img
                                src={item.image}
                                alt={`Image ${index}`}
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

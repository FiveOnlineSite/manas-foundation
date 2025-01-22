import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Achivements from "../components/Achivements";
import Testimonials from "../components/Testimonials";

const Academy = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container-fluid">
          <img src="/images/banner/scope-banner.png" alt="scope-banner" />
          <div className="about-banner-text">
            <h1 className="banner-title mt-5">Manas Academy</h1>
          </div>
        </div>
      </section>

      <section className="enhancing-section history-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h6 className="section-subtitle">HISTORY</h6>

              <h2 className="section-title">Lorem Ipsum dolor sit amet</h2>

              <p className="paragraph bridge-para p-0 pt-2">
                Lorem ipsum dolor sit amet. Non nulla voluptatem eos laboriosam
                voluptatem ad eveniet assumenda est velit animi. Et
                necessitatibus quia rem explicabo galisum id atque rerum?
                <br />A velit repellat qui dolor culpa et architecto dolor. Qui
                dolor praesentium quo velit commodi sit quod consequuntur qui
                dicta minus. Est voluptatem unde ut sequi quis vel aperiam
                accusamus et accusamus earum ea praesentium quisquam qui
                molestiae illum. Qui veniam numquam cum soluta Quis eos dolore
                consequatur id nulla repellat et officia rerum non eligendi
                veritatis est debitis doloribus.
              </p>
            </div>

            <div className="col-lg-5 text-lg-end text-start">
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

      <Achivements />

      <Testimonials />
    </Layout>
  );
};

export default Academy;

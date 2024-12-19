import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-3">
            <a class="navbar-brand" href="#">
              <img src="/images/logomymanas 2.png" />
            </a>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-start ">
            <div className="social-media">
              <a class="navbar-item" href="#">
                <img src="/images/icons/ic_baseline-facebook.png" />
              </a>

              <a class="navbar-item" href="#">
                <img src="/images/icons/ph_instagram-logo-fill.png" />
              </a>

              <a class="navbar-item" href="#">
                <img src="/images/icons/entypo-social_linkedin-with-circle.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="row copyright-row">
          <p>
            © COPYRIGHT My Manas Foundation 2020. A 501(c)(3) Nonprofit
            Organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

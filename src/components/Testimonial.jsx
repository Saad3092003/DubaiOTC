"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };
  return (
    <div className="d-flex flex-column flex-md-row" data-aos="fade-left">
      <div
        className="bg-white w-100 d-flex flex-column justify-content-center ps-5 pe-3"
        style={{ maxWidth: "427px" }}
      >
        <Slider {...settings}>
          <div className="d-flex justify-content-center flex-column gap-9">
            <div className="d-flex py-3">
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
            </div>
            <div className="Paragraphlarge" style={{ color: "#1a1a1a" }}>
              Great services, Professional and reliable. Working with them since
              last 2 years regularly now. Recommended
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="heading05">lingisetty ajaykumar</div>
              {/* <div className="fs-6 fw-light text-secondary">
                    Senior Research Manager
                  </div> */}
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column gap-9">
            <div className="d-flex py-3">
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
            </div>
            <div className="Paragraphlarge" style={{ color: "#1a1a1a" }}>
              The best crypto exchange in Dubai fast and trust I suggest every
              trader treat with them will never regret the best behaviour and
              friendly ❤️❤️
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="heading05">Ali Nabil Official</div>
              {/* <div className="fs-6 fw-light text-secondary">
                    Senior Research Manager
                  </div> */}
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column gap-9">
            <div className="d-flex py-3">
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
              <i className="fa fa-star fs-4"></i>
            </div>
            <div className="Paragraphlarge" style={{ color: "#1a1a1a" }}>
              OTC, It is the best place to buy crypto and USDT, the best price
              and complete trust, rest assured if you work with them, and thanks
              to the team very much.
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="heading05">Ahmed Fouda</div>
              {/* <div className="fs-6 fw-light text-secondary">
                    Senior Research Manager
                  </div> */}
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <img
          alt="USDT OTC in Dubai"
          src="images/testimonial.png"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Testimonial;

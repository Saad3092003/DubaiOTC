"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnersSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="images/euOTC.png" className="img-fluid " alt="" />
      </div>
      <div>
        <img src="images/amlBot.png" className="img-fluid " alt="" />
      </div>
      <div>
        <img src="images/okk.png" className="img-fluid " alt="" />
      </div>
      <div>
        <img src="images/ledger.png" className="img-fluid " alt="" />
      </div>
    </Slider>
  );
}

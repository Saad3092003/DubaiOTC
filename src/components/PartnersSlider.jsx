"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnersSlider() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          alt="Sell USDT in Dubai"
          src="images/euOTC.png"
          className="img-fluid mx-auto"
        />
      </div>
      <div>
        <img
          alt="Sell USDT in Dubai"
          src="images/amlBot.png"
          className="img-fluid mx-auto"
        />
      </div>
      <div>
        <img
          alt="USDT OTC in Dubai"
          src="images/okk.png"
          className="img-fluid mx-auto"
        />
      </div>
      <div>
        <img
          alt="USDT OTC in Dubai"
          src="images/ledger.png"
          className="img-fluid mx-auto"
        />
      </div>
    </Slider>
  );
}

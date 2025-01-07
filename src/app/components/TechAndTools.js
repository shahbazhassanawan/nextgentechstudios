"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechAndTools = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="TechAndTools">
      <div className="container appMobilePadding">
        <div className="row ">
          <h2 className="mainHeadingMobile">Technology And Tools</h2>
          <p className="paragraphText">
            We impart cutting-edge tech solutions for your stellar web
            development projects that deliver exclusive
            <br /> programming languages, frameworks, and libraries that enable
            us to rank apps with modern web technologies
            <br /> and web development tools.
          </p>
        </div>
      </div>

      <Slider {...settings} className="TechAndToolSlider">
        {[
          "./images/work-tabs/android.png",
          "./images/work-tabs/angular.png",
          "./images/work-tabs/apche-jmeter.png",
          "./images/work-tabs/firebase.png",
          "./images/work-tabs/flutter.png",
          "./images/work-tabs/github.png",
          "./images/work-tabs/java.png",
          "./images/work-tabs/kotlin.png",
          "./images/work-tabs/lonic.png",
          "./images/work-tabs/postgre-sql.png",
          "./images/work-tabs/redux.png",
          "./images/work-tabs/vue-js.png",
        ].map((src, index) => (
          <div
            key={index}
            className={`TechBoxSlide ${
              index === (activeIndex + 4) % 12 ? "scale-up" : ""
            }`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechAndTools;

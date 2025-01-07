"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Case Study",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States.",
      imgSrc: "/images/sliderone.png",
    },
    {
      id: 2,
      title: "Case Study",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States.",
      imgSrc: "/images/slidertwo.png",
    },
    {
      id: 3,
      title: "Case Study",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States.",
      imgSrc: "/images/sliderthree.png",
    },
    {
      id: 4,
      title: "Case Study",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States.",
      imgSrc: "/images/sliderfour.png",
    },
  ];

  // Function to handle "Next" and "Previous" actions
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        {testimonials.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
          ></li>
        ))}
      </ol>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${testimonial.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "700px", // Adjust the height of the carousel
              backgroundRepeat:"no-repeat"
            }}
          >
            <div className="carousel-caption d-none d-md-block custom-slider">
              <h5>{testimonial.title}</h5>
              <p>{testimonial.text}</p>
              <div className="one-test">
                <Link href="/mobile-app-design">
                  <button
                    style={{
                      backgroundColor: index === 1 ? "#fff" : "#DC5F00",
                      color: index === 1 ? "#DC5F00" : "#fff",
                      borderColor: "#DC5F00",
                      borderWidth: 1,
                    }}
                  >
                    App Design
                  </button>
                </Link>
                <Link href="/native-app-development">
                  <button
                    style={{
                      backgroundColor: index === 1 ? "#fff" : "#DC5F00",
                      color: index === 1 ? "#DC5F00" : "#fff",
                    }}
                  >
                    App Development
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialSlider;

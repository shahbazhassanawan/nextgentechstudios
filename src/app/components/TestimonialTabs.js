"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Alex Ron",
    role: "Tech Startup Founder",
    avatar: "/images/review-avatar-1.png",
    review:
      "Working with Cynergy Studios was a game-changer for our business. Their team turned our vision into a stunning mobile app, delivered on time, and exceeded our expectations. Highly recommend!",
  },
  {
    name: "Shamus Tom",
    role: "E-commerce Business Owner",
    avatar: "/images/review-avatar-2.png",
    review:
      "Cynergy Studios' expertise in web development is unmatched. They understood our needs, offered creative solutions, and delivered a flawless product. The ongoing support has been exceptional.",
  },
  {
    name: "John Kally",
    role: "Digital Marketing Agency CEO",
    avatar: "/images/review-avatar-3.png",
    review:
      "From concept to launch, Cynergy Studios was with us every step of the way. Their professionalism, technical skills, and focus on security made our web app a great success.",
  },
  {
    name: "Raj Patel",
    role: "E-commerce Business Admin",
    avatar: "/images/review-avatar-5.jpg",
    review:
      "Working with Cynergy was a game-changer! They took our concept and turned it into an engaging app that our users love. Truly a remarkable experience!",
  },
  {
    name: "Maria Thompson",
    role: "Tech Startup CEO",
    avatar: "/images/review-avatar-4.jpg",
    review:
      "Cynergy Studios transformed our idea into a sleek app! Their team understood our vision and delivered beyond expectations. Highly recommend!",
  },
  {
    name: "John Davis",
    role: "Marketing Agency Investor",
    avatar: "/images/review-avatar-6.jpg",
    review:
      "We were blown away by the professionalism and expertise of Cynergy Studios. Our app not only looks amazing but performs flawlessly!",
  },
];

function TestimonialTabs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className="custom-dot"
        style={{
          width: "30px",
          height: "2px",
          backgroundColor: "#ddd",
          borderRadius: "0px",
          margin: "30px 0px",
          transition: "background-color 0.3s",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const totalSlides = testimonialsData.length;

  return (
    <div className="container-fluid testimonial-tabs">
      <h2 className="text-center">Trusted Innovators, Loved by Users</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => {
          const isMiddle = (index === (currentSlide % totalSlides) + 1) % totalSlides;
          return (
            <div
              key={index}
              className={`review ${isMiddle ? 'middle-review' : ''}`}
            >
              <div className="avatar d-flex">
                <div className="me-2">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5>{testimonial.name}</h5>
                  <h6>{testimonial.role}</h6>
                </div>
              </div>
              <p>{testimonial.review}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TestimonialTabs;

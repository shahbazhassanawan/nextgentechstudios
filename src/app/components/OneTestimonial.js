import React from "react";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OneTestimonial() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <p>
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration. Mobile app branding
              plays .Mobile app branding plays a vital role in the creation of
              the app’s specifications in terms of tone, voice, design, icons,
              and visuals. It requires careful consideration. Mobile app
              branding plays .
            </p>
            <div className="d-flex justify-content-start gap-3 align-items-center">
              <img
                src="./images/review-avatar-1.png"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="m-0">Alex James</h5>
                <p className="m-0">Happy Client</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration. Mobile app branding
              plays .Mobile app branding plays a vital role in the creation of
              the app’s specifications in terms of tone, voice, design, icons,
              and visuals. It requires careful consideration. Mobile app
              branding plays .
            </p>
            <div className="d-flex justify-content-start gap-3 align-items-center">
              <img
                src="./images/review-avatar-1.png"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="m-0">Alex James</h5>
                <p className="m-0">Happy Client</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration. Mobile app branding
              plays .Mobile app branding plays a vital role in the creation of
              the app’s specifications in terms of tone, voice, design, icons,
              and visuals. It requires careful consideration. Mobile app
              branding plays .
            </p>
            <div className="d-flex justify-content-start gap-3 align-items-center">
              <img
                src="./images/review-avatar-1.png"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="m-0">Alex James</h5>
                <p className="m-0">Happy Client</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration. Mobile app branding
              plays .Mobile app branding plays a vital role in the creation of
              the app’s specifications in terms of tone, voice, design, icons,
              and visuals. It requires careful consideration. Mobile app
              branding plays .
            </p>
            <div className="d-flex justify-content-start gap-3 align-items-center">
              <img
                src="./images/review-avatar-1.png"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="m-0">Alex James</h5>
                <p className="m-0">Happy Client</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default OneTestimonial;

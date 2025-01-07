import React from "react";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="case-study py-5 my-5 appMobilePaddingSmall">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mainHeadingMobile">Mobile Game We Develop</h2>
          <p className="paragraphText">
            Cynergy Studios creates top-notch mobile applications and
            cutting-edge mobile features for their users to clinch their potency
            and worthiness. Our mobile app services endeavor to build Android
            and IOS mobile applications that function as per the required needs
            of the user. Heading with successful mobile projects we fabricate
            app success in the procreation of unbeatable user interfaces, coding
            systems, database management, security, and maintenance
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="mt-5 caseStudy over-all-h3">
            <Slider {...settings}>
              <div>
                <div className="slide-1">
                  <img
                    src="./images/services-slider/slider-icon-1.png"
                    alt="image-1"
                  />
                  <h3>Ticketing <br />  Apps</h3>
                </div>
              </div>

              <div>
                <div className="slide-2">
                  <img
                    src="./images/services-slider/slider-icon-2.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Communication <br />  Apps</h3>
                </div>
              </div>

              <div>
                <div className="slide-3">
                  <img
                    src="./images/services-slider/slider-icon-3.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Lending <br />  Apps</h3>
                </div>
              </div>

              <div>
                <div className="slide-4">
                  <img
                    src="./images/services-slider/slider-icon-4.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Booking <br />  Apps</h3>
                </div>
              </div>

              <div>
                <div className="slide-5">
                  <img
                    src="./images/services-slider/slider-icon-5.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Social Media <br /> Apps</h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;

"use client";
import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeCommitSlider = () => {
    const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container IOS-services weCommitboxNavs appMobilePaddingSmall">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <h2 className="mainHeadingMobile">We Commit To Deliver</h2>
          <p className="paragraphText">
            Among premier mobile app development companies, we batten
            exceptional assistance on a wider scale to flourish Android and iOS
            devices internationally. From the start to the launch of mobile
            development, we construct and refine the design and performance of
            the app productively. As a reputable provider of native mobile app
            development services, we strive to meet the exigencies of our
            valuable consumers.
          </p>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-end gap-2">
                            <button className="interactiveBtn"  onClick={() => slider?.current?.slickPrev()} style={{border:'none',background:'white',borderRadius:'80px',padding:'0.1px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'2px 2px 4px 2px rgba(0, 0, 0, 0.25)'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.4237" cy="23.4237" r="23.4237" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.34082 0.496582)" fill="white"/>
                                        <path d="M12.9177 24.6945C12.4902 24.267 12.4902 23.5739 12.9177 23.1464L19.8842 16.1798C20.3117 15.7523 21.0048 15.7523 21.4323 16.1798C21.8598 16.6073 21.8598 17.3004 21.4323 17.7279L15.2398 23.9204L21.4323 30.1129C21.8598 30.5404 21.8598 31.2335 21.4323 31.661C21.0048 32.0885 20.3117 32.0885 19.8842 31.661L12.9177 24.6945ZM33.8369 25.0151L13.6917 25.0151L13.6917 22.8257L33.8369 22.8257L33.8369 25.0151Z" fill="#DC5F00"/>
                                        </svg>
                            </button>
                            <button className="interactiveBtn" onClick={() => slider?.current?.slickNext()} style={{border:'none',background:'none'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.629" cy="23.9203" r="23.4237" transform="rotate(90 23.629 23.9203)" fill="#DC5F00"/>
                                    <path d="M34.4759 24.6945C34.9034 24.267 34.9034 23.5739 34.4759 23.1464L27.5094 16.1798C27.0819 15.7523 26.3887 15.7523 25.9612 16.1798C25.5337 16.6073 25.5337 17.3004 25.9612 17.7279L32.1537 23.9204L25.9612 30.1129C25.5337 30.5404 25.5337 31.2335 25.9612 31.661C26.3887 32.0885 27.0819 32.0885 27.5094 31.661L34.4759 24.6945ZM13.5566 25.0151L33.7018 25.0151L33.7018 22.8257L13.5566 22.8257L13.5566 25.0151Z" fill="white"/>
                                    </svg>
                            </button>
          </div>

        <div className="col-md-12 mt-5">
          <Slider ref={slider} {...settings}>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group1231.png"
                  alt="group1231"
                  className="w-100"
                />
                <h4>Full Stack Native App Development Services</h4>
                <p>
                  With years of dedicated experience, Cynergy Studios has
                  accompanied leading industries with powerful strategies to
                  rank the title among large enterprises. Our native mobile app
                  development services create platform-specific apps with modern
                  features and smooth functionality to upgrade digital presence.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4523.png"
                  alt="group4523"
                  className="w-100"
                />
                <h4>Tablet App Development Services</h4>
                <p>
                  Tablet Native apps can also be built for multiple Apple
                  devices such as tablets and iPads. In modern technology,
                  developing tablet apps are still in immense demand. With years
                  of successful experience the native app development company
                  Cynergy Studios has provided comprehensive native app
                  development services
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group2352.png"
                  alt="group2352"
                  className="w-100"
                />
                <h4>Android App Development Services</h4>
                <p>
                  Native apps for Android platforms are created using a
                  streamlined, single-code development process. They form
                  different approaches and specific Android programming
                  languages i.e. Kotlin or Java. You can create native mobile
                  apps for both mobile and desktop.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4232.png"
                  alt="group4232"
                  className="w-100"
                />
                <h4>IPad App Development Services</h4>
                <p>
                  When you’re establishing a native app for iPads, the mere
                  supremacy lies with its immersive layouts. Here, you just have
                  to take a large canvas to create more complex apps under
                  split-screen functionality. Additionally, a major advantage is
                  that you only need to develop
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeCommitSlider;

"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const CaseStudySlider = () => {
    const slider = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowAltCircleRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowAltCircleLeft />
            </div>
        );
    }

    return (
        <>
            <div className="case-studies-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="mainHeadingMobile">Case Studies</h2>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end gap-2">
                            <div className="second-btn ps-4 pe-4 py-2">
                                All Work
                            </div>
                            <button className="interactiveBtn" onClick={() => slider?.current?.slickPrev()}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.4237" cy="23.4237" r="23.4237" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.34082 0.496582)" fill="white"/>
                                        <path d="M12.9177 24.6945C12.4902 24.267 12.4902 23.5739 12.9177 23.1464L19.8842 16.1798C20.3117 15.7523 21.0048 15.7523 21.4323 16.1798C21.8598 16.6073 21.8598 17.3004 21.4323 17.7279L15.2398 23.9204L21.4323 30.1129C21.8598 30.5404 21.8598 31.2335 21.4323 31.661C21.0048 32.0885 20.3117 32.0885 19.8842 31.661L12.9177 24.6945ZM33.8369 25.0151L13.6917 25.0151L13.6917 22.8257L33.8369 22.8257L33.8369 25.0151Z" fill="#DC5F00"/>
                                        </svg>

                            </button>
                            <button className="interactiveBtn" onClick={() => slider?.current?.slickNext()}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.629" cy="23.9203" r="23.4237" transform="rotate(90 23.629 23.9203)" fill="#DC5F00"/>
                                    <path d="M34.4759 24.6945C34.9034 24.267 34.9034 23.5739 34.4759 23.1464L27.5094 16.1798C27.0819 15.7523 26.3887 15.7523 25.9612 16.1798C25.5337 16.6073 25.5337 17.3004 25.9612 17.7279L32.1537 23.9204L25.9612 30.1129C25.5337 30.5404 25.5337 31.2335 25.9612 31.661C26.3887 32.0885 27.0819 32.0885 27.5094 31.661L34.4759 24.6945ZM13.5566 25.0151L33.7018 25.0151L33.7018 22.8257L13.5566 22.8257L13.5566 25.0151Z" fill="white"/>
                                    </svg>

                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Slider ref={slider} {...settings}>
                                <div className="slide-item">
                                    <img src="./images/blog-1.png" alt="Case 1" className="w-100" />
                                    <h2 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>ASL Flurry</h2>
                                    <p className="paragraphText">ASL Flurry is an educational app designed.</p>
                                </div>
                                {/* <div className="slide-item">
                                    <img src="./images/blog-2.png" alt="Case 2" className="w-100" />
                                    <h3 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>The Fortune Teller App by Full Moon</h3>
                                    <p className="paragraphText">The Fortune Teller App by Full Moon offers.</p>
                                </div> */}
                                <div className="slide-item">
                                    <img src="./images/blog-3.png" alt="Case 3" className="w-100" />
                                    <h3 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>Eksperience MyApp</h3>
                                    <p className="paragraphText">Eksperience MyApp is a versatile</p>
                                </div>
                                <div className="slide-item">
                                    <img src="./images/blog-1.png" alt="Case 1" className="w-100" />
                                    <h2 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>ASL Flurry</h2>
                                    <p className="paragraphText">ASL Flurry is an educational app designed.</p>
                                </div>
                                <div className="slide-item">
                                    <img src="./images/blog-3.png" alt="Case 3" className="w-100" />
                                    <h3 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>Eksperience MyApp</h3>
                                    <p className="paragraphText">Eksperience MyApp is a versatile</p>
                                </div>
                                {/* <div className="slide-item">
                                    <img src="./images/blog-2.png" alt="Case 4" className="w-100" />
                                    <h3 className="mt-4" style={{fontWeight:'300',fontSize:'30px'}}>The Fortune Teller App by Full Moon</h3>
                                    <p className="paragraphText">The Fortune Teller App by Full Moon offers.</p>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudySlider;

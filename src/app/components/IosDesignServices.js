"use client";
import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import AppCard from "./appCard";

const IOSAppDesignServices = () => {
   const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const data = [
    {heading:"Modernized Design Consultancy",description:"Get recommendations on your exclusive Apple projects and scale your app store with modern app features, user experience,design, and appealing user interface. Design consultancy helps to roadmap the right path to your app idea, particularly to dispense highly intuitive."},
    {heading:"High-End UX/UI Design",description:"Apple has a unique and delusional form of design strategy to make the iOS app store up-to-date with the latest hi-techde sign formations and procedures. Here, our iOS app designers value consistency in crafting highly intrinsic apps to stand out among global businesses. easy-to-use interfaces to hook large audiences promptly."},
    {heading:"Motion Design",description:"There is fierce competition to develop attractive motion designs in the leading tech industries as it is the highest captivating format to attract users on a larger scale. It harbors powerful and essential tools to communicate with consumers or clients effectively. Our top iPhone app design team uses multiple graphic combinations."},
    {heading:"High-End UX/UI Design",description:" Apple has a unique and delusional form of design strategy to make the iOS app store up-to-date with the latest hi-tech design formations and procedures. Here, our iOS app designers value consistency in crafting highly intrinsic apps to stand out among global businesses. easy-to-use interfaces to hook large audiences promptly."},
  ]

  return (
    <div className="container IOS-services appMobilePadding">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mainHeadingMobile">IOS App Design Services</h2>
        </div>

        <div className="row">
          <div className="col-md-8">
          <p className="paragraphText">
            We create app designs that combine modern design aesthetics with
            user experience research to deliver outstanding app experiences for
            your users. Tailored to your brand and industry, our UI/UX app
            design services will help you drive user engagement and gain
            customer loyalty.
          </p>
          </div>
          <div className="col-md-4 d-flex align-items-start justify-content-end gap-2">   
          <button onClick={() => slider?.current?.slickPrev()} className="interactiveBtn" style={{border:'none',background:'white',borderRadius:'80px',padding:'0.1px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'2px 2px 4px 2px rgba(0, 0, 0, 0.25)'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.4237" cy="23.4237" r="23.4237" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.34082 0.496582)" fill="white"/>
                                        <path d="M12.9177 24.6945C12.4902 24.267 12.4902 23.5739 12.9177 23.1464L19.8842 16.1798C20.3117 15.7523 21.0048 15.7523 21.4323 16.1798C21.8598 16.6073 21.8598 17.3004 21.4323 17.7279L15.2398 23.9204L21.4323 30.1129C21.8598 30.5404 21.8598 31.2335 21.4323 31.661C21.0048 32.0885 20.3117 32.0885 19.8842 31.661L12.9177 24.6945ZM33.8369 25.0151L13.6917 25.0151L13.6917 22.8257L33.8369 22.8257L33.8369 25.0151Z" fill="#DC5F00"/>
                                        </svg>
                            </button>
                            <button onClick={() => slider?.current?.slickNext()}  className="interactiveBtn" style={{border:'none',background:'none'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.629" cy="23.9203" r="23.4237" transform="rotate(90 23.629 23.9203)" fill="#DC5F00"/>
                                    <path d="M34.4759 24.6945C34.9034 24.267 34.9034 23.5739 34.4759 23.1464L27.5094 16.1798C27.0819 15.7523 26.3887 15.7523 25.9612 16.1798C25.5337 16.6073 25.5337 17.3004 25.9612 17.7279L32.1537 23.9204L25.9612 30.1129C25.5337 30.5404 25.5337 31.2335 25.9612 31.661C26.3887 32.0885 27.0819 32.0885 27.5094 31.661L34.4759 24.6945ZM13.5566 25.0151L33.7018 25.0151L33.7018 22.8257L13.5566 22.8257L13.5566 25.0151Z" fill="white"/>
                                    </svg>
                            </button>
          </div>
        </div>

        <div className="col-md-4">
        </div>

        <div className="col-md-12 mt-5">
          <Slider ref={slider} {...settings}>

            {data.map((item,i)=>(
                <div key={i}>
                  <AppCard isSlider={true} height={255} hoverEffect="effect1" heading={item.heading} description={item.description} />
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default IOSAppDesignServices;

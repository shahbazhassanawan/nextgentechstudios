"use client";
import React, {useState} from "react";
import Popup from "./Popup";

const AppCta = ({CtaHeading}) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
    };
  return (
    <>
      {isPopupVisible && <Popup togglePopup={togglePopup} />}
      <div style={{position: "relative"}} className="container">
        <div className="row app-cta">
          <div className="col-md-1"></div>
          <div  className="col-md-6">
            <h2 className="innovativeHeading">
              {/* {CtaHeading} */}
              into an Innovative <br /> Mobile App.
            </h2>
            <button className="btn-schedule" onClick={togglePopup}>
              Contact Us
            </button>
          </div>
          <div className="col-md-5">
            <img
              src="./images/mobile-cta.png"
              alt="mobile-cta"
              className="w-100 mobile-cta"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCta;

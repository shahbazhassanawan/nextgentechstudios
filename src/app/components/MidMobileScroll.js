"use client";
import React, { useEffect, useState } from "react";

function MidMobileScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const section = document.querySelector(".mid-mobile-scroll");

    if (section) {
      setOffsetTop(section.offsetTop);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= offsetTop) {
        setScrollY(currentScrollY - offsetTop);
      } else {
        setScrollY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop]);

  return (
    <>
      <div className="container-fluid mid-mobile-scroll">
        <div className="row">
          <div className="col-md-2 d-flex justify-content-between flex-column">
            <div className="div-1">
              <div className="divider"></div>
              <h3>01</h3>
            </div>
            <div className="div-1">
              <div className="divider"></div>
              <p>
                Users who are satisfied with the interface and experience of the
                app.
              </p>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <h2>
              DENTAL
              <br />
              &nbsp;&nbsp;&nbsp;HEALTH
            </h2>
            <img
              src="/images/mobile-navs.png"
              alt="mobile-navs"
              className="mobile-navs"
              style={{
                transform: `translateX(${120 + scrollY * 0.4}%) rotate(${
                  scrollY * 0.4
                }deg)`,
              }}
            />
          </div>
          <div className="col-md-2 d-flex justify-content-between flex-column">
            <div className="div-1 d-flex justify-content-end align-items-end flex-column">
              <div className="divider"></div>
              <h4>Your Text Goes Here.</h4>
            </div>
            <div></div>
            <div></div>
            <div className="pt-5 mt-5 div-1 border-bottom pe-1">
              <h4 className="text-end">Your Text Goes Here.</h4>
            </div>
            <div className="mt-5 div-1 border-bottom pe-1">
              <h4 className="text-end">Your Text Goes Here.</h4>
            </div>
            <div className="mt-5 div-1 border-bottom pe-1">
              <h4 className="text-end">Your Text Goes Here.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MidMobileScroll;

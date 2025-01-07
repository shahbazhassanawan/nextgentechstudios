import Link from "next/link";
import React from "react";

const InnerCta = () => {
  return (
    <>
      <div className="inner-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2>
                Have more questions or ready to <span> start building</span>{" "}
                <br />
                your dream product?
              </h2>
              <Link href="/contact-us">
                <button>Contact us</button>
              </Link>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerCta;

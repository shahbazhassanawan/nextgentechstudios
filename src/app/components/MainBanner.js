import React from "react";

const MainBanner = ({ MainBannerHeading }) => {
  return (
    <>
      {/* <div className="app-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 bannerContainer" style={{height: "360px"}}>
            <h1 className="mb-4 bannerHeading" dangerouslySetInnerHTML={{ __html: MainBannerHeading }} />
            </div>
            <div className="col-md-4"></div>
          </div>
          <hr />
        </div>
      </div> */}

      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
             <h1 dangerouslySetInnerHTML={{ __html: MainBannerHeading }} />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

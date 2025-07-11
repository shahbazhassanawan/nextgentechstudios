import React from "react";

function MarqueeSlider() {
  const marqueeItems = [
    {
      src: "./images/trustees/client-1.png",
    },
    {
      src: "./images/trustees/client-2.png",
    },
    {
      src: "./images/trustees/client-3.png",
    },
    {
      src: "./images/trustees/client-4.png",
    },
    {
      src: "./images/trustees/client-5.png",
    },
    {
      src: "./images/trustees/client-6.png",
    },
    // {
    //   src: "./images/trustees/client-7.png",
    // },
  ];

  const duplicatedMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="marquee-slider mt-5">
            <div className="marquee-content">
              {duplicatedMarqueeItems.map((item, index) => (
                <div className={`item ${item.class}`} key={index}>
                  <img src={item.src} alt="Client logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSlider;

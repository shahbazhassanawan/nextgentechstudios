import React from "react";
import Link from "next/link";

function HotspotSection() {
  return (
    <>
      <div className="container-fluid hotspotSection">
        <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="contactContainer">
              <h2 className="fw-bold text60">
                <strong>
                  Let&apos;s Start <br /> Working Together.
                  <br /> Get In Touch!
                </strong>
              </h2>
              <Link href="#" className="btn">
                Make An Appointment
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mapContainer">
              <img
                src="/images/worldMap.png"
                alt="World Map"
                className="mapImage"
              />
              <div className="hotspot" style={{ top: "12%", left: "29%" }}>
                <div className="label">
                  <h6>USA</h6>
                  <p>
                    1 E Erie St Ste 525 Chicago, IL 60611
                  </p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "-0.2%", left: "55%" }}>
                <div className="label">
                  <h6>UK</h6>
                  <p>
                  82 King St Manchester M2 4WQ, UK
                  </p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "27%", left: "69.5%" }}>
                <div className="label">
                  <h6>UAE</h6>
                  <p>1 E Erie St Ste 525, IL 60611</p>
                </div>
                <div className="marker"></div>
              </div>
              {/* <div className="hotspot" style={{ top: "7%", left: "73%" }}>
                <div className="label">
                  <h6>UAE</h6>
                  <p>
                    82 King Street, Manchester, <br /> Lancashire, M2 4WQ,
                    United
                    <br /> Kingdom
                  </p>
                </div>
                <div className="marker"></div>
              </div> */}
              <div className="hotspot" style={{ top: "33%", left: "89%" }}>
                <div className="label">
                  <h6 style={{ width: "100px" }}>AUSTRALIA</h6>
                  <p>
                    8 Elnorea Road, Noble park North, Victoria, Australia 3174
                  </p>
                </div>
                <div className="marker"></div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default HotspotSection;

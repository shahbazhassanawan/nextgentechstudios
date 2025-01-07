"use client";
import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

function GrowthSec() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container text-center growthfirst-sec" ref={sectionRef}>
      <div className="row">
        <h2>Bespoke Software For Your Growth</h2>

        <div className="col-md-2 border-end">
          <h4>
            {inView && <CountUp start={0} end={90} suffix="%" duration={2} />}
          </h4>
          <p>Of Clients Approval Initial Design</p>
        </div>

        <div className="col-md-2 border-end">
          <h4>
            {inView && <CountUp start={0} end={10} suffix="+" duration={2} />}
          </h4>
          <p>Million users of app we made</p>
        </div>

        <div className="col-md-2 border-end">
          <h4>
            {inView && (
              <CountUp start={0} end={150} prefix="$" suffix="m" duration={2} />
            )}
          </h4>
          <p>Raised by our startup clients</p>
        </div>

        <div className="col-md-2 border-end">
          <h4>
            {inView && <CountUp start={0} end={350} suffix="+" duration={2} />}
          </h4>
          <p>Finished Projects</p>
        </div>

        <div className="col-md-2 border-end">
          <h4>
            {inView && <CountUp start={0} end={5} suffix="+" duration={2} />}
          </h4>
          <p>Years of experience</p>
        </div>

        <div className="col-md-2">
          <h4>
            {inView && <CountUp start={0} end={20} suffix="+" duration={2} />}
          </h4>
          <p>Million users of app we made</p>
        </div>
      </div>
    </div>
  );
}

export default GrowthSec;

"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useEffect, useRef } from "react";
import RecentNews from "../components/RecentNews";
import CaseStudy from "../components/CaseStudy";
import CaseStudySlider from "../components/CaseStudySlider";

function page() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } else {
            entry.target.classList.remove("is-active");
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      {/* Main Banner */}
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>How We Do It</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-5">
            <Tabs>
              <TabList>
                <Tab>Our Process</Tab>
                {/* <Tab>Agile</Tab>
                <Tab>Waterfall</Tab>
                <Tab>Hybrid</Tab> */}
              </TabList>

              <div className="tab-pannell rounded">
                <TabPanel>
                  <div className="row">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>01</h2>
                    </div>
                    <div className="col-md-9">
                      <h3>PHASE A - R&D</h3>
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Specifications & <span> Planning</span>
                          </h4>
                        </div>
                        <div className="col-md-8 pe-3">
                          <h5>
                            Holistic Approach to Website and App Development
                          </h5>
                          <p>
                            At Cynergy Studios, we employ a thorough and
                            collaborative approach to our website and app
                            development process. Through a series of structured
                            discovery sessions, we create a detailed
                            specifications document that outlines our project
                            objectives clearly.
                          </p>
                          <strong>
                            <ul>
                              <li>What are we developing?</li>
                              <li>Who are the intended users?</li>
                              <li>What features will be included?</li>
                              <li>
                                Which languages, frameworks, and services should
                                we utilize to balance cost and functionality?
                              </li>
                            </ul>
                          </strong>
                          <p>
                            Our team of experts actively supports this process
                            by providing:
                          </p>
                          <ul>
                            <li>
                              Feature Recommendations: For instance, we may
                              suggest incorporating an admin panel to monitor
                              user engagement and analytics.
                            </li>
                            <li>
                              Cost-Effective Solutions: We apply the 80/20
                              principle, identifying opportunities to develop
                              similar features at a lower cost without
                              sacrificing quality.
                            </li>
                          </ul>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[1] = el)}
                    >
                      <h2>02</h2>
                    </div>
                    <div className="col-md-9">
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Designs, <span> Wireframe</span> & Prototype
                          </h4>
                        </div>
                        <div className="col-md-8 pe-3">
                          <h5>Designs, Wireframes & Prototypes</h5>
                          <p>
                            Building on our specifications, we craft an
                            aesthetically pleasing wireframe and prototype.
                            <br />
                            Once the initial design is ready, we conduct a
                            collaborative walkthrough, allowing us to interact
                            with the prototype and ensure that it aligns with
                            our vision for the final product in both look and
                            feel.
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[2] = el)}
                    >
                      <h2>03</h2>
                    </div>
                    <div className="col-md-9">
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Estimates &<span>Timeline</span>
                          </h4>
                        </div>
                        <div className="col-md-8 pe-3">
                          <h5>Estimates & Timeline</h5>
                          <p>
                            After finalizing the specifications and designs, we
                            develop a comprehensive estimate that outlines the
                            project costs along with a timeline for deployment.
                          </p>
                          <p>
                            This estimate is flexible, allowing for adjustments
                            by adding or removing optional features to align
                            with your budgetary requirements.
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Agile</h2>
                  <p>Content for Agile tab.</p>
                </TabPanel>
                <TabPanel>
                  <h2>Waterfall</h2>
                  <p>Content for Waterfall tab.</p>
                </TabPanel>
                <TabPanel>
                  <h2>Hybrid</h2>
                  <p>Content for Hybrid tab.</p>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CaseStudySlider />
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>
      <Footer />
    </>
  );
}

export default page;

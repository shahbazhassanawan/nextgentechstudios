import React from "react";
import Link from "next/link";

function Evolution() {
  return (
    <>
    <section className="evolution-sec">
      <div className="container">
        <div className="evolution-head">
          <h2>Step Inside Our Evolution Lab</h2>
        </div>
        <div className="phase_a">
          <div className="phase_a-head">
            <h4>PHASE A</h4>
          </div>
          <div className="phase_a-first-row">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <div className="phase_a-first-col">
                  <div className="dot-container">
                    <div className="dot"></div>
                  </div>
                  <img
                    src="/images/clipboard.png"
                    alt="Specifications & Planning"
                  />
                  <h3>Specifications & Planning</h3>
                  <p>Dive into the specs to:</p>
                  <ul>
                    <li>Solidify what is being built so we are aligned.</li>
                    <li>
                      Research libraries and services that will be integrated
                      with the software.
                    </li>
                    <li>
                      Decide on coding language architecture and other unique
                      elements.
                    </li>
                  </ul>
                    <a
                    
                    target="_blank"
                    href="https://www.figma.com/design/0B1dqt4hJ4WqW3HR5glJRo/Project---Four-Elements---Final-File?node-id=0-1&node-type=canvas&t=Bqf8eBgtvtNICCQ5-0">
                  <button type="button" className="whole-btn2">
                    <img
                      src="/images/linkbtn.png"
                      alt="Specifications & Planning"
                      className="btn-link"
                      />
                    View Specifications
                  </button>
                      </a>
                </div>
              </div>
            </div>
          </div>
          <div className="phase_a-second-row">
            <div className="row">
              <div className="col-sm-6">
                <div className="phase_a-second-col">
                  <div className="dot-container">
                    <div className="dot"></div>
                  </div>
                  <img
                    src="/images/prototype.png"
                    alt="Designs, Wireframe & Prototype"
                  />
                  <h3>Designs, Wireframe & Prototype</h3>
                  <p>
                    Build out designs to determine what the software/app/website
                    will look like, and how it will function (and make it
                    beautiful).
                  </p>
                  <a
                    href="https://www.figma.com/design/0B1dqt4hJ4WqW3HR5glJRo/Project---Four-Elements---Final-File?node-id=0-1&node-type=canvas&t=Bqf8eBgtvtNICCQ5-0"
                    target="_blank"
                    class="whole-btn2"
                    style={{ marginRight: 15 }}
                  >
                    <img
                      src="/images/linkbtn.png"
                      alt="Specifications & Planning"
                      className="btn-link"
                    />
                    Wireframe
                  </a>
                  <a
                    href="https://www.figma.com/proto/FcoNpNKsCP1pWMmlSFoP8j/Project---Four-Elements---Prototype?page-id=0%3A1&node-id=1-5277&node-type=canvas&viewport=1885%2C3497%2C0.73&t=RNnX7HkfZoIY10L0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5277"
                    target="_blank"
                    class="whole-btn2"
                  >
                    <img
                      src="/images/linkbtn.png"
                      alt="Specifications & Planning"
                      className="btn-link"
                    />
                    Prototype
                  </a>

                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
          <div className="phase_a-third-row">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <div className="phase_a-third-col">
                  <div class="dot-container">
                    <div class="dot"></div>
                  </div>
                  <img
                    src="/images/Groupthree.png"
                    alt="Specifications & Planning"
                  />
                  <h3>Estimates & Timeline</h3>
                  <p>
                    Using all the information from the specs and designs, we
                    build a spreadsheet estimating all the tasks involved,
                    timeline and total cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="phase_b">
          <div className="phase_b-head">
            <h4>PHASE B</h4>
          </div>
          <div className="phase_b-process">
            <div className="phase_b-first-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-first-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/buildicon.png"
                      alt="Designs, Wireframe & Prototype"
                    />

                    <h3>Build</h3>
                    <p>
                      Engineers build the software, adding new features, fixing
                      old features & constantly improving code architecture &
                      scalability.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="phase_b-second-row">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="phase_b-second-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/testicon.png"
                      alt="Specifications & Planning"
                    />
                    <h3>Test</h3>
                    <p>
                      QA tests the latest build, identifying any bugs that need
                      to be fixed or features that need improving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="phase_b-third-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-third-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/deploy.png"
                      alt="Designs, Wireframe & Prototype"
                    />
                    <h3>Deploy</h3>
                    <p>
                      {" "}
                      Our deployment engineers release the newest build to the
                      testing platforms, or live, to the App Store, Google Play
                      store or website.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="phase_b-forth-row">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="phase_b-forth-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/measure.png"
                      alt="Specifications & Planning"
                    />
                    <h3>Measure</h3>
                    <p>
                      QA tests the latest build, identifying any bugs that need
                      to be fixed or features that need improving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase_b-inprocess">
            <div className="phase_b-fifth-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-fifth-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/maintain.png"
                      alt="Designs, Wireframe & Prototype"
                    />
                    <h3>Maintain</h3>
                    <p>
                      Should we exit the software development loop, we have
                      lightweight plans available for continued, long-term
                      maintenance.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
          <div className="dive_button">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 text-center">
                <Link href="/how-we-do-it">
                <button type="button" className="dive_buttons">
                  Deep Dive Into Our Process
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Evolution;

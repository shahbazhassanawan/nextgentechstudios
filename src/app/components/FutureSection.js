import React from "react";

function FutureSection() {
  return (
    <section className="future-mobile">
      <div className="container">
        <div className="future-head">
          <h2>We Build The Future of Mobile Experiences</h2>
        </div>

        <div className="main-process">
          <div className="row process-01">
            <div className="col-md-6">
              <img
                src="./images/span-01.svg"
                alt="process-01"
                className="w-100 pe-5"
              />
            </div>
            <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
              <div>
                <h2>
                  <strong>App and Web Design</strong>
                </h2>
                <p>
                  After reviewing your idea or project, our skilled mobile app
                  designers will craft a stunning wireframe and clickable
                  prototype, showcasing your concept with color and brand
                  elements
                </p>
              </div>
            </div>
          </div>
          <div className="row process-02">
            <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
              <div>
                <h2>
                  <strong>App Development</strong>
                </h2>
                Let our top developers create your iPhone, Android, or iPad app.
                <ol className="android-list">
                  <li>
                    Custom Code: Best for apps that need to scale and have
                    long-term use. We utilize React, React Native, Flutter,
                    Python, Java, Swift, Node, MongoDB, MySQL, AWS, GCP, and
                    more.
                  </li>
                  <li>
                    MVP with Low-Code: Ideal for testing ideas quickly. We use
                    platforms like Bubble and Webflow.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="./images/span-02.svg"
                alt="process-02"
                className="w-100 pe-5"
              />
            </div>
          </div>
          <div className="row process-03">
            <div className="col-md-6">
              <img
                src="./images/span-03.svg"
                alt="process-03"
                className="w-100 pe-5"
              />
            </div>
            <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
              <div>
                <h2>
                  <strong>Web app Development</strong>
                </h2>
                Top Web Development in Chichago
                <ol>
                  <li>
                    Web App: Develop a web-based version of your app idea so
                    users can conveniently access your content via computers.
                    Perfect for extending reach across platforms.
                  </li>
                  <li>
                    Website: Create a budget-friendly website using platforms
                    like WordPress, Wix, or Shopify. Ideal for marketing and
                    showcasing your product in a sleek, user-friendly manner.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureSection;

"use client";
import React, { useState } from "react";

function Trustees() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container-fluid text-center trustee">
      <h2>Trusted Customers and Partners</h2>

      {/* Tab Navigation */}
      {/* <ul className="nav justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Customers
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Partners
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Technologies
          </button>
        </li>
      </ul> */}

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {activeTab === 1 && (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-1.png" alt="logo-1" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-2.png" alt="logo-2" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-3.png" alt="logo-3" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-4.png" alt="logo-4" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-5.png" alt="logo-5" />
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="tab-pane fade show active">
            <div className="row mt-4">
              <div className="col-md-1"></div>
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-6.png" alt="logo-6" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-7.png" alt="logo-7" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="trustee-card">
                  <img src="/images/trustees/logo-8.png" alt="logo-8" />
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-1"></div>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="tab-pane fade show active">
            <div className="row mt-4">
              {/* Add more logos or content for Tab 3 here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trustees;

"use client";
import React, { useState } from "react";

const MobileAppTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Android",
      images: [
        "./images/work-tabs/java.png",
        "./images/work-tabs/kotlin.png",
        "./images/work-tabs/android.png",
        "./images/work-tabs/visual-studios.png",
      ],
      texts: ["Java", "Kotlin", "Android Studio", "Visual Studio"],
    },
    {
      label: "IOS",
      images: [
        "./images/work-tabs/swift.png",
        "./images/work-tabs/redux.png",
        "./images/work-tabs/obj-c.png",
        "./images/work-tabs/xcode.png",
      ],
      texts: ["Swift", "Redux", "Objective-C", "Xcode"],
    },
    {
      label: "Cross-Platform",
      images: [
        "./images/work-tabs/react.png",
        "./images/work-tabs/flutter.png",
        "./images/work-tabs/lonic.png",
        "./images/work-tabs/xamarin.png",
      ],
      texts: ["React", "Flutter", "Lonic", "Xamarin"],
    },
    {
      label: "PWA",
      images: [
        "./images/work-tabs/react.png",
        "./images/work-tabs/redux.png",
        "./images/work-tabs/angular.png",
        "./images/work-tabs/vue-js.png",
      ],
      texts: ["React", "Redux", "Angular", "Vue Js"],
    },
    {
      label: "Other Tools",
      images: [
        "./images/work-tabs/firebase.png",
        "./images/work-tabs/postgre-sql.png",
        "./images/work-tabs/github.png",
        "./images/work-tabs/apche-jmeter.png",
      ],
      texts: ["Firebase", "Postgre SQL", "Github", "Apache Jmeter"],
    },
  ];

  return (
    <div className="MobileAppTabs appMobilePadding">
      <div className="container">
        <h2 className="text-center mainHeadingMobile">
          Mobile app development
          <br /> technologies we use
        </h2>
        <p className="text-center paragraphText">
          The top management of Cynergy Studios characterizes each support and
          maintenance step with beneficial
          <br />
          processes to streamline the app&apos;s performance and potency with
          clarity.
        </p>
        <div className="row">
          <div className="col-md-12">
            <ul className="tabs">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={activeTab === index ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tab-content">
              {tabs[activeTab].images.map((image, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center gap-2"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="tab-image"
                  />
                  <h4>{tabs[activeTab].texts[index]}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppTabs;

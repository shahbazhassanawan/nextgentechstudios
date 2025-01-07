import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const PopupMenu = ({ togglePopup }) => {
  // Tabs content (same as before)
  const tabsContent = {
    development: {
      heading: "Development",
      links: [
        { href: "/web-app-development", text: "Web App Development Services" },
        { href: "/pwa-development", text: "PWA Development Services" },
        { href: "/native-app-development", text: "Native App Development Service" },
        { href: "/mobile-game-development", text: "Mobile Game Development Services" },
      ],
      links2: [
        { href: "/ios-development", text: "IOS Development Services" },
        { href: "/android-development", text: "Android Development Services" },
        { href: "/no-code-development", text: "No Code/Low Code Development Services" },
        { href: "/ai-app-development", text: "AI App Development Services" },
      ],
    },
    design: {
      heading: "Design",
      links: [
        { href: "/android-app-design", text: "Android App Design Services" },
        { href: "/ios-app-design", text: "iOS App Design Services" },
      ],
      links2: [
        { href: "/mobile-app-design", text: "Mobile App Design Services" },
      ],
    },
    maintenance: {
      heading: "Maintenance & Consulting",
      links: [
        { href: "/mobile-app-consulting", text: "Mobile App Consulting Services" },
        { href: "/mobile-app-support", text: "Mobile App Support & Maintenance Services" },
      ],
      links2: [
        { href: "/mobile-app-testing", text: "Mobile App Testing Services" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("development");

  return (
    <div className="popup-overlay" onClick={togglePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={togglePopup}>
          <FaTimes />
        </button>
        <div className="popup-header">
          <h2>What We Do</h2>
        </div>
        <div className="popup-body">
          <div className="tabs">
            {/* Tab links to switch between different categories */}
            <button
              onClick={() => setActiveTab("development")}
              className={activeTab === "development" ? "active" : ""}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={activeTab === "design" ? "active" : ""}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("maintenance")}
              className={activeTab === "maintenance" ? "active" : ""}
            >
              Maintenance & Consulting
            </button>
          </div>

          {/* Render links based on the selected tab */}
         
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;

"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Popup from "./Popup";
import PopupMenu from "./PopupMenu";
import appStore from "../../store/store";

function Header() {
  const [activeTab, setActiveTab] = useState("development");
  const [isOpen, setIsOpen] = useState(false); // Use a single state for toggling both menus
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for controlling dropdown visibility
  const [showButton, setShowButton] = useState(false); // State for scroll button
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);
  const { showScroll } = appStore();

  const tabsContent = {
    development: {
      heading: "Development",
      links: [
        // { href: "/ai-app-development", text: "AI & Ml Development" },
        { href: "/android-development", text: "Android Development " },
        { href: "/ios-development", text: "IOS Development " },
        { href: "/no-code-development", text: "No Code/Low Code Development " },
      ],
      links2: [
        { href: "/mobile-game-development", text: "Mobile Game Development " },
        { href: "/native-app-development", text: "Native App Development" },
        { href: "/pwa-development", text: "PWA Development " },
        { href: "/web-app-development", text: "Web App Development " },
      ],
     
    },
    design: {
      heading: "Design",
      links: [
        { href: "/android-app-design", text: "Android App Design " },
        { href: "/ios-app-design", text: "iOS App Design " },
      ],
      links2: [
        { href: "/mobile-app-design", text: "Mobile App Design " },
      ],
    },
    maintenance: {
      heading: "Maintenance & Consulting",
      links: [
        { href: "/mobile-app-consulting", text: "Mobile App Consulting " },
        { href: "/mobile-app-support", text: "Mobile App Support & Maintenance " },
      ],
      links2: [
        { href: "/mobile-app-testing", text: "Mobile App Testing " },
      ],
    },
  };
  
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Handle scroll event for button visibility
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle both the mobile menu and full-screen menu
  };


  const toggleNavbarMobile = (e) => {
 setActiveTab(e)
    // setIsOpen(!isOpen)
    // setDropdownOpen(!dropdownOpen)
    setIsPopupVisible2(!isPopupVisible2); // Toggle both the mobile menu and full-screen menu
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown for mobile
  };

  const isActive = (href) => {
    return pathname === href ? "active" : "";
  };

  return (
    <>
      <header className="navbar navbar-expand-lg">
        <div className="container-fluid" id="header">
          <Link href="/">
            <img
              className="logo"
              src={theme === "light" ? "/images/black-Logo.png" : "/images/white-Logo.png"}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "d-none" : ""}`}  // Show/hide navbar based on isOpen
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav m-auto ${isOpen ? "d-none" : ""}`}>
              <div className="navigation">
                <ul>
                <li className="nav-item">
                <div className="what-we-do-container">
                <Link href="#" className="what-we-do navHeading">
                        What We Do
                      </Link>

                      <div className="mega_menu">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4 mid-mega-option">
                              <a
                                onMouseEnter={() => setActiveTab("development")}
                                className={
                                  activeTab === "development" ? "active" : ""
                                }
                              >
                                Development
                              </a>
                              <a
                                onMouseEnter={() => setActiveTab("design")}
                                className={
                                  activeTab === "design" ? "active" : ""
                                }
                              >
                                Design
                              </a>
                              <a
                                onMouseEnter={() => setActiveTab("maintenance")}
                                className={
                                  activeTab === "maintenance" ? "active" : ""
                                }
                              >
                                Maintenance & Consulting
                              </a>
                            </div>
                            <div className="col-md-7">
                              <div className="right-mega-menu">
                                <h2>{tabsContent[activeTab].heading}</h2>
                                <div className="d-flex pb-5">
                                  <ul>
                                    {tabsContent[activeTab].links.map(
                                      (link, index) => (
                                        <div>
                                           {(activeTab == 'development' && index === 0) && <li>
                                                                        <Link href={"/ai-app-development"} style={{fontWeight:'800'}} className={isActive('/ai-app-development')}>
                                                                           AI & Ml Development 
                                                                          <div className="top-button"><h4 style={{fontSize: "15px",margin:"0px"}}>Top</h4></div>
                                                                           </Link>
                                                                         </li>}
                                        <li key={index}>
                                          <Link
                                          style={{fontWeight:'800'}}
                                            href={link.href}
                                            className={isActive(link.href )}
                                          >
                                            {link.text}
                                          </Link>
                                        </li>
                                        </div>
                                      )
                                    )}
                                  </ul>
                                  <ul>
                                    {tabsContent[activeTab].links2.map(
                                      (link, index) => (
                                        <li key={index}>
                                          <Link
                                          style={{fontWeight:'800'}}
                                            href={link.href}
                                            className={isActive(link.href)}
                                          >
                                            {link.text}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                  </li>
                
                  <li>
                    <Link
                      href="/how-we-do-it"
                      className={`${isActive("/how-we-do-it")} navHeading`}
                    >
                      How We Do It
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/achievements"
                      className={`${isActive("/achievements")} navHeading`}
                    >
                      Achievements
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="buttons">
              <Link href="/contact-us">
                <button className="second-btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Button to toggle the full-screen menu */}
      <div className={`bars-btn-container ${(showButton && !showScroll) ? "show" : ""}`}>
        <button className="bars-btn" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Full-screen menu */}
      <div className={`main-full-menu ${isOpen ? "menu-active" : ""}`}>
        <div className="row h-100">
          <div className="col-md-8 h-100 right-main-menu">
            <Link href="/">
              <img
                src={theme === "light" ? "./images/black-Logo.png" : "./images/white-Logo.png"}
                alt="Logo"
              />
            </Link>
            <ul className="main-ul-li">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
             <li>
            <Link href="#" onClick={toggleDropdown}>What We Do</Link>
            {dropdownOpen && (
                <div className="col-md-12 mid-mega-option">
                  <ul>
                  <li>
                                <a
                                // onClick={toggleNavbarMobile}
                                onClick={() => toggleNavbarMobile("development")}

                                  className={activeTab === "development" ? "active" : ""}
                                >
                                  Development
                                </a>
                                {isPopupVisible2 && 
                                                                <div className="col-md-12 right-mega-menu ">
                                                                {/* <h2>{tabsContent[activeTab]?.heading || "Select a Category"}</h2> */}
                                                                <div className="mobile-menu-updated mobile-popup">
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links?.map((link, index) => (
                                                                    
                                                                         
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                  ))}
                                                                  </ul>
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links2?.map((link, index) => (
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                    ))}
                                                                  </ul>
                                                                </div>
                                                              </div>
                                }

                                </li>
                                <li>
                                <a
                                  // onMouseEnter={() => setActiveTab("design")}
                                  className={activeTab === "design" ? "active" : ""}
                                onClick={() => toggleNavbarMobile("design")}

                                >
                                  Design
                                </a>
                                {isPopupVisible2 && 
                                                                <div className="col-md-12 right-mega-menu ">
                                                                {/* <h2>{tabsContent[activeTab]?.heading || "Select a Category"}</h2> */}
                                                                <div className="mobile-menu-updated mobile-popup">
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links?.map((link, index) => (
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                    ))}
                                                                  </ul>
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links2?.map((link, index) => (
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                    ))}
                                                                  </ul>
                                                                </div>
                                                              </div>
                                }

                                </li>
                                <li>
                                <a
                                  // onMouseEnter={() => setActiveTab("maintenance")}
                                  className={activeTab === "maintenance" ? "active" : ""}
                                  onClick={() => toggleNavbarMobile("maintenance")}

                                >
                                  Maintenance & Consulting
                                </a>
                                {isPopupVisible2 && 
                                                                <div className="col-md-12 right-mega-menu ">
                                                                {/* <h2>{tabsContent[activeTab]?.heading || "Select a Category"}</h2> */}
                                                                <div className="mobile-menu-updated mobile-popup">
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links?.map((link, index) => (
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                    ))}
                                                                  </ul>
                                                                  <ul>
                                                                    {tabsContent[activeTab]?.links2?.map((link, index) => (
                                                                      <li key={index}>
                                                                        <Link href={link.href} className={isActive(link.href)}>
                                                                          {link.text}
                                                                        </Link>
                                                                      </li>
                                                                    ))}
                                                                  </ul>
                                                                </div>
                                                              </div>
                                }

                                </li>
                                </ul>
                              </div>
            )}
            

            
          </li>
              <li><Link href="/achievements">Achievements</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>

            <ul className="social-media">
              <li><FaFacebookF /></li>
              <li><FaInstagram /></li>
              <li><FaLinkedinIn /></li>
            </ul>
          </div>
          <div className="col-md-4 left-menu-img h-100"></div>
        </div>
      </div>

      {/* Mobile Sidebar
      <div className={`mobile-sidebar ${dropdownOpen ? "open" : ""}`}>
        <div className="div-header">
          <Link className="navbar-brand" href="/">
            <img src="./images/white-Logo.png" alt="MainLogo" />
          </Link>
          <button className="close-btn" onClick={toggleNavbar}>
            <RxCross1 />
          </button>
        </div>
        <ul className="navbar-nav">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About</Link></li>
          <li>
            <Link href="#" onClick={toggleDropdown}>What We Do</Link>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link href="/web-app-development">Web App Development</Link>
                <Link href="/pwa-development">PWA Development</Link>
                <Link href="/mobile-app-development">Mobile App Development</Link>
              </div>
            )}
          </li>
          <li><Link href="/how-we-do-it">How We Do It</Link></li>
          <li><Link href="/achievements">Achievements</Link></li>
          <li><Link href="/faqs">FAQs</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </div> */}

      {isPopupVisible && <Popup togglePopup={() => setIsPopupVisible(false)} />}
    </>
  );
}

export default Header;

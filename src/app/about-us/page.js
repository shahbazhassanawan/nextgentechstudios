import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InnerCta from "../components/InnerCta";
import RecentNews from "../components/RecentNews";
import MainBanner from "../components/MainBanner";

function Page() {
  const marqueeItems = [
    {
      src: "./images/vector-star.png",
    },
    {
      src: "./images/cynergy-studios.png",
    },
    {
      src: "./images/vector-star.png",
    },
    {
      src: "./images/cynergy-studios.png",
    },
    {
      src: "./images/vector-star.png",
    },
    {
      src: "./images/cynergy-studios.png",
    },
    // {
    //   src: "./images/trustees/client-7.png",
    // },
  ];

  const duplicatedMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <Header />
      {/* main banner */}
      {/* <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div> */}
      <MainBanner MainBannerHeading="About Us" />


      <div className="container py-4 about-middle appMobilePadding">
        <div className="row pb-5">
          {/* <h2 className="text-center mb-5 fw-bold">
            Web Design Company
            <br />
            You Can Trust
          </h2> */}
          <div className="col-md-4 text-start d-flex justify-content-center flex-column">
            <h3 className="w-100 mainHeadingMobile">
              Mobile App <br /> Development Services
            </h3>
            <p className="w-100">
              Cynergy Studios&apos; Mobile App Development Services bring your
              creative ideas to life with sleek, high-performance mobile apps.
              Our expert developers use advanced technology and industry
              knowledge to craft apps that are intuitive, engaging, and
              versatile across platforms.
              <br />
              Whether it&apos;s native, hybrid, or cross-platform solutions, we
              ensure seamless functionality across iOS, Android, and more. Our
              collaborative process keeps you involved from concept to launch,
              guaranteeing your vision shines through.
              <br />
              With strengths in UI/UX design, coding, rigorous testing, and
              ongoing support, we deliver mobile solutions that enhance user
              engagement and drive business success.
            </p>
            <button className="second-btn text-center w-50">Build Now</button>
          </div>
          <div className="col-md-4 footerSection">
            <img
              src="./images/about-middle.png"
              alt="about-middle"
              className="w-100"
            />
          </div>
          <div className="col-md-4 footerSection text-end d-flex align-items-end justify-content-center flex-column">
            <h3 className="subHeading">
              Problem-Solving Pioneers in a <br /> Strove Digital World
            </h3>
            <p>
              In today&apos;s digital age, Cynergy Studios leads the way in solving
              complex challenges with smart technological solutions. Our
              expertise spans app development, web design, and digital
              transformation, all tailored to meet diverse business needs and
              elevate efficiency.
              <br />
              Driven by innovation and data insights, we focus on crafting
              solutions that enhance user experiences and ensure clients stay
              competitive.
              <br />
              From optimizing existing systems to building custom applications,
              we turn challenges into growth opportunities, empowering
              businesses to thrive in a fast-evolving tech landscape.
            </p>
            <button className="second-btn text-center">
              Find Solutions
            </button>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6">
            <img
              src="./images/about-picture.png"
              alt="about-picture"
              className="w-100"
            />
          </div>
          <div className="col-md-6 about-text">
            <h2>
              <span>Cyne</span>
              rgy Studio
            </h2>
            <p>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.
              <br /> <br />
              We may engage trusted third party service providers to perform
              functions and provide services to us, such as hosting and
              maintaining our servers and the website, database storage and
              management, e-mail management, storage marketing, credit card
              processing, customer service and fulfilling orders for products
              and services you may purchase through the website. We will likely
              share your personal information, and possibly some non-personal
              information, with these third parties to enable them to perform
              these services for page 3/8 us and for you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.
            </p>
          </div>
        </div> */}
        {/* <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <p style={{ fontSize: "17px" }}>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.We may engage trusted third party
              service providers to perform functions and provide services to us,
              such as hosting and maintaining our servers and the website,
              database storage and management, e-mail management, storage
              marketing, credit card processing, customer service and fulfilling
              orders for products and services you may purchase through the
              website. We will likely share your personal information, and
              possibly some non-personal information, with these third parties
              to enable them to perform these services for page 3/8 us and for
              you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.We may
              share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.
              <br /> <br />
              We may engage trusted third party service providers to perform
              functions and provide services to us, such as hosting and
              maintaining our servers and the website, database storage and
              management, e-mail management, storage marketing, credit card
              processing, customer service and fulfilling orders for products
              and services you may purchase through the website. We will likely
              share your personal information, and possibly some non-personal
              information, with these third parties to enable them to perform
              these services for page 3/8 us and for you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.
            </p>
          </div>
        </div> */}
      </div>
      {/* <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h2>Digital Challenges Bow to cynergy studio Services</h2>
          </div>
          <div className="col-md-6">
            <p>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest..
            </p>
          </div>
        </div>
        <div className="row py-5">
          <img
            src="./images/mobile-ui-elements.png"
            alt="mobile-ui-elements"
            className="w-100"
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="bg-abt-orange">
              <h4>place your tittle here</h4>
              <p>
                We provide a 360-degree line to digital marketing, offering a
                comprehensive range of services covering every digital landscape
                aspect. From search engine optimization (SEO) to social media
                angles.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-abt-orange">
              <h4>place your tittle here</h4>
              <p>
                We provide a 360-degree line to digital marketing, offering a
                comprehensive range of services covering every digital landscape
                aspect. From search engine optimization (SEO) to social media
                angles.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-abt-orange">
              <h4>place your tittle here</h4>
              <p>
                We provide a 360-degree line to digital marketing, offering a
                comprehensive range of services covering every digital landscape
                aspect. From search engine optimization (SEO) to social media
                angles.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <InnerCta />
      <RecentNews />
      <Footer />
    </>
  );
}

export default Page;

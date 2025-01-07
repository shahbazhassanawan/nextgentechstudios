import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {faqData,mobileApp,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";

const page = () => {
 

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Consulting <br /> Services" />

      <div className="orange-wrap appMobilePaddingSmall">
        <div className="second-last-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 d-flex align-items-center justify-content-center pe-5">
                <div className="text-section">
                  <h2 className="title-page mainHeadingMobile">Our Value Expedition</h2>
                  <p className="paragraphText my-4">
                    The world’s preeminent ensemble Cynergy Studios, harnesses
                    the power of sustainability, believability, and solution to
                    empower business growth. We aim to bestow next-level expert
                    guidance and innovative solutions to deploy unique
                    infrastructure to your mobile and web apps. Also, you’ll
                    experience multiple opportunities at each facet of your
                    application transformation.
                    <br />
                    <br />
                    We aim to bestow next-level expert guidance and innovative
                    solutions to deploy unique infrastructure to your mobile and
                    web apps. Also, you’ll experience multiple opportunities at
                    each facet of your application transformation.
                  </p>
                 <DropUsALine />
                </div>
              </div>
              <div className="col-md-5 paddingRight3 py-2">
                <img
                  src="./images/Group1707479835.png"
                  alt="image-consulting"
                  className="h-100 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <h2 className="top-ranked text-center mb-5 mainHeadingMobile">
              Mobile App Development
              <br /> Consulting Strategies
            </h2>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Group-1707479639.png"
                alt="faqs-sec"
                className="line-image-1"
              />
              <div>
                  {mobileApp.map((item,i)=>(
                  <div className="text-section-01 mobileCardPadding" key={i}>
                  <h2 className="cardHeading">{item.heading}</h2>
                  <p className="cardDesc">
                   {item.description}
                  </p>
                  </div>
                  ))}
              </div>
            </div>
            <div className="col-md-6 paddingLeft3 py-2">
              <img
                src="./images/Group1707479662.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group986783.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3 gap-3">
            <h2 className="mainHeadingMobile mgTop25">Mobile App Optimization & Audit</h2>
            <p className="paragraphText">
              Audit plays a significant role in the development process of
              mobile app, as it tests the security measures of the mobile apps,
              and also analyzes the compliant policy and all rules and
              regulations. On the other hand, it helps in detecting security
              threats that steer to data breaches. At cynergy Studios, our
              product consulting provides thorough guidance on the testing
              capabilities of our entire process.
            </p>
            <DropUsALine />
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column pe-5 gap-3">
            <h2 className="mainHeadingMobile">Mobile App Modernization</h2>
            <p className="paragraphText">
              The use of updated technologies and procedures is a mere need in
              today’s world. Adapting and enhancing prevalent mobile project
              implementation will attract more user engagement. Whereas, mobile
              development initiatives must hold the smartest ways to craft a
              newfangled strategy for further mobile development initiatives.
              While processing new app we create state-of-the-art features to
              build highly modernized mobile projects.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6 mgTop25">
            <img src="./images/Group235483574.png" className="w-100 h-100" />
          </div>
        </div>
      </div>

      <div className="container right-let-mid appMobilePadding">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group2235467.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex mgTop25 align-items-start justify-content-center flex-column paddingLeft3 gap-3">
            <h2 className="mainHeadingMobile">Mobile App Design</h2>
            <p className="paragraphText">
              In the era of digitalization, mobile app design holds specific
              importance in the field of multiple mobile app types. It carries a
              wide range of uses, that catalyze fascinating features,
              user-accessibility, engagement rate, and overall experience of the
              apps. In the era of digitalization, mobile app design holds
              specific importance in the field of multiple mobile app types.We
              ensure cost-effective design modules for various mobile platforms
              either Native, hybrid, or cross-platform apps.
            </p>
            <DropUsALine />
          </div>
        </div>
      </div>

      <div className="orange-wrap py-5 appMobilePaddingSmall">
        <div className="container py-5 text-center">
          <h2 className="top-ranked mainHeadingMobile">Why Choose Us</h2>
          <p className="paragraphText">
            With more than a decade of unmatchable experience in mobile
            consulting projects and mobile development, cynergy <br /> Studios
            has gained a spectacular place in the terrain of digital technology.
            Here, we’ve helped multiple industries and
            <br /> brands to flourish their businesses with modernized
            strategies and produce super easiest formulas to drive growth and{" "}
            <br />
            progress in mobile and web development.
          </p>
          <div className="row">
            {whyChooseUs.map((item,i)=>(
                <div className={`col-md-4 ${i > 0 ?'mgTop25':''}`} key={i}>
                <div className="up-to-mints-div">
                  <h4 className="cardHeading text-center">{item.heading}</h4>
                  <p className="cardDesc text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Let’s Talk and Drive Business Together" />
      </div>

      <div className="my-4">
        <FaqsSection faqs={faqData} />
      </div>
      <BudgetSection />

      <Footer />
    </>
  );
};

export default page;

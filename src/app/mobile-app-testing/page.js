import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import MaintenanceProcess from "../components/MaintenanceProcess";
import MainBanner from "../components/MainBanner";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import AppCta from "../components/AppCta";
import Link from "next/link";
import {faqData,topNotch,whyCynergy} from './data'
import DropUsALine from "../components/DropUsALine";

const Page = () => {
  
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App testing<br /> Services" />

      <div className="container app-testing appMobilePadding" >
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Mobile App Testing Services</h2>
            <p className="paragraphText my-3">
              The first-class mobile testing team of cynergy Studios fabricates
              automated testing of apps to hasten effective solutions instantly.
            </p>
           <DropUsALine />
          </div>
          <div className="col-md-6 appTestRight footerSection">
            <div className="row">
              <div className="col-md-6">
                <div className="appTestBox">
                  <h4 className="cardHeading25">
                    Software Functional
                    <br /> Testing Services
                  </h4>
                  <p className="cardDesc">
                    At multiple granularity levels, functional testing ensures
                    the software’s conformity to meet the corresponding output
                    with the end-user’s expectations. The process enables the
                    quick detection of prevailing defects, system failures, and
                    function crashes of the apps. the tech industry while mobile
                    testing.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="appTestBox">
                  <h4  className="cardHeading25">
                    Software Automated
                    <br /> Testing Services
                  </h4>
                  <p className="cardDesc">
                    The testing service refers to the automated testing
                    methodology and usage of tools to execute comprehensive
                    tests of software and generate swift reports over the
                    testing measures. Here at Cynergy Studios, we conduct an
                    effective approach to build strong mobile app evaluation
                    which provides.
                  </p>
                </div>
              </div>
              <div className="col-md-6 footerSection">
                <div className="appTestBox">
                  <h4  className="cardHeading25">
                    Software Data Testing
                    <br /> Services
                  </h4>
                  <p className="cardDesc">
                    It is a process that connects Functional Testing, User
                    Interface, and data analytics of the apps to ensure data
                    transforms and implementation of business rules. It focuses
                    on the Broader Quality Assurance field to validate data
                    processes. Our exclusive mobile testing team crafts
                    cutting-edge mobile app testing solutions to satisfy clients
                    by all means
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="appTestBox">
                  <h4  className="cardHeading25">
                    Exclusive Error
                    <br /> Detection
                  </h4>
                  <p className="cardDesc">
                    In the testing phase, the level of quality assessment is
                    analyzed in mobile application testing. It can prevent from
                    bugs and serious development issues. Therefore, the skilled
                    professionals of Cynergy Studios, conduct multiple phases to
                    create an evaluation process to meet the success of the
                    mobile performance testing of the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="topNotchSection appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
              <h2 className="mainHeadingMobile">
                Top-Notch <span>Benefits</span>
              </h2>
              <p className="paragraphText">
                The first-class application testing services of Cynergy Studios
                pursue the perfection of landscape to meet the reality of
                diverse devices, and user expectations to ensure refined
                customized solutions for your apps.
              </p>

              {topNotch.map((item, index) => (
                <div key={index} className="">
                  <h4 className="cardHeading">{item.heading}</h4>
                  <p className="cardDesc">{item.description}</p>
                </div>
              ))}

           
            </div>
            <div className="col-md-6">
              <img className="imgWidth95" src="./images/Group1707479828.png" alt="Group1707479828" />
            </div>
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="TestingProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="mainHeadingMobile">Inevitable Testing Process</h2>
              <p className="paragraphText">
                The top-class mobile app testing services of Cynergy Studios
                streamline highly effective testing methodology to prevent
                disasters and provide the most reliable solutions to their
                partners and customers.The top-class mobile app testing services
                of Cynergy Studios streamline highly effective testing
                methodology to prevent disasters and provide the most reliable
                solutions to their partners and customers.
              </p>
            </div>
            <div className="col-md-3 mgBottom25 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <MaintenanceProcess />
        </div>
      </div>

      <div className="StudiosWhy appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Cynergy Studios</h2>
              <p className="paragraphText">
                The top-class mobile app testing services of Cynergy Studios
                streamline highly effective testing methodology to prevent
                disasters and provide the most reliable solutions to their
                partners and customers.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <div className="row">
            {whyCynergy.map((item,i) => (
               <div className="col-md-4 mgTop25" key={i}>
               <div className="up-to-mints-div mobileCardPadding">
                 <h4 className="text-center cardHeading">
                   {item.heading}
                 </h4>
                 <p className="text-center cardDesc">
                  {item.description}
                 </p>
               </div>
             </div>
            ))}
           
           
          </div>
        </div>
      </div>

      <AppCta CtaHeading="Into an Innovative Mobile App." />

      <div className="mt-5">
        <FaqsSection faqs={faqData} />
        <BudgetSection />
      </div>

      <Footer />
    </>
  );
};

export default Page;

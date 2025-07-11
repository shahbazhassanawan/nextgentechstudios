import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MaintenanceProcess from "../components/MaintenanceProcess";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import DropUsALine from "../components/DropUsALine";
import { faqData,cynergyStudio,whychooseus } from "./data";
const page = () => {


  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Support <br /> & Maintenance <br /> Services" />

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center paddingRight3">
              <div className="text-section">
                <h1 className="title-page mainHeadingMobile">Mobile App Maintenance Company</h1>
                <p className="paragraphText">
                  With years of proven track record in maintenance and support,
                  Cynergy Studios furnishes comprehensive mobile app maintenance
                  services, compliance management services, and security
                  management services to keep your app updated and optimized to
                  ensure technological amelioration.
                  <br />
                  <br /> The scope of our services prevails in new app features,
                  app compliance, and maintenance KPIs throughout the process to
                  boost large and small enterprises with unbeatable results.
                  With protracted skills, delineated process, and indigenous
                  strategy our maintenance and support experts construct your
                  mobile app with astounded tech features to achieve your
                  productive business goals.
                </p>
               <DropUsALine />
              </div>
            </div>
            <div className="col-md-5 mgTop25 paddingRight3 py-2">
              <img
                src="./images/image-consulting.png"
                alt="image-consulting"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container benefits-of-working py-5 appMobilePadding">
        <div className="row">
          <div className="col-md-12 py-5 d-flex align-items-center justify-content-center flex-column text-center">
            <h2 className="mb-4 mainHeadingMobile">Support and Maintenance Services</h2>
            <p className="mb-4 paragraphText">
              The scope of our services prevails in new app features, app
              compliance, and maintenance KPIs throughout the process to boost
              large
              <br /> and small enterprises with unbeatable results. With
              protracted skills, delineated process, and indigenous strategy our
              maintenance and <br />
              support experts construct your mobile app with astounded tech
              features to achieve your productive business goals.
            </p>
            <img
              src="./images/banner-bottom.png"
              alt="banner-bottom"
              className="w-100 mt-5"
            />
          </div>
        </div>
      </div>

      <div className="maintenance-process appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">Maintenance Process</h2>
          <p className="text-center paragraphText">
            The top management of Cynergy Studios characterizes each support and
            maintenance step with beneficial
            <br />
            processes to streamline the app&apos;s performance and potency with
            clarity.
          </p>

          <MaintenanceProcess />

          <div className="mt-5 d-flex align-items-center justify-content-center">
          <DropUsALine />
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="app-quality-main appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">
            Cynergy <span>Studios</span>
          </h2>
          <p className="text-center paragraphText">
            Harnessing productive measures to provision adequate mobile app
            evolution roadmap for the partners
            <br /> and clients to bystander sterling mobile app re-architecting
            from our top-notch support activities.
          </p>
          <div className="row mt-5">
            <div className="col-md-7">
              {cynergyStudio.map((item,i)=>(
                <div className="app-quality mobileCardPadding" key={i}>
                <h3 className="cardHeading">{item.heading}</h3>
                <p className="cardDesc">
                  {item.description}
                </p>
                </div>
              ))}
            </div>
            <div className="col-md-5 marginTopMobile">
              <img
                src="./images/landing_prospecting.png"
                alt="landing_prospecting"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-sec appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
                In the modern times of technological enhancement software mobile
                app support and maintenance is as necessary as a penny, to keep
                the IT environment healthy and viable. So, are you wondering
                about hiring app support and maintenance partners? At Cynergy
                Studios, we not only update mobile applications but also
                discover and implement new launch processes to scale apps in a
                split second.
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-center">
            <DropUsALine />
            </div>
          </div>
          <div className="row mt-5">
            {whychooseus.map((item,i)=>(
                <div className="col-md-4 my-3" key={i}>
                <div className="choose-sec-1 mobileCardPadding">
                  <div>
                  <h4 className="cardHeading">{item.heading}</h4>
                  <p className="cardDesc">
                    {item.description}
                  </p>
                  </div>
                  <div className="choose-rectangle"></div>
                </div>
              </div>
            ))}
          </div>
       
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Into an Innovative Mobile App." />
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

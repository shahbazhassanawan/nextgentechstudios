import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import Link from "next/link";
import {faqData,developerAdequacies,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Android Development<br/> Services" />

      <div
        className="container-fluid webAppDev appMobilePadding"
        style={{ backgroundColor: "#FFFBF8" }}
      >
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column gap-4">
            <h2 className="mainHeadingMobile">Android App Developer</h2>
            <p className="paragraphText">
              Make your Android app with strikingly enticing modern features and
              design elements. Our team of skilled developers thrive to produce
              state-of-the-art and exclusive craftsmanship to build compelling
              Android app. cynergy’s dedicated Android app Android app
              development processes and user-friendly applications with
              cutting-edge technologies. developer provides feasible and
              pragmatic solutions to drive high business user interactions.
              <br />
              <br />
              From startups to large enterprises we put forward extensive
              technical skills and the ability to create extraordinary Android
              app development processes and user-friendly applications with
              cutting-edge technologies. You can also hire an Android developer
              online relatable to your comfort zone.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <img src="/images/androidDev.png" alt="androidDev" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container midMobileAdd appMobilePadding">
        <h2 className="text-center mainHeadingMobile">Development Services</h2>
        <p className="text-center paragraphText">
          At Cynergy Studios, we execute feature-rich Android app using a modern
          tech stack. Our Android app
          <br /> developers put forward relative expertise to exceed top
          industry standards. Effective Android framework
          <br /> develops creative Android apps.
        </p>
        <div className="row mt-5">
          <img
            src="./images/lines-1.png"
            alt="lines-1"
            className="lines-1 z-1"
          />
          <img
            src="./images/lines-2.png"
            alt="lines-2"
            className="lines-2 z-1"
          />
          <img
            src="./images/lines-3.png"
            alt="lines-3"
            className="lines-3 z-1"
          />
          <img
            src="./images/lines-4.png"
            alt="lines-4"
            className="lines-4 z-1"
          />
          <div style={{marginTop:'-4%'}} className="col-md-3 d-flex align-items-center justify-content-evenly flex-column">
            <div className="panelBoxLeft">
              <h4 className="lineHeading">Custom Android App Development</h4>
              <p className="smallParaText m-0">
                Cynergy’s Android app developers craft exclusive custom apps to
                impart dynamic user experience that propels enterprise
                solutions. We create fully-operational and well-functioning
                Android app to build extraordinary Android experiences. Hire
                dedicated Android developers to rank your apps internationally.
              </p>
            </div>
            <div className="panelBoxLeft m-0">
              <h4 className="lineHeading">Design and Development</h4>
              <p className="smallParaText">
                We invest in captivating design strategies and intuitive user
                experiences with our Android app developers to create
                exceptional layouts and wireframes of the apps.
              </p>
            </div>
          </div>
          <div className="col-md-6 mgTop25">
            <img
              src="./images/image85.png"
              alt="image85"
              className="w-100 z-3 position-relative mid-mob"
            />
          </div>
          <div className="col-md-3 d-flex mgTop25 align-items-center justify-content-evenly flex-column">
            <div className="panelBoxRight m-0">
              <h4 className="lineHeading">Stringent Testing Process</h4>
              <p className="smallParaText">
                While conducting Android software testing we ensure error-free
                apps with smooth processes to eradicate hindrances and barriers.
                Our leading testing formulas can rank your app to the highest
                level.
              </p>
            </div>
            <div className="panelBoxRight m-0">
              <h4 className="lineHeading">Maintenance and Update</h4>
              <p className="smallParaText">
                Our Android app developers go beyond exceptional launch and
                maintenance processes to ensure your app remains up-to-date and
                along the right lines. Hire Android app developers to secure
                your app completely.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="DevelopmentProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Developers Adequacies</h2>
              <p className="paragraphText">
                Skilled developers can lead your project scope up to the highest
                level with constructive solutions to foster business growth.
                Hire dedicated Android developers of Cynergy Studios to build
                Android app with potential and practical measures to thrive
                globally.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>

          <div className="row mt-5">
            {developerAdequacies.map((item,i)=>(
              <div className="col-md-6 my-2" key={i}>
                <AppCard heading={item.heading} hoverEffect="effect5" height={231} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container androidDeveloper appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-start">
            <img
              src="./images/androiddeveloper.png"
              alt="androiddeveloper"
              className="w-100 androiddeveloperImg"
            />
          </div>
          <div className="col-md-6 footerSection">
            <h2 className="text-end mainHeadingMobile">Android Developers</h2>
            <p className="text-end paragraphText">
              Forming your Android app with a broad spectrum of expertise and
              proven track record. Hire a team of Cynergy Studios to accomplish
              your ultimate goal with better performance and high operating
              platforms. Here we accommodate an Android’s team of the best
              mobile app developers to consummate the product’s prerequisites
              and challenges.
            </p>
            <div className="row mt-5 lines-andrd">
              <div className="col-md-11 line-area1">
                <h3 style={{fontWeight: '700',color:'#DC5F00'}} className="text-end mt-2">Junior Developer</h3>
                <p className="text-end navHeading">
                  Android developers often work alongside experienced Android
                  developer to make the development phase smooth. They report to
                  the senior project manager or senior team leader to guide the
                  app development. To establish high-performance apps with
                  appropriate Android security measures it&apos;s important to look
                  at Android app developers for hire.
                </p>
                <h3 style={{fontWeight: '700'}} className="text-end mt-5">Mid-Level Developers</h3>
                <p className="text-end navHeading">
                  Hiring Android developers of mid-senior level can adequately
                  focus on the details of the application requirements with
                  guidance from the senior team leader. Cynergy‘s dedicated
                  Android developer can competently design and develop Android
                  devices under productive testing systems and maintenance
                  processes. App developers streamline the entire Android
                  operating system with the latest technologies and trends.{" "}
                </p>
                <h3 style={{fontWeight: '700'}} className="text-end mt-5">Seniors Developers</h3>
                <p className="text-end navHeading">
                  Senior Android developers bring highly specialized experience
                  and well-qualified expertise in the field of Android. They not
                  only build apps but also update new app also add modern
                  elements to simple app and highly complex app for better
                  engagement rates.
                </p>
              </div>
              <div className="col-md-1 line-area2">
                <img
                  src="./images/Group1707479692.png"
                  alt="Group1707479692"
                  className="line-android"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="IosChoose appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
                To streamline the entire process of development hire iOS
                developers from Cynergy Studios. Here, hiring an iOS developer
                can ensure smooth collaboration and on-time delivery of
                projects. Our team of mobile app developers works closely to
                lead to higher productivity and better app performance. You can
                benefit from our extravagant expertise by hiring iOS developers
                for your consumer apps.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>

            {whyChooseUs.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
              <AppCard heading={item.heading} hoverEffect="effect5" height={303} isCenter={true} showLine={true} description={item.description} />
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

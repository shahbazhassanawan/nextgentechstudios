import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import IOSAppDesignServices from "../components/IosDesignServices";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {faqData,designProcess,workingWith,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="IOS App Design <br /> Services" />

      <div className="why-choose-us appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src="./images/ios-sec-img.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
            <div className="col-md-7 d-flex align-items-end justify-content-center flex-column text-end">
              <h2 className="w-100 mainHeadingMobile mgTop25">Transformation Agency</h2>
              <p className="paragraphText my-4 col-md-9">
              With years of experience, our top-notch iOS app design services establish a well-organized platform for your app idea. We value credibility, believability, and innovation in your application for prevailing modernized tools and technologies.
              </p>
          <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <IOSAppDesignServices />

      <div className="iosDesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Design Process</h2>
          <p className="text-center paragraphText">
            Since we have refined the UI/UX design process of iOS apps, our top
            mobile app designers adhere to strict guidelines
            <br /> leveraging a broad suite of technologies, modernized
            practices, and a user-centric innovative approach to spawning
            <br /> high-quality iPhone app design.
          </p>
          <div className="row">
            {designProcess.map((item, index) => (
               <div className="col-md-6" key={index}>
               <div className="iosDesignBox mobileCardPadding">
                 <h4 className="cardHeading">{item.heading}</h4>
                 <p className="cardDesc">
                    {item.description}
                 </p>
               </div>
             </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container workingWithCynergy appMobilePadding">
        <h2 className="mainHeadingMobile">
          Working With
          <br /> Cynergy Studios
        </h2>
        <p className="text-center paragraphText">
          Our team has a rich history of creating intuitive and coherent user
          experiences, ensuring customers have an enjoyable
          <br /> experience when interacting with your product or website. We
          provide comprehensive research and analysis to
          <br /> identify user needs and goals, so you can be sure the end
          product is tailored to your audience.
        </p>
        <div className="row mt-5">
          {workingWith.map((item, index) => (
                <div className={`col-md-3 ${index > 0 ?'mgTop25':''}`} key={index}>
                <div className="workingWithCynergyBox">
                  <span></span>
                  <img
                    src={`/images/${item.imgUrl}`}
                    alt="lightbulb_122683131"
                  />
                  <h4 className="cardHeading">{item.heading}</h4>
                  <p className="cardDesc">
                    {item.description}
                  </p>
                </div>
              </div>
          ))}
      
        
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
            <div className="col-md-4"></div>

            {whyChooseUs.map((item, index) => (
               <div className="col-md-4" key={index}>
               <div className="IosChooseBox">
                 <div>
                 <h4 className="cardHeading text-center">{item.heading}</h4>
                 <p className="cardDesc textBlack">
                   {item.description}
                 </p>
                 </div>
                 <span></span>
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

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import TechAndTools from "../components/TechAndTools";
import Link from "next/link";
import {section2Data,section3Data,section5Data,chooseUsData,faqData} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Web App Development<br/> Services" />

      <div className="container-fluid webAppDev appMobilePadding">
        <div className="row webAppDevContainer">
          <div className="col-md-6 d-flex align-items-start flex-column gap-4 webAppDevContainerFirst">
            <h2 className="mainHeadingMobile">
              Web App Development
              <br /> Company
            </h2>
            <p className="paragraphText col-md-11">
              Industry-leading web application development company Cynergy
              Studios holds exclusive practices to drive more value to
              businesses and enterprises. We develop top-notch custom apps,
              products, and professional services. We share a strong heritage
              and top skillset that empower immense pursuance, sanctuary, and
              tailored web development solutions to build unique infrastructure
              that rapidly meets market trends. Our experts firmly believe that
              business growth depends on perfect app strategies and monitoring
              of the app.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <img src="./images/image82.png" alt="image82" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container highAndroid appMobilePadding" >
        <h2 className="text-center mainHeadingMobile">
          Web Application
          <br /> Development Services
        </h2>
        <p className="text-center paragraphText">
          Unleash Cynergy’s intuitive web-based solutions in the growing market
          of Digital Space. We harness futuristic approaches to <br /> build
          intuitive web apps for businesses. Ensure a seamless web portal,
          website, and web services to experience the optimal <br /> business
          project.
        </p>
        <div className="row">
          {section2Data.map((item,index)=>(
            <div className="col-md-6 my-2" key={index}>
            <AppCard heading={item.heading} hoverEffect="effect1" description={item.description} />
          </div>
          ))

          }
        </div>
      </div>


      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">Web App Process</h2>
          <p className="text-center paragraphText">
            To build web applications strikingly absolute, we create
            constructive methodologies to fabricate a<br /> well-organized web
            app development process.
          </p> 
          <div className="row">
            {section3Data?.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
              <AppCard heading={item.heading} height={370} hoverEffect="effect2" isCenter={true} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TechAndTools />

      <div className="iosDesignProcess appMobilePaddingSmall" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="mainHeadingMobile">
            Web App Development
            <br /> With{" "}
            <span style={{ color: "#d35e1e" }}>Cynergy Studios</span>
          </h2>
          <p className="text-center paragraphText">
            Since we have refined the UI/UX design process of iOS apps, our top
            mobile app designers adhere to strict guidelines
            <br /> leveraging a broad suite of technologies, modernized
            practices, and a user-centric innovative approach to spawning
            <br /> high-quality iPhone app design.
          </p>
          <div className="row">
            {section5Data?.map((item,i)=>(
                  <div className="col-md-6 my-2" key={i}>
                  <AppCard heading={item.heading} height={295} hoverEffect="effect3" description={item.description} />
                  </div>
            ))}
          </div>
        </div>
      </div>

      <div className="WhyChooseUsMobile appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Why Choose Us</h2>
          <p className="text-center paragraphText">
            We construct strategic, creative, and technical methodologies to
            produce an exceptional user experience that transcends
            <br /> the client’s requisites. Our phenomenal Android mobile app
            design services leverage top-notch app solutions to accelerate
            <br /> the brand’s volume and revenue generation.
          </p>
          <div className="row mt-5">
            {chooseUsData?.map((item,i)=>(
               <div className="col-md-4 my-2">
                  <AppCard heading={item.heading} height={255} hoverEffect="effect2" isCenter={true} description={item.description} />
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

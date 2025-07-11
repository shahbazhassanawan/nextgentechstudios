import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import DropUsALine from "../components/DropUsALine";
import { faqData,processes,cynergyStudio,whyChooseUs } from "./data";
import AppCard from "../components/appCard";

const page = () => {
 
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="IOS Development<br /> Services" />

      <div className="container app-testing">
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/22201.png"
              alt="22201"
              className="w-100"
              style={{ margin: "-50px" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3 paddingRight3 footerSection">
            <h2 className="mainHeadingMobile">iOS Development Company</h2>
            <p className="paragraphText">
              Experience a seamless mobile app development process with Cynergy Studios, backed by years of expertise in iOS development. We utilize cutting-edge tools, programming languages, and innovative wireframes to thrive in the digital landscape. Elevate your iOS app development to new heights by integrating the latest functionalities and operations for an exceptional user experience.
            </p>
            <DropUsALine />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#FFFBF8" }}
        className="IOSDevelopmentServices appMobilePaddingSmall"
      >
        <div className="row d-flex flex-column align-items-center">
        <div className="col-md-7">
          <h2 className="text-center mainHeadingMobile">iOS App Development Services</h2>
        </div>
        <div className="col-md-6">
          <p className="text-center paragraphText mt-4">
            As a premier iOS application development company, Cynergy Studios delivers top-notch application layouts through a standardized and well-structured approach, ensuring user-friendly experiences.
            </p>
        </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 paddingRight3 second-section">
              <div className="accordion mt-2 ahh2" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header w-100">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="subHeading">
                        Custom iOS App Development
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      As Apple's market presence continues to grow rapidly, iOS apps remain a powerful choice, boasting a significant base of paying consumers despite Android's dominance. At Cynergy Studios, our expert team delivers premium iOS solutions through custom app development services, driving industry advancement, structural development, and overall growth.

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="subHeading">
                      iPhone App Designing
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Utilizing advanced, collaborative tools, our iOS app developers create exceptional UI/UX designs for both websites and mobile applications. With a focus on crafting visually appealing user interfaces, we build prototypes, animations, and wireframes that elevate the quality of iOS apps. Our talented team is dedicated to developing seamless user experiences tailored to any device.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="subHeading">
                        Integration Services
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Looking to enhance the operational capabilities of your iOS apps? Cynergy Studios specializes in integrating your app ideas with various third-party services, ensuring secure data exchange through monitored API integration. We can enhance user engagement by adding features such as payment gateways, chatbots, social media connections, and biometric authentication to your iPhone app development.

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="subHeading">
                        App Migration and Upgrades
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Migrating and upgrading your app involves transferring data from one operating system to another while maintaining its functionality and performance. At Cynergy Studios, we intuitively transition your app&apos;s framework to uphold its quality and ensure smooth operations. We leverage the latest tools and technologies to keep your app functional and compatible, all while minimizing iOS app development costs.

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 paddingLeft3">
              <img
                src="./images/Group1707479746.png"
                alt="Group1707479746"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:'100px 0px 100px 0px'}} className="appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Process</h2>
              <p className="paragraphText">
              We believe in focusing on a rigorous and systematic approach in every stage of development. Our consumer-centric strategy affirms the most advanced technologies to avoid errors and bugs. Our developers ensure the right testing process throughout the development phase to provide a unique user experience.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>

          <div className="row mt-5">
            {processes.map((item,i)=>(
              <div className="col-md-4 my-2" key={i}>
                <AppCard heading={item.heading} height={370} hoverEffect="effect2" isCenter={true} description={item.description} />
            
              {/* <div className="DevelopmentProcessBox mobileCardPadding">
                <h4 className="cardHeading">{item.heading}</h4>
                <p className="cardDesc">
                  {item.paragraph}
                </p>
              </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:'100px 0px 100px 0px',background:'#FFFBF8'}} className="appMobilePaddingSmall">
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
                      <div key={i} className="my-4 col-md-10">
                        <AppCard heading={item.heading} height={248} hoverEffect="effect7" description={item.description} />
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


            <div style={{padding:'100px 0px 100px 0px'}} className="appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p className="paragraphText">
              Cynergy Studios stands among the top mobile app development companies in the US, holding an experienced and skillful dedicated software development team to meet the needs of your valuable business, whether it's a start-up or a large enterprise we accommodate adeptly and productively.
                      </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
            </div>
            <div className="row mt-4">
            {whyChooseUs.map((item, index) => (
                <div className="col-md-4 my-2" key={index}>
                  <AppCard heading={item.heading} showLine={true} height={303} isCenter={true} hoverEffect="effect5" description={item.description} />
              </div>
            ))
            }
            </div>
          
           
        </div>
      </div>

       {/* <div
        className="last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#fff", padding: "30px 0px 100px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 d-flex align-items-center justify-content-center flex-column">
              <div className="text-section">
                <h1 className=" mainHeadingMobile">Optimized Process</h1>
              </div>
              <img
                src="./images/banner-bottom.png"
                alt="banner-bottom"
                className="w-100 mt-5"
              />
            </div>
          </div>
        
        </div>
      </div> */}


      {/* <div className="container-fluid navs-app appMobilePadding">
        <div className="row">
          <div className="col-md-1 navappImg d-flex align-items-end">
            <img
              src="./images/App-Navs/python.svg"
              alt="python"
              className="w-100 pythonImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-center">
            <img
              src="./images/App-Navs/kotlin.svg"
              alt="kotlin"
              className="w-100 kotlinImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-start">
            <img
              src="./images/App-Navs/react-native.svg"
              alt="react-native"
              className="w-100 reactnativeImg tilt-effect"
            />
          </div>
          <div className="col-md-6">
            <img
              src="./images/App-Navs/main-laptop.png"
              alt="main-laptop"
              className="w-100"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-start">
            <img
              src="./images/App-Navs/ruby.svg"
              alt="ruby"
              className="w-100 rubyImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-center">
            <img
              src="./images/App-Navs/flutter.svg"
              alt="flutter"
              className="w-100 flutterImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-end">
            <img
              src="./images/App-Navs/xios.svg"
              alt="xios"
              className="w-100 xiosImg tilt-effect"
            />
          </div>
        </div>
      </div> */}

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

import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import TechAndTools from "../components/TechAndTools";
import Link from "next/link";
import { pwaDevelopmentService,faqData,developmentProcess,whyChooseUs } from "./data";
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {

  return (  
    <>
      <Header />
      <MainBanner MainBannerHeading="PWA Development<br/> Services" />

      <div className="why-choose-us appMobilePadding">
        <div className="container">
          <div className="row webAppDevContainer">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column gap-3">
              <h2 className="mainHeadingMobile">PWA Development Company</h2>
              <p className="paragraphText col-md-11">
                With years of proven track record, Cynergy Studios lays an
                efficient structure to build a highly intuitive progressive web
                app (PWA), connecting iOS, Android, and Web assets under a
                single codebase. We acquire next-gen features to make your PWA
                deliver the fastest, reliable, and engaging development process
                to meet the needs of the users.
              </p>
             <DropUsALine />
            </div>
            <div className="col-md-6">
              <img
                src="./images/Group1707479745.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container WebAppDevelopmentServices appMobilePadding">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="mainHeadingMobile">PWA Development Services</h2>
          </div>
          <div className="col-md-6 paddingLeft3 d-flex align-items-center justify-content-center">
            <p className="paragraphText col-md-11">
              Combining all the aspects of curating PWAs, the industry-leading
              progressive web application development company Cynergy Studios
              dispenses the premium layout to design PWAs. Heretofore, we
              construct personalized architecture, a potent development process,
              and data migration with high-end development efforts.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 paddingRight3">
            <img
              src="./images/Group1707479693.png"
              alt="Group1707479693"
              className="w-100 h-100"
            />
          </div>
          <div className="col-md-6 paddingLeft3 d-flex align-items-center justify-content-center flex-column">
            {pwaDevelopmentService?.map((item,index)=>(
                <div className="my-2" key={index}>
                  <AppCard heading={item.heading} height={168} hoverEffect="effect4" description={item.description} />
                </div>
            ))}
            
          
          </div>
        </div>
      </div>

      <div className="DevelopmentProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Development Process</h2>
              <p className="paragraphText">
                Manifesting key steps to your PWA idea, we follow an agile
                methodology that allows us to fine-tune the PWA app development
                process and craft feature-riched masterpieces of your
                progressive web apps with a user-centric solution. This
                involves; PWA project evaluation, design, testing, deployment,
                and maintenance of your PWA.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>

          <div className="row mt-5">
            {developmentProcess?.map((item,index)=>(
              <div className="col-md-6 my-2" key={index}>
                  <AppCard heading={item.heading} height={231}  hoverEffect="effect5" description={item.description} />
            </div>
            ))}

            
           
          </div>
        </div>
      </div>

      <TechAndTools />

      <div
        className="container second-section WebAppSolutions appMobilePadding"
        style={{ backgroundColor: "#fff" }}
      >
        <h2 className="mainHeadingMobile">Web App Solutions</h2>
        <p className="paragraphText">
          Our progressive web app development services craft an aesthetic
          landscape of progressive web apps with the
          <br /> latest PWA technology to make your app stand among leading PWA
          development companies.
        </p>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="accordion mt-5" id="accordionExample">
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
                      Offline Functionality
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Cynergy Studios offers extraordinary services to access
                    offline apps functionality and allows users to interact with
                    the progressive web app’s interface even without the
                    internet
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

                    Cross-Platform Compatibility
                    </span>
                  
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen bookIt has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
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

                    Improved Performance
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen bookIt has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
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

                    Add Link Experience
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen bookIt has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="subHeading">
                    
                    Seamless Integration
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen bookIt has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <span className="subHeading">
                    Lower Development & Maintenance
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen bookIt has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
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

      <div className="my-4">
        <AppCta CtaHeading={"Cynergy’s Service Scope?"} />
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

import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import WeCommitSlider from "../components/WeCommitSlider";
import MobileExperiences from "../components/MobileExperiences";
import TechAndTools from "../components/TechAndTools";
import {faqData,developmentProcess,cynergyKnack,whyChooseUs} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AppImageCard from "../components/AppImageCard";

const page = () => {
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Native App Development<br /> Services" />

      <WeCommitSlider />

      <div style={{ backgroundColor: "#fffbf8" }} >
        <div className="container-fluid mobile-experiences appMobilePaddingSmall">
          <h2 className="text-center fs-1 mainHeadingMobile">
            Empowering Industries With <br /> State-Of The Art Solutions
          </h2>
          <p className="text-center paragraphText">
            Among premier mobile app development companies, we batten
            exceptional assistance on a wider scale to flourish Android and
            <br /> iOS devices internationally. From the start to the launch of
            mobile development, we construct and
            <br /> refine the design and performance of the app productively. As
            a reputable provider of native mobile app development services, we
            strive to meet the
            <br /> exigencies of our valuable consumers.
          </p>
          <MobileExperiences />
        </div>
      </div>

      <div className="TechAndTools appMobilePaddingSmall">
        <h2 className="mainHeadingMobile">Development Process</h2>
        <p className="paragraphText">
          We create accelerated methodologies to revolutionize native mobile app
          development processes for more competent
          <br /> and adequate solutions for apps. With sterling native mobile
          app frameworks we build a sleek and tranquil process to
          <br /> refine and make development quicker for Android apps and iOS
          devices.
        </p>
        <div className="container mt-5">
          <div className="row">
            {developmentProcess.slice(0, 3).map((item,index)=>(
               <div className={`col-md-4 ${index > 0 ?'mgTop15':''}`} key={index}>
                <AppCard heading={item.heading} hoverEffect="effect1" height={255} isCenter={true} description={item.description} />
             </div>
            ))}
          </div>
          <div className="row mt-4">
          {developmentProcess.slice(3, 6).map((item,index)=>(
               <div className={`col-md-4 ${index > 0 ?'mgTop15':''}`} key={index}>
                <AppCard heading={item.heading} height={255} isCenter={true} hoverEffect="effect1" description={item.description} />
             </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
           <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <TechAndTools />

      <div style={{ backgroundColor: "#fffbf8" }}>
        <div className="container workingWithCynergy appMobilePadding">
          <h2 className="mainHeadingMobile">Cynergy’s Knack Of Skills</h2>
          <p className="text-center paragraphText">
            Over the past several years there has been a significant increase in
            the usage of smartphones, where people typically have become more
            dependent
            <br /> on technology. Here, Cynergy’s dedicated software development
            team provides the top benefits of native applications to bestow
            absolute mobile
            <br /> app solutions for iOS and Android platforms. We offer
            services to expedite small and large enterprises for native mobile
            applications
            <br /> and non-native apps. Our user-centric native applications
            will skyrocket your business to the next level with our thriving
            ideas and <br />
            best practices.
          </p>
          <div className="row mt-5">

              {cynergyKnack.map((item,i)=>(
                 <div className={`col-md-3 ${i > 0 ?'mgTop25':''}`} key={i}>
                  <AppImageCard heading={item.heading} imgUrl={`/images/${item.imgUrl}`} height={515} isCenter={true} hoverEffect="effect6" description={item.description} />

               </div>
              ))}
          </div>
          <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
            <DropUsALine />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center OurChooseOpt appMobilePadding">
        <h2 className="mainHeadingMobile">Why Choose Us</h2>
        <p className="paragraphText">
          Since Cynergy Studios stepped into the world of digitalization, it has
          been marking a prestigious reputation in the
          <br /> leading industry of mobile apps. Prevailing a dominance with
          unmatchable expertise, our mobile app development
          <br /> dispenses top-notch native apps that follow the latest trends
          and development tools. Throughout the process of native
          <br />
          app development, we capture growth advantages and resolve rising
          business challenges.
        </p>
        <div className="row mt-4">

           {whyChooseUs.slice(0,3).map((item,i)=>(
            <div className="col-md-4" key={i}>
                <AppCard heading={item.heading} showLine={true} height={303} isCenter={true} hoverEffect="effect2" description={item.description} />
           
          </div>
           ))

           }   
        </div>
        <div className="row mt-1">
        {whyChooseUs.slice(3,6).map((item,i)=>(
            <div className="col-md-4 my-2" key={i}>
                <AppCard heading={item.heading} showLine={true} height={303} isCenter={true} hoverEffect="effect2" description={item.description} />
            
          </div>
           ))

           }   
        </div>
        <div className="row mt-5">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
            <DropUsALine />
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

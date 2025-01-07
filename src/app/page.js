import Header from "./components/Header";
import Footer from "./components/Footer";
import HotspotSection from "./components/HotspotSection";
import FaqsSection from "./components/FaqsSection";
import BudgetSection from "./components/BudgetSection";
import FutureSection from "./components/FutureSection";
import Evolution from "./components/Evolution";
// import MidMobileScroll from "./components/MidMobileScroll";
import TestimonialSlider from "./components/TestimonialSlider";
// import Trustees from "./components/Trustees";
import TestimonialTabs from "./components/TestimonialTabs";
import MobileExperiences from "./components/MobileExperiences";
import CynergyStudio from "./components/CynergyStudio";
import RecentNews from "./components/RecentNews";
// Icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import MarqueeSlider from "./components/MarqueeSlider";
import GrowthSec from "./components/GrowthSec";
import CustomizeHeading from "./components/CustomizeHeading";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Link from "next/link";

export default function Home() {
  const faqData = [
    {
      questionId: "01",
      question: "Who will be working on my project?",
      answer:
        "Your project will be handled by a dedicated team of experts, including developers, designers, and project managers, all selected based on the specific needs of your project.",
    },
    {
      questionId: "02",
      question:
        "Who owns the legal rights to the technology developed by Cynergy Studios?",
      answer:
        "Once the project is completed and payment is finalized, you will retain full legal rights and ownership of the technology developed by our team.",
    },
    {
      questionId: "03",
      question:
        "How do you ensure the data security of mobile apps and websites?",
      answer:
        "We prioritize data security through stringent protocols, including encryption, secure coding practices, regular audits, and adherence to industry standards, ensuring your data remains safe.",
    },
    {
      questionId: "04",
      question: "How frequently do you share updates on the process?",
      answer:
        "We provide regular updates throughout the development cycle. The frequency of communication can be customized to meet your preferences, ensuring you’re always informed.",
    },
    {
      questionId: "05",
      question: "How will I be making the payments?",
      answer:
        "Payments can be made through a flexible structure, which may include milestone-based or scheduled payments, using secure and convenient payment options.",
    },
  ];
  return (
    <>
      <Header />
      <div className="main-banner">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-10 d-flex align-items-center justify-content-center">
              <CustomizeHeading />
            </div>

            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <div className="banner-numbers">
                <div className="right-banner-div">
                  <div className="banner-social">
                    <a href="#"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/cynergystudios/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/cynergystudiosonline" target="_blank"><FaFacebook /></a>
                  </div>
                  <span>We Are The Mobile Business Builders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPlayer />
      <GrowthSec />
      <FutureSection />
      <Evolution />
      <CynergyStudio />
      <RecentNews />
      <TestimonialSlider />
      <div className="container-fluid mobile-experiences">
        <h2 className="text-center">
          Make the industries section like the screenshot
          <br /> Reimagine Mobile Experiences Across Every Industry.
        </h2>
        <p className="text-center">
          Cynergy Studios crafts powerful mobile apps across a wide range of
          industries. Whether in healthcare, retail, education, <br /> or
          entertainment, we design solutions that foster success and enhance
          user experiences, regardless of the sector.
        </p>
        <MobileExperiences />
        <div className="row">
          <div className="d-flex justify-content-center">
          <Link href="/achievements">
            <button>Show More</button>
          </Link>
          </div>
        </div>
      </div>
      <TestimonialTabs />
      <MarqueeSlider />
      <FaqsSection faqs={faqData} />
      <BudgetSection />
      <HotspotSection />
      <Footer />
    </>
  );
}

"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseStudySlider from "../components/CaseStudySlider";
import RecentNews from "../components/RecentNews";
import InnerCta from "../components/InnerCta";

const faqs = [
  {
    question:
      "Can an app development company help with cross-platform app development?",
    answer:
      "Absolutely! At Cynergy Studios, we specialize in cross-platform development, ensuring seamless functionality on both Android and iOS devices.",
    id: "collapseOne",
  },
  {
    question: "How much does it cost to develop a mobile app?",
    answer:
      "The cost varies based on complexity and features, but we offer flexible pricing options tailored to different budgets at Cynergy Studios.",
    id: "collapseTwo",
  },
  {
    question:
      "Can you recommend a reliable mobile app development company for Android and iOS?",
    answer:
      "We recommend Cynergy Studios for high-quality mobile app development for both Android and iOS platforms.",
    id: "collapseThree",
  },
  {
    question:
      "What factors should I consider when choosing an app development agency?",
    answer:
      "Consider their experience, portfolio, industry expertise, and communication style. Cynergy Studios excels in all these areas.",
    id: "collapseFour",
  },
  {
    question: "How to find affordable app development services for startups?",
    answer:
      "Cynergy Studios offers cost-effective solutions tailored specifically for startups to help you launch successfully.",
    id: "collapseFive",
  },
  {
    question: "What is the average time frame for mobile app development?",
    answer:
      "Typically, mobile app development takes between 3 to 6 months, depending on complexity. We provide a clear timeline during our planning phase.",
    id: "collapseSix",
  },
  {
    question:
      "How to assess the portfolio of a mobile app development company?",
    answer:
      "Look for variety in projects, user experience quality, and design. Cynergy Studios showcases a diverse portfolio demonstrating our capabilities.",
    id: "collapseSeven",
  },
  {
    question:
      "What are the benefits of hiring a professional app development team?",
    answer:
      "A professional team brings expertise, reliability, and comprehensive support throughout the development process, ensuring quality results.",
    id: "collapseEight",
  },
  {
    question: "What technologies should a modern app development company use?",
    answer:
      "Modern companies should use technologies like Swift, Kotlin, and React Native for mobile apps, which Cynergy Studios employs.",
    id: "collapseNine",
  },
  {
    question:
      "Can an app development company assist with app store submissions?",
    answer:
      "Yes, we handle the entire app store submission process for both Android and iOS, ensuring compliance and visibility.",
    id: "collapseTen",
  },
  {
    question: "How to choose between native and hybrid app development?",
    answer:
      "Native apps offer high performance, while hybrid apps can be cost-effective. Cynergy Studios helps you choose the best option for your project.",
    id: "collapseEleven",
  },
  {
    question: "What is the average hourly rate for app development services?",
    answer:
      "Rates vary, but Cynergy Studios offers competitive pricing with transparent costs based on project complexity.",
    id: "collapseTwelve",
  },
  {
    question: "Do I need a custom app, or can I use app builders?",
    answer:
      "While app builders work for simple projects, custom apps provide the unique features and scalability your business needs.",
    id: "collapseThirteen",
  },
  {
    question:
      "How to ensure the security and privacy of user data in app development?",
    answer:
      "Cynergy Studios prioritizes security through encryption, secure coding practices, and regular testing to protect user data.",
    id: "collapseFourteen",
  },
  {
    question:
      "Can an app development company assist with post-launch support and updates?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your app remains functional and up-to-date after launch.",
    id: "collapseFifteen",
  },
  {
    question: "What are the latest trends in mobile app development?",
    answer:
      "Trends include AI features, augmented reality, and progressive web apps. Cynergy Studios stays current with these advancements.",
    id: "collapseSixteen",
  },
  {
    question:
      "Are there any top-rated app development companies for social media apps?",
    answer:
      "Cynergy Studios specializes in creating engaging social media apps designed to foster community and interaction.",
    id: "collapseSeventeen",
  },
  {
    question: "Should I hire a freelance app developer or a company?",
    answer:
      "A company like Cynergy Studios provides a full team for comprehensive support, while freelancers may be suitable for smaller projects.",
    id: "collapseEighteen",
  },
  {
    question:
      "Are there any top-rated app development companies for healthcare apps?",
    answer:
      "Yes, Cynergy Studios has extensive experience in developing secure and compliant healthcare applications.",
    id: "collapseNineteen",
  },
  {
    question: "What is the average hourly rate for web development services?",
    answer:
      "Web development rates vary, but we offer competitive pricing at Cynergy Studios, tailored to your project scope.",
    id: "collapseTwenty",
  },
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "Custom websites typically take 8 to 16 weeks to develop, depending on complexity. We’ll outline a timeline based on your needs.",
    id: "collapseTwentyOne",
  },
  {
    question: "Do I need a custom website or can I use website builders?",
    answer:
      "Custom websites offer more flexibility and functionality compared to website builders, which may be limited in features.",
    id: "collapseTwentyTwo",
  },
  {
    question:
      "How to choose between local and offshore web development companies?",
    answer:
      "Consider factors like communication, time zones, and cultural fit when choosing between local and offshore companies.",
    id: "collapseTwentyThree",
  },
  {
    question:
      "What are the benefits of hiring a dedicated web development team?",
    answer:
      "A dedicated team provides focused expertise and consistency throughout the project, ensuring high-quality results.",
    id: "collapseTwentyFour",
  },
  {
    question: "What are the latest trends in web development?",
    answer:
      "Trends include Progressive Web Apps, AI chatbots, and responsive design. Cynergy Studios incorporates these into our projects.",
    id: "collapseTwentyFive",
  },
  {
    question: "Can a web development company assist with SEO optimization?",
    answer:
      "Yes, we integrate SEO best practices into your website to improve search rankings and visibility.",
    id: "collapseTwentySix",
  },
  {
    question:
      "Are there any top-rated web development companies for small businesses?",
    answer:
      "Cynergy Studios provides affordable, high-quality web development services tailored specifically for small businesses.",
    id: "collapseTwentySeven",
  },
  {
    question: "Should I hire a freelance web developer?",
    answer:
      "Freelancers can be effective for small projects, but a full-service company like Cynergy Studios is ideal for comprehensive solutions.",
    id: "collapseTwentyEight",
  },
  {
    question: "What are the best app development companies in California?",
    answer:
      "Cynergy Studios is recognized for our expertise and customer-centric approach in app development.",
    id: "collapseTwentyNine",
  },
  {
    question: "Can a web development company help with website maintenance?",
    answer:
      "Yes, we offer ongoing maintenance to keep your site secure, updated, and functioning optimally.",
    id: "collapseThirty",
  },
  {
    question: "What technologies should a modern web development company use?",
    answer:
      "A modern company should be skilled in HTML5, CSS3, JavaScript frameworks, and server-side technologies, all utilized at Cynergy Studios.",
    id: "collapseThirtyOne",
  },
  {
    question: "How much does it cost to hire a web development company?",
    answer:
      "Costs vary based on project scope, and we provide flexible pricing tailored to your specific needs.",
    id: "collapseThirtyTwo",
  },
  {
    question:
      "What factors should I consider when choosing a web development agency?",
    answer:
      "Look for experience, a strong portfolio, and good communication. Cynergy Studios excels in all these areas.",
    id: "collapseThirtyThree",
  },
  {
    question:
      "Can you recommend a reliable web development company for e-commerce sites?",
    answer:
      "Cynergy Studios specializes in building secure, user-friendly e-commerce websites with integrated payment systems.",
    id: "collapseThirtyFour",
  },
  {
    question: "How to find affordable web development services for startups?",
    answer:
      "Cynergy Studios offers tailored, budget-friendly web development solutions to help startups succeed.",
    id: "collapseThirtyFive",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on aesthetics and user experience, while web development involves coding and functionality.",
    id: "collapseThirtySix",
  },
  {
    question:
      "Are there any full-stack web development companies in California?",
    answer:
      "Yes, Cynergy Studios is a full-stack web development company, managing both front-end and back-end development.",
    id: "collapseThirtySeven",
  },
  {
    question: "How do I assess the portfolio of a web development company?",
    answer:
      "Look for project diversity and experience in relevant areas. Cynergy Studios showcases a wide range of successful projects.",
    id: "collapseThirtyEight",
  },
  {
    question: "What are the best languages for building a mobile app?",
    answer:
      "Languages like Swift, Kotlin, and JavaScript with React Native are ideal for mobile app development, which we use at Cynergy Studios.",
    id: "collapseThirtyNine",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer mobile app development, web development, design, consulting, and support services at Cynergy Studios.",
    id: "collapseForty",
  },
  {
    question: "How long does it take to build a website or mobile app?",
    answer:
      "Typically, a website takes 8-16 weeks, while a mobile app can take 3-6 months, depending on complexity.",
    id: "collapseFortyOne",
  },
  {
    question: "Do you build websites, too?",
    answer:
      "Yes, Cynergy Studios specializes in both mobile app and website development.",
    id: "collapseFortyTwo",
  },
  {
    question: "Can you build apps for iPads and tablets too?",
    answer:
      "Absolutely! We develop apps optimized for all devices, including iPads and Android tablets.",
    id: "collapseFortyThree",
  },
  {
    question: "Do your services include manual QA?",
    answer:
      "Yes, we offer manual quality assurance testing to ensure your app or website is bug-free.",
    id: "collapseFortyFour",
  },
  {
    question: "Will you sign a confidentiality agreement?",
    answer:
      "Yes, we take confidentiality seriously and are happy to sign a non-disclosure agreement (NDA).",
    id: "collapseFortyFive",
  },
  {
    question: "How long have you been in business?",
    answer:
      "Cynergy Studios has been in business for over a decade, delivering high-quality digital solutions.",
    id: "collapseFortySix",
  },
  {
    question: "What is the best way to contact you?",
    answer:
      "Reach out via our website contact form, email, or phone; we’re always here to help!",
    id: "collapseFortySeven",
  },
  {
    question:
      "Do you offer Mobile App Development consulting for already existing projects?",
    answer:
      "Yes, we provide consulting for existing projects to enhance performance and user experience.",
    id: "collapseFortyEight",
  },
  {
    question: "Do you have an office?",
    answer:
      "Yes, we have offices in multiple locations, including Australia, Pakistan, the UK, America, Dubai, and Chicago.",
    id: "collapseFortyNine",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We recommend scheduling an appointment in advance to give your project the attention it deserves.",
    id: "collapseFifty",
  },
  {
    question: "How can I set up an appointment?",
    answer:
      "You can set up an appointment through our contact form, email, or phone. We’re here to help!",
    id: "collapseFiftyOne",
  },
  {
    question: "Can we have an appointment outside of your office?",
    answer:
      "Yes, we’re flexible with meeting arrangements, whether virtual or at a location convenient for you.",
    id: "collapseFiftyTwo",
  },
  {
    question: "Where can I see your previous work?",
    answer:
      "Visit our website to view our portfolio showcasing a variety of successful projects.",
    id: "collapseFiftyThree",
  },
  {
    question: "Where are your app developers located?",
    answer:
      "Our developers are located globally, including Australia, Pakistan, the UK, America, Dubai, and Chicago.",
    id: "collapseFiftyFour",
  },
  {
    question: "Can you build software for startups?",
    answer:
      "Yes, we have extensive experience working with startups, providing tailored solutions to help you grow.",
    id: "collapseFiftyFive",
  },
];

function Page() {
  return (
    <>
      <Header />
      {/* Main Banner */}
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>FAQ’s</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-md-12 faqs-page">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={faq.id}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={faq.id}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3" style={{ backgroundColor: "#f0f0f0" }}>
        <CaseStudySlider />
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>
      <div className="mt-5">
        <InnerCta />
      </div>
      <Footer />
    </>
  );
}

export default Page;

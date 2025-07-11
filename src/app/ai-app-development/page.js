import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import IOSAppDesignServices from "../components/IosDesignServices";
import {faqData,aiSoftware,aiBenefits} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";
import AppImageCard from "../components/AppImageCard";
const Page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="AI App Development<br /> Services" />

      <div className="container app-testing appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Why is AI Important in Education?</h2>
            <p className="paragraphText my-3">
              Artificial Intelligence in education refers to the use of machine
              learning algorithms, data analytics, and AI-powered tools to
              enhance teaching and learning experiences. It includes
              technologies that can adapt to individual learning needs, automate
              administrative processes, and provide insights that help educators
              make informed decisions.
              <br />
              <br />
              AI’s role in education ranges from supporting teachers in the
              classroom to offering personalized tutoring for students and
              streamlining school management.
            </p>
            <DropUsALine />
          </div>
          <div className="col-md-6">
            <img
              src="./images/Group1648546.png"
              alt="Group1648546"
              className="w-100"
            />
          </div>
        </div>
      </div>

      <div className="container AISoftwareDevelopment appMobilePadding">
        <h2 className="mainHeadingMobile">
          AI software development
          <br /> services we provide
        </h2>
        <p className="paragraphText">
          One of the most significant contributions of AI in education is
          personalized learning. Traditional classrooms often struggle
          <br /> to address the diverse learning needs of each student. AI
          solves this problem by analyzing a student’s performance,
          <br /> learning style, and pace and then customizing content
          accordingly
        </p>
        <div className="row mt-5">
          {aiSoftware.map((item,i)=>(
            <div className={`col-md-4 my-2`} key={i}>
          <AppImageCard heading={item.heading} imageStyle="2" hoverEffect="effect2" imgUrl={`/images/${item.imgUrl}`} isCenter={true} height={512} description={item.description} />
          
          </div>
          ))
          }
        </div>
      
      </div>

      <div className="KeyOfAi appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">
            Key Applications of AI
            <br /> Technology in Education
          </h2>
          <p style={{ fontSize: "14px" }} className="paragraphText">
            One of the most significant contributions of AI in education is
            personalized learning. Traditional classrooms often
            <br /> struggle to address the diverse learning needs of each
            student. AI solves this problem by analyzing a student’s
            <br /> performance, learning style, and pace and then customizing
            content accordingly.
          </p>
          <div className="row mt-5">
            <div className="col-md-6 paddingRight3">
              <img
                src="./images/2353Group.png"
                alt="2353Group"
                className="w-100 h-100"
              />
            </div>
            <div className="col-md-6 footerSection">
              <h4 className="title-page-2">Intelligent Tutoring Systems (ITS):</h4>
              <p className="paragraphText">
                AI-based tutors can identify a student&apos;s strengths and
                weaknesses and adjust the curriculum in real-time. This ensures
                that learners receive content that matches their level of
                understanding, leading to better learning outcomes.AI-based
                tutors can identify a student&apos;s strengths This ensures that
                learners receive content that matches their level of
                understanding, leading to better learning outcomes.
              </p>
              <h4 className="title-page-2">Adaptive Learning Platforms:</h4>
              <p className="paragraphText">
                Platforms like Knewton and Smart Sparrow use machine learning to
                create personalized learning paths for students. These systems
                can suggest learning materials, exercises, and quizzes based on
                the student’s progress and comprehension.Platforms like Knewton
                and Smart Sparrow use machine learning to create personalized
                learning paths for students. These systems can suggest learning
                materials, exercises, and quizzes based on the student’s
                progress and comprehension.
              </p>
            </div>
          </div>
        </div>
      </div>

      <IOSAppDesignServices />

      <div className="py-5 appMobilePaddingSmall" style={{backgroundColor: "#fffbf8"}}>
        <div className="row pt-5 col-12 d-flex justify-content-center" >
          <div className="col-md-6">
            <h2 className="mainHeadingMobile" style={{textAlign:'center'}} >Benefits of AI in Education</h2>
            <p className="paragraphText" style={{textAlign:'center'}}>
              Our software development life cycle empowers companies to
              functionalize their brand identity by building an effective and
              powerful mobile app for its users. To create more clicks and
              produce more revenue we provide a complete mobile solution to make
              a global recognition of your mobile applications.
            </p>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            {aiBenefits.map((item,i)=>(
              <div className="col-md-6 my-2" key={i}>
              <AppCard heading={item.heading} hoverEffect="effect2" height={206} description={item.description} />
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

export default Page;

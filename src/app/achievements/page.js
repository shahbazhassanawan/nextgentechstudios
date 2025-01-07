import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseStudySlider from "../components/CaseStudySlider";
import RecentNews from "../components/RecentNews";
import {cardData} from './data'
import AchievementCard from "../components/AchievementCard";


const page = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header />
      <div className="about-banner" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Achievement</h1>
            </div>
          </div>
          <hr />
          <div className="d-flex mt-2 align-items-center justify-content-between">
            <div className="">@{currentYear}</div>
            <div className="d-flex gap-2 align-items-center">
              <div>
              Filter: All Work
              </div>
              <div>
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.3501" cy="9.521" r="9.396" fill="#DC5F00"/>
                <path d="M10.0401 13.8715C10.2116 14.043 10.4896 14.043 10.6611 13.8715L13.4556 11.077C13.6271 10.9055 13.6271 10.6275 13.4556 10.456C13.2841 10.2845 13.0061 10.2845 12.8346 10.456L10.3506 12.94L7.86659 10.456C7.6951 10.2845 7.41707 10.2845 7.24559 10.456C7.0741 10.6275 7.0741 10.9055 7.24559 11.077L10.0401 13.8715ZM9.91147 5.48096L9.91147 13.561L10.7897 13.561L10.7897 5.48096L9.91147 5.48096Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container achievements-page appMobilePadding mt-4">
       
        <AchievementCard data={cardData} />
      </div>

      <div className="mt-5">
        <CaseStudySlider />
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>

      <Footer />
    </>
  );
};

export default page;

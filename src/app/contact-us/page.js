"use client";
import React, { useState,useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HotspotSection from "../components/HotspotSection";
import Link from "next/link";
import { submitForm } from "@/api/formServices";
import MainBanner from "../components/MainBanner";
import { links } from "./data";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber:"",
    email: "",
    budget: 0,
  });
  const fileInputRef = useRef(null);
  const [loading,setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


   const handleSubmit = async (e) => {
      e.preventDefault();
      
      for (const [key, value] of Object.entries(formData)) {
        if (!value.trim()) { 
          alert(`Please fill in the ${key} field.`);
          return;
      }
    }
    setLoading(true)
      try {
        const payload = new FormData();
        payload.append("fullName", formData.fullName);
        payload.append("email", formData.email);
        payload.append("phoneNumber", formData.phoneNumber);
        payload.append("budget", formData.budget);
        if (selectedFile) {
          payload.append("file", selectedFile);
        }


        const response = await submitForm(payload)

        alert(response.data.message)
      } catch (error) {
        alert("Failed to submit form.")
      }

      setLoading(false)
  
      setFormData({
        fullName: "",
        email: "",
        phoneNumber:"",
        budget: 0,
      });
      setSelectedFile(null); 

      if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
      }
    };

    const handleFileButtonClick = () => {
      if (fileInputRef.current) {
          fileInputRef.current.click(); 
      }
  };

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Contact Us" />

      {/* <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div> */}

      <div className="container contact-main appMobilePadding contactusContainer">
        <div className="row">
          <h6>
            <Link href="/" style={{ color: "#AFAFAF" }}>
              Home
            </Link>
            <span className="ms-2 me-2" style={{ color: "#AFAFAF" }}>
              /
            </span>
              Contact Us
          </h6>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <h2 className="heading50">Got a project in mind?</h2>
            <p className="contactUsPara mt-2">Fill in this form or <span style={{textDecoration:'underline'}}><a style={{color:'#AFAFAF'}} href="mailto:info@cynergystudios.com">send us an e-mail</a></span></p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Name *"
                className="w-100 customInput"
                onChange={handleChange}
              />
               <div className="row my-3">
            <div className="col-md-6 form-group">
              <input type="tel"  value={formData.phoneNumber} onChange={handleChange}  className="customInput" name="phoneNumber" id="phone" placeholder="Phone number" />
            </div>
            <div className="col-md-6 form-group">
              <input type="email" value={formData.email} name="email"  onChange={handleChange} className="customInput" id="email" placeholder="Email *" />
            </div>
            </div>
            <div style={{marginTop:'2rem'}} className="form-group">
                <label className="formTextColor">Your budget</label>
                <input
                  type="range"
                  className="range-cyn mt-4"
                  min="0"
                  max="500000"
                  step="10000"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <div className="budgetDisplay">
                  <span className="formTextColor">$ 0</span>
                 {formData.budget > 0 && <span
                    style={{
                      border: "1px solid #dc5f00",
                      padding: "6px",
                      borderRadius: "12px",
                      color: "#AFAFAF",
                      fontWeight:"400"
                    }}
                  >
                    $ {formData.budget}
                  </span>}
                  <span className="formTextColor">$ 500,000</span>
                </div>
            </div>
            <div style={{marginTop:'2rem'}} className="form-group">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div  className='my-3 d-flex border-bottom pb-3 align-items-center justify-content-between gap-3'>
            
              <div  className='underlineHover' style={{color:'#AFAFAF'}}>
                {selectedFile?.name && selectedFile?.name}  
            </div>
             
                <div onClick={handleFileButtonClick}>
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7765 4.68093C15.7765 4.40365 15.6503 4.13774 15.4257 3.94167C15.2011 3.74561 14.8964 3.63546 14.5788 3.63546C14.2611 3.63546 13.9565 3.74561 13.7318 3.94167C13.5072 4.13774 13.381 4.40365 13.381 4.68093H15.7765ZM6.99357 6.1383C6.99357 5.86102 6.86738 5.59511 6.64276 5.39904C6.41814 5.20298 6.1135 5.09284 5.79584 5.09284C5.47818 5.09284 5.17354 5.20298 4.94892 5.39904C4.7243 5.59511 4.59811 5.86102 4.59811 6.1383H6.99357ZM13.381 4.68093V16.4361H15.7765V4.68093H13.381ZM2.60151 16.4361V5.11061H0.206055V16.4361H2.60151ZM8.98898 5.11061V16.3796H11.3844V5.10956L8.98898 5.11061ZM6.99357 16.3796V6.1383H4.59811V16.3786L6.99357 16.3796ZM7.99127 17.2505C7.72666 17.2505 7.47289 17.1587 7.28579 16.9954C7.09868 16.8321 6.99357 16.6106 6.99357 16.3796L4.59811 16.3786C4.59811 16.7675 4.68588 17.1537 4.8564 17.5131C5.02693 17.8724 5.27686 18.1989 5.59195 18.4739C5.90703 18.749 6.28109 18.9671 6.69277 19.116C7.10444 19.2648 7.54568 19.3414 7.99127 19.3414V17.2505ZM8.98898 16.3796C8.98898 16.8605 8.54222 17.2505 7.99127 17.2505V19.3414C8.89119 19.3414 9.75426 19.0294 10.3906 18.4739C11.0269 17.9185 11.3844 17.1651 11.3844 16.3796H8.98898ZM5.79584 2.32237C6.64282 2.32264 7.45501 2.61653 8.0538 3.13939C8.6526 3.66226 8.98898 4.3713 8.98898 5.11061L11.3844 5.10956C11.3844 3.81571 10.7957 2.57588 9.74764 1.66089C8.69961 0.745898 7.27814 0.231723 5.79584 0.231445V2.32237ZM2.60151 5.11061C2.60151 4.37112 2.93805 3.66192 3.5371 3.13902C4.13616 2.61613 4.94865 2.32237 5.79584 2.32237V0.231445C4.31334 0.231445 2.89155 0.745499 1.84327 1.66052C0.794977 2.57554 0.206055 3.81657 0.206055 5.11061H2.60151ZM7.99127 21.1407C6.56182 21.1407 5.19091 20.645 4.18013 19.7627C3.16936 18.8804 2.60151 17.6838 2.60151 16.4361H0.206055C0.206055 18.2384 1.02628 19.9668 2.48629 21.2412C3.9463 22.5156 5.9265 23.2316 7.99127 23.2316V21.1407ZM13.381 16.4361C13.381 17.6838 12.8132 18.8804 11.8024 19.7627C10.7916 20.645 9.42073 21.1407 7.99127 21.1407V23.2316C10.056 23.2316 12.0362 22.5156 13.4963 21.2412C14.9563 19.9668 15.7765 18.2384 15.7765 16.4361H13.381Z" fill="#F66A00"/>
                        </svg>
                    </div>
                                   
            </div>
            </div>
              <div className='mt-2 d-flex align-items-center'>
                    <button type='submit' disabled={loading} className='second-btn'>  {loading ? "Submitting..." : "Submit Now"}</button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 footerSection">
            <div className="contact-right">
              <h4>What&apos;s next?</h4>
              <div className="steps d-flex flex-column">
                <div className="d-flex gap-4 my-3">
                  <div className="col-md-1 lineCircle">1</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
                    Our experts will review your requirements and reach out to
                    you within 1-2 business days.
                  </p>
                </div>
                <div className="d-flex  gap-4 my-3">
                  <div className="col-md-1 lineCircle">2</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
                    Our team will gather all the requirements for your project,
                    and if necessary, we&apos;ll sign an NDA to ensure complete
                    confidentiality and privacy.
                  </p>
                </div>
                <div className="d-flex gap-4 my-3">
                  <div className="col-md-1 lineCircle">3</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
                    We will create a detailed proposal and action plan for your
                    project, including estimates, timelines, and other essential
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "100px",marginBottom:'40px' }}>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <h6>Phones:</h6>
                <ul className="phone-details gap-2">
                  <li><a href="tel:13463608407"  style={{color:'black'}}>+1 (346) 360-8407</a></li>
                  <li><a href="mailto:info@cynergystudios.com" style={{color:'black'}}>info@cynergystudios.com</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6>Follow:</h6>
                <ul className="social-media gap-4 mt-2">
                  {links.map((item,i)=>(
                  <li key={i} className="linkCircle">
                    <a href={item.link} target="_blank">
                    <img src={`/images/${item.imgUrl}.png`} alt={`${item.imgUrl} icon`} />
                    </a>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <HotspotSection />
      <Footer />
    </>
  );
};

export default Page;

'use client';

import React, { useState, useEffect } from 'react';
import ContactUsForm from './ContactusForm';
import appStore from '../../store/store';
import { FaTimes } from "react-icons/fa";

const DropUsALine = ({text="Drop us a line"}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setScroll } = appStore();
    
    useEffect(() => {
        setScroll(isOpen);
        if (isOpen) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'auto';
        }    
        return () => {
          document.body.style.overflowY = 'auto';
        };
      }, [isOpen]);
    
  return (
    <>
    <div className={`dropusline ${isOpen ? 'menu-active' : ''}`}>
        <div style={{padding: "2rem"}} className='row col-md-12 d-flex justify-content-end'>
          <div>
            <div onClick={() => setIsOpen(false)} className='bars-btn'>
            {/* <svg width="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7994 15.8237L12.6097 9.63278L18.7972 3.44303L15.6168 0.259277L9.42594 6.44903L3.23619 0.259277L0.0546875 3.44303L6.24219 9.63278L0.0546875 15.8225L3.23844 19.004L9.42594 12.8143L15.6134 19.004L18.7994 15.8237Z" fill="white"/>
                </svg> */}
                <FaTimes />
            </div>
          </div>
        </div>

        <ContactUsForm />
        
    </div>
    <div>
        <button className="second-btn" onClick={() => setIsOpen(true)}>{text}</button>
    </div>
    </>
  );
};

export default DropUsALine;

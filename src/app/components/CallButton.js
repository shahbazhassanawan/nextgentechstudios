'use client';

import React, { useState, useEffect,useRef } from 'react';
import { FaPhone,FaHeadphones,FaSkype,FaWhatsapp } from 'react-icons/fa';

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);
  const message = 'Hello%Cynergy%Team';

  const handleOutsideClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleCall = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
    <div
      className={`callBtn visible`}
      onClick={toggleCall}
      >
     {isOpen && 
      <div ref={divRef} className={`callBtnList`}>
        <div style={{backgroundColor:'#dc5f00',color:'white',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',borderTopLeftRadius:'10px'}} className='d-flex border-bottom p-3 align-items-start gap-3'>
          <div>
            <FaHeadphones />
          </div>
          <div>
            Let&apos;s Connect With Cynergy Team
          </div>
        </div>
        <div className='p-3 border-bottom' style={{fontWeight:'bold'}}>
          FOR SALES INQUIRY:
        </div>

        <div className='p-3 border-bottom'>
         <div className='d-flex align-items-start gap-2'>
         <div>
         <svg width={"20"} xmlns="http://www.w3.org/2000/svg" fill="#dc5f00" viewBox="0 0 24 24" stroke-width="1" stroke="#dc5f00">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>

          </div>
          <div className='underlineHover'>
          <a href="tel:+13463608407">
            +1 (346) 360-8407
          </a>
          </div>
         </div>
         <div className='d-flex align-items-start py-2 gap-2'>
         <div>
         <svg width={"20"} xmlns="http://www.w3.org/2000/svg" fill="#dc5f00" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          </div>
          <div className='underlineHover'>
          <a href="mailto:info@cynergystudios.com">
            info@cynergystudios.com
          </a>
          </div>
         </div>

         <div className='mt-3' style={{fontWeight:'bold'}}>
          FOR QUICK CONNECT:
         </div>
        
        </div>

        <div className='p-3'>
        <div className='d-flex align-items-start gap-2'>
         <div>
            <FaSkype color='#dc5f00' size={20} />
          </div>
          <div className='underlineHover'>
            <a href="skype:cynergystudios?chat" target='_blank'>
            Cynergy
            </a>
          </div>
         </div>
         <div className='d-flex align-items-start py-2 gap-2'>
         <div>
          <FaWhatsapp color='#dc5f00' size={20} />
          </div>
          <div className='underlineHover'>
            <a href={`https://wa.me/+13463608407?text=${message}`} target='_blank'>
              +1 (346) 360-8407
            </a>
          </div>
         </div>
        </div>
      </div>
      }
      <div className='call-icon'>
        <FaPhone />
      </div>
    </div>
      </div>
  );
};

export default CallButton;

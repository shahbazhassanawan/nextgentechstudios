"use client"
import React,{useRef,useEffect} from 'react'

function SubMenuDropdown({data=[],handleCategoryClick=()=>{},handleSubOptionClick=()=>{},activeCategory="", closeDropdown = () => {} }) {
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();  
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [closeDropdown]);

  return (
    <div ref={dropdownRef} className="customSelectDropdown">
                   {data.map((option, index) => (
                    <div key={index} className="my-2">
                      <div
                        style={{ cursor: "pointer",color: activeCategory === option.category ? "#DC5F00" : "black" }}
                        className="w-100 dropdownItem d-flex align-items-center  justify-content-between py-1 pe-4 ps-4 text-start"
                        onClick={() => handleCategoryClick(option.category)}
                      >
                        <div>
                          {option.category}
                        </div>
                        <div>
                        {activeCategory === option.category ? 
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.292969" y="0.374023" width="14.3203" height="2.53955" fill="#DC5F00" stroke="#DC5F00"/>
                        </svg>                        
                        :<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.11887 6.49723L10.7388 6.49756L10.7386 6.87289L7.11878 6.87355L6.11905 6.87373L6.11896 7.87346L6.11863 11.4931L5.74282 11.4927L5.74348 7.87289L5.74366 6.87253L4.7433 6.87271L1.124 6.87337L1.12386 6.49789L4.74282 6.49723L5.74246 6.49705L5.74264 5.49741L5.7433 1.87775L6.11896 1.87762L6.11896 5.49723V6.49714L7.11887 6.49723Z" fill="#DC5F00" stroke="#DC5F00" stroke-width="2"/>
                        </svg>}

                        </div>
                      </div>

                      {activeCategory === option.category && (
                        <ul className="mt-2">
                          {option.subOptions.map((subOption, subIndex) => (
                            <li
                              key={subIndex}
                              className="list-group-item dropdownSubOption"
                              onClick={() => handleSubOptionClick(subOption)}
                              style={{ cursor: "pointer" }}
                            >
                             - {subOption}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}  
                  </div>
  )
}

export default SubMenuDropdown
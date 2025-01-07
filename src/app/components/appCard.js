import React from 'react'

export default function AppCard({heading,isSlider=false,imgUrl="",description,isCenter=false,height="206",hoverEffect="",showLine=false}) {
  return (
    <div className={`appCardContainer my-1 hide-scrollbar ${hoverEffect}`} style={{height:height+'px',margin:isSlider && '16px',boxShadow:isSlider ? '0px 5.19px 16.62px 0px #f66a0026':'0px 0px 18px 0px rgba(0, 0, 0, 0.3)'}}>
       <h4 className={`cardHeading ${isCenter ?'text-center':''}`}>{heading}</h4>
        <p className={`cardDesc cardDescArea hide-scrollbar ${isCenter ?'text-center':''}`} style={{height:(height-100)+'px'}}>
        {description}
        </p>
         {showLine && <div className='cardBottomLine' />}
  </div>
  )
}

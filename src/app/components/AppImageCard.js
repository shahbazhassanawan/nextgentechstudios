import React from 'react'

export default function AppImageCard({heading,imageStyle="",imgUrl="",description,isCenter=false,height="206",hoverEffect="",showLine=false}) {
  return (
    <div className={`appImageCardContainer my-1 hide-scrollbar ${hoverEffect}`} style={{height:height+'px'}}>
        {imgUrl && 
        (
        <div className='d-flex justify-content-center my-3'>
        {imageStyle != 2 && <span></span>}
          <img src = {imgUrl} alt="image" style={{width:imageStyle == 2?'90px':'',height:imageStyle == 2?'90px':'',}} />
        </div>
      )}
       <h4 style={{zIndex:1000}} className={`cardHeading mt-4 ${isCenter ?'text-center':''}`}>{heading}</h4>
        <p className={`cardDesc cardDescArea imgCardDesc hide-scrollbar ${isCenter ?'text-center':''}`} style={{height:(height-100)+'px'}}>
        {description}
        </p>
         {showLine && <div className='cardBottomLine' />}
  </div>
  )
}

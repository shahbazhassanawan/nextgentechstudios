import React from 'react'

export default function VideoModal({closeVideo}) {
  return (
    <div className='videoModal'>
        <div style={{padding: "2rem",position:'absolute'}} className='row col-md-12 d-flex justify-content-end'>
            <div onClick={closeVideo} className='lineCircle dropuslinecross'>
            <svg width="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7994 15.8237L12.6097 9.63278L18.7972 3.44303L15.6168 0.259277L9.42594 6.44903L3.23619 0.259277L0.0546875 3.44303L6.24219 9.63278L0.0546875 15.8225L3.23844 19.004L9.42594 12.8143L15.6134 19.004L18.7994 15.8237Z" fill="white"/>
                </svg>
            </div>
        </div>
         <div
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        src="/path/Cynergy-Showreel-Final.mp4"
        autoPlay
        loop
        controls
        style={{
          width: '100%',
          height:'100vh',
          objectFit: "cover",
          cursor: "auto", 
        }}
      />
    </div>
    </div>
  )
}

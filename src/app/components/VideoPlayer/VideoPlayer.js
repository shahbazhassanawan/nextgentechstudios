"use client";
import React, { useRef, useEffect, useState } from "react";
import VideoModal from "./VideoModal";
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showVideoModal,setShowVideoModal] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [videoSize, setVideoSize] = useState({ width: "26vw", height: "36vh" });
  const [popupOpen, setPopupOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const newWidth = scrollY / 10;
      const newHeight = scrollY / 10;

      const newWidthValue = Math.min(26 + newWidth, 100);
      const newHeightValue = Math.min(36 + newHeight, 100);

      setVideoSize({
        width: `${newWidthValue}vw`,
        height: `${newHeightValue}vh`,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCursorHover = (isHovering) => {
    const cursorDiv = document.querySelector(".video-cursor");
    if (cursorDiv) {
      cursorDiv.style.opacity = isHovering ? 1 : 0;
    }
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

//   const handleCursorClick = () => {
//     setPopupOpen(true);
//   };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <>
    { showVideoModal ?<VideoModal closeVideo={()=>setShowVideoModal(false)} /> :
    <div
      className="main-video-banner"
      onClick={()=>setShowVideoModal(true)}
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "none",
      }}
      onMouseEnter={() => handleCursorHover(true)}
      onMouseLeave={() => handleCursorHover(false)}
      onMouseMove={handleMouseMove}
    //   onClick={handleCursorClick}
    >
      <video
        ref={videoRef}
        src="/path/Cynergy-Showreel-Final.mp4"
        muted
        autoPlay
        loop
        style={{
          width: screenWidth < 480 ? '100%' : videoSize.width,
          height: screenWidth < 480 ? ''  : videoSize.height,
          objectFit: "cover",
          transition: "width 0.9s, height 0.6s",
        }}
      />
      <div
        className="video-cursor"
        style={{
          position: "absolute",
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: "translate(-50%, -50%)",
          height: "100px",
          width: "100px",
          backgroundColor: "#dc5f00",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          opacity: 0,
          transition: "opacity 0.3s",
          borderRadius: "50%",
          cursor: "none"
        }}
        // onClick={handleCursorClick}
      >
        Play Reel
      </div>
      {/* {popupOpen && (
        <div
          className="video-popup"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 1000,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h2>Video Popup</h2>
          <p>Your video will play here.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )} */}
    </div>
     }
    </>
  );
};

export default VideoPlayer;

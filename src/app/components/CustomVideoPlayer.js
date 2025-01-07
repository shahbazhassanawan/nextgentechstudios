"use client";
import React, { useRef, useState, useEffect } from "react";

const CustomVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error trying to play the video:", error);
      }
    };

    if (video) {
      playVideo();
    }

    return () => {
      video.pause();
      setIsPlaying(false);
    };
  }, [videoSrc]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const initialHeight = 600;
    const maxHeight = 800;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newHeight = initialHeight + scrollPosition * 0.3;

      if (newHeight < initialHeight) newHeight = initialHeight;
      if (newHeight > maxHeight) newHeight = maxHeight;

      if (containerRef.current) {
        containerRef.current.style.height = `${newHeight}px`;
        containerRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video-banner">
      <div
        className="video-second col-md-12 d-flex justify-content-center align-items-center"
        style={{
          position: "relative",
        }}
        ref={containerRef}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          onEnded={() => setIsPlaying(false)}
          onClick={handlePlayPause}
        />
        <button
          onClick={handlePlayPause}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {isPlaying ? null : (
            <img src="./images/play-btn.svg" alt="play btn" className="pe" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

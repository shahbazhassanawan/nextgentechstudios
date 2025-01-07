"use client";
import React, { useState, useEffect } from "react";

const CustomizeHeading = () => {
  const words = ["Connect.", "Grow.", "Inspire."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 130;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let typingTimeout;

    if (charIndex < words[currentWordIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentWordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      const wordTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, delayBetweenWords);

      return () => clearTimeout(wordTimeout);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentWordIndex]);
  return (
    <>
      <h1 className="w-100">
        We Design Apps <br/> That{" "}
        <strong>
        <span style={{ color: "#dc5f00" }}>{displayedText}</span>
        </strong>
      </h1>
    </>
  );
};

export default CustomizeHeading;

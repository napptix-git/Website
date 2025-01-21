import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 right-0 w-4 h-full bg-gradient-to-b from-green-900 via-green-500 to-green-300 transform origin-top transition-transform scroll-smooth"
      style={{ transform: `scaleY(${scrollPercentage / 100})` }}
    />
  );
};

export default ScrollIndicator;

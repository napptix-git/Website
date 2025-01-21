"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SidebarNavigation = ({ activeSection }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.to(sidebarRef.current, {
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="fixed top-20 left-10 flex flex-col space-y-4 text-gray-400"
    >
      {["On Game", "In Game", "Off Game", "Pro Game"].map((section) => (
        <div
          key={section}
          className={`text-lg font-semibold ${
            activeSection === section ? "text-white" : "text-gray-600"
          }`}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default SidebarNavigation;

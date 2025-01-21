import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CircularTextAnimation = () => {
  const words = ["Engage", "Monetize", "Advertise", "Dominate", "Gaming 360°", "Napptix"];
  const wordRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

     // ✅ Remove existing ScrollTriggers before creating a new one
     ScrollTrigger.getAll().forEach(trigger => trigger.kill());


    // ✅ Ensure first word is visible at start
    requestAnimationFrame(() => {
      gsap.set(wordRefs.current, { opacity: 0 });
      gsap.set(wordRefs.current[0], { opacity: 1});
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: document.documentElement,
        start: "top+=100px top",
        end: "bottom+=100%",
        scrub: 1,
        pin: containerRef.current,
        pinSpacing: true,
        // markers: true,
      },
    });

    words.forEach((word, i) => {
      if (i < words.length - 1) {
        timeline
          .to(wordRefs.current[i], {
            opacity: 0,
            y: -100,
            x: -150,
            scale: 0.5,
            rotate: -25,
            duration: 2.5,
            ease: "power2.out",
            immediateRender: false, // ✅ Fix: Prevents GSAP from skipping animation
          })
          .to(wordRefs.current[i + 1], {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          }, "-=1");
      }
    });

    timeline.to(wordRefs.current[words.length - 1], {
  opacity: 1, // Makes "Napptix" fully visible
  duration: 0.5, // Smooth fade-in
  ease: "power2.out",
});


    // ✅ Force GSAP to recalculate scroll positions after load
    setTimeout(() => {
      ScrollTrigger.refresh();
    },100);

  }, []);

  return (
    <div className="relative w-full min-h-[100vh] bg-white overflow-hidden">
      <div ref={containerRef} className="relative w-full h-screen flex justify-center items-center">
        <div className="relative w-full h-full flex items-center">
          <div className="absolute left-[100px] top-1/2 transform -translate-y-1/2 h-[150px] w-[150px] bg-green-500 rounded-full"></div>

          <div className="absolute left-[250px] top-1/2 transform -translate-y-1/2 w-max leading-[180px]">
            {words.map((word, index) => (
              <h1
                key={index}
                ref={(el) => (wordRefs.current[index] = el)}
                className="absolute top-[-100px] left-[100px] text-[180px] w-full  font-bold text-black opacity-0 whitespace-nowrap"
              >
                {word}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTextAnimation;

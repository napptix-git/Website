import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  { title: "IN GAME", highlight: "Engage Players Across Platforms.", content: "Transform gaming experiences through innovative in-game interactions." },
  { title: "ON GAME", highlight: "Capture Attention During Play.", content: "Deliver seamless, engaging content while players are immersed in their gaming moments." },
  { title: "OFF GAME", highlight: "Extend Presence, Beyond Screens.", content: "Immerse your brand in the thrill of live gaming streams and real-time engagement." },
  { title: "PRO GAME", highlight: "Maximize Reach with Esports.", content: "Leverage competitive gaming to drive deeper audience connections." }
];

const ScrollAnimate = () => {
  const scrollContainer = useRef(null);
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track active section

  useEffect(() => {
    // Highlight active section and fade out others
    sectionRefs.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "top 20%",
        scroller: scrollContainer.current,
        scrub: true,
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index)
      });

      // Animate inner content (highlight & paragraph)
      gsap.fromTo(
        section.querySelector(".inner-content"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "top 30%",
            scroller: scrollContainer.current,
            toggleActions: "play none reverse none",
          },
        }
      );

      // Fade out content when scrolling past
      gsap.to(section.querySelector(".inner-content"), {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "top 10%",
          scroller: scrollContainer.current,
          toggleActions: "play none reverse none",
        },
      });
    });

    // Stop internal scrolling when reaching the last section
    ScrollTrigger.create({
      trigger: sectionRefs.current[sectionsData.length - 1],
      start: "top center",
      end: "bottom top",
      scroller: scrollContainer.current,
      pin: true,
      pinSpacing: false,
      onLeave: () => {
        scrollContainer.current.style.overflowY = "hidden";
        document.body.style.overflowY = "auto";
      },
      onEnterBack: () => {
        scrollContainer.current.style.overflowY = "scroll";
        document.body.style.overflowY = "hidden";
      },
    });
  }, []);

  return (
    <div ref={scrollContainer} className="h-screen w-full flex overflow-y-scroll bg-gray-100">
      {/* LEFT FIXED MAJOR TITLES */}
      <div className="w-1/4 h-screen flex flex-col justify-center fixed left-10 top-0">
        {sectionsData.map((section, index) => (
          <h1
            key={index}
            className={`text-3xl uppercase transition-all duration-300 ${
              activeIndex === index ? "text-black font-bold" : "text-gray-400"
            }`}
          >
            {section.title}
          </h1>
        ))}
      </div>

      {/* SCROLLABLE CONTENT SECTIONS */}
      <div className="ml-1/4 w-3/4 pl-20 flex flex-col justify-center">
        {sectionsData.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="min-h-[100vh] flex flex-col justify-center">
            <div className="inner-content">
              <h2 className="text-green-600 text-2xl font-bold">{section.highlight}</h2>
              <p className="text-gray-700 mt-4">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimate;

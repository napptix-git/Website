import ballons from "../../assets/ballons.png";
import plane from "../../assets/plane.png";
import sunflower from "../../assets/sunflower.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Store, query and manage data",
    description: "Scalable and robust database backed by your favorite technologies.",
    image: ballons,
  },
  {
    title: "Upload and manage files",
    description: "Securely store files with advanced compression, encryption and image transformations.",
    image: plane,
  },
  {
    title: "Customize and extend your backend",
    description: "Deploy and scale serverless functions in secure, isolated runtimes.",
    image: sunflower,
  },
];

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(textRefs.current, {
      opacity: 1,
      y: 0,
    //   stagger: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        // scrub: true,
        // pin: true,
        // anticipatePin: 1,
      },
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
        //   const progress = Math.round(self.progress * (sections.length));
        //   imageRef.current.src = sections[progress].image;
        },
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-white text-black overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-16 px-8">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            className="opacity-0 transform translate-y-10 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-gray-400">{section.description}</p>
          </div>
        ))}
        <div className="relative w-full flex justify-center">
          <img
            ref={imageRef}
            src={sections[0].image}
            alt="Phone view"
            className="w-80 shadow-lg rounded-lg transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;

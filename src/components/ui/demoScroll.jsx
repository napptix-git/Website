import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BoxGrid = () => {
  const boxesRef = useRef([]);
  const content = [
    {
      heading: "IN GAME",
      shortDesc: "Real-time Engagement",
      detailDesc: "Engage players directly in their gaming experience through seamless and interactive in-game advertisements."
    },
    {
      heading: "ON GAME",
      shortDesc: "Dynamic Overlays",
      detailDesc: "Enhance visibility with overlays that integrate smoothly into live-streamed gaming sessions, maximizing brand exposure."
    },
    {
      heading: "OFF GAME",
      shortDesc: "Beyond Screens",
      detailDesc: "Extend your brand’s reach beyond gameplay with tailored content that keeps audiences engaged even when they’re not playing."
    },
    {
      heading: "PRO GAME",
      shortDesc: "Elite Sponsorships",
      detailDesc: "Partner with top-tier professional gamers to create high-impact sponsorship campaigns that drive deep audience connections."
    }
  ];

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      if (!box) return;

      ScrollTrigger.create({
        trigger: box,
        start: "top 40%",
        end: "bottom center",
        onEnter: () => {
          gsap.to(boxesRef.current, { height: 70, duration: 1.2, ease: "power2.out" });
          gsap.to(box, { height: 300, duration: 1.2, ease: "power2.out" });
          gsap.to(box.querySelectorAll("p"), { opacity: 1, duration: 0.5, ease: "power2.out" });
          if (index > 0) {
            gsap.to(boxesRef.current[index - 1].querySelectorAll("p"), { opacity: 0, duration: 0.5, ease: "power2.out" });
          }
        },
        onLeaveBack: () => {
          gsap.to(box, { height: 70, duration: 1.2, ease: "power2.out" });
          gsap.to(box.querySelectorAll("p"), { opacity: 0, duration: 1.2, ease: "power2.out" });
          if (index > 0) {
            gsap.to(boxesRef.current[index - 1], { height: 300, duration: 0.5, ease: "power2.out" });
            gsap.to(boxesRef.current[index - 1].querySelectorAll("p"), { opacity: 1, duration: 0.5, ease: "power2.out" });
          }
        },
      });
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[80%] bg-white shadow-2xl rounded-3xl p-10 h-[110vh] overflow-y-auto flex flex-col  gap-4 ml-5">
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) boxesRef.current[index] = el;
            }}
            className="w-[500px] bg-green-400 shadow-lg rounded-lg flex flex-col text-white text-xl font-bold h-[70px] p-5 ml-[160px]"
          >
            <h2 className="text-2xl font-extrabold">{item.heading}</h2>
            <p className="text-lg text-blue-500 opacity-0">{item.shortDesc}</p>
            <p className="text-sm text-white opacity-0">{item.detailDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxGrid;

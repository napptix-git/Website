import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedSection = ({ title, text, bgColor, forwardedRef }) => {
    return (
        <div
            ref={forwardedRef}
            className="relative flex gap-4 transition-all duration-500 ease-out opacity-50"
            style={{ height: 50 }}
        >
            <div className={`w-1 ${bgColor} rounded-full transition-all duration-500 opacity-25`} />
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 transition-opacity duration-500">{title}</h2>
                <div className="overflow-hidden h-0">
                    <p className="mt-4 text-gray-600 opacity-0 transition-opacity duration-500">{text}</p>
                </div>
            </div>
        </div>
    );
};

const GameScrollAnimation = () => {
    const sectionsRef = useRef([]);
    const containerRef = useRef(null);

    const items = [
        { title: "In Game", text: "Live gaming experience...", bgColor: "bg-blue-500" },
        { title: "On Game", text: "Beyond screen engagement...", bgColor: "bg-green-500" },
        { title: "Off Game", text: "Transform gaming breaks...", bgColor: "bg-yellow-500" },
        { title: "Pro Game", text: "Elevate to professional gaming...", bgColor: "bg-red-500" }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach(st => st.kill());

        const container = containerRef.current;
        if (!container) return;

        sectionsRef.current.forEach((section, index) => {
            if (section) {
                gsap.set(section, {
                    height: 50,
                    opacity: 0.5,
                    scale: 0.95,
                    borderRadius: "10px"
                });
                gsap.set(section.querySelector(".overflow-hidden"), { height: 0 });
                gsap.set(section.querySelector("p"), { opacity: 0 });
                gsap.set(section.querySelector(".w-1"), { opacity: 0.25 });
            }
        });

        sectionsRef.current.forEach((section, index) => {
            if (section) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top center+=150",
                    end: "bottom center-=150",
                    scroller: container,
                    // scrub: 1,
                    toggleActions: "play reverse play reverse",

                    onEnter: () => {
                        gsap.to(section, {
                            height: 250,
                            opacity: 1,
                            scale: 1,
                            borderRadius: "20px",
                            duration: 0.5,
                            ease: "power2.out"
                        });
                        gsap.to(section.querySelector(".overflow-hidden"), {
                            height: section.querySelector(".overflow-hidden").scrollHeight,
                            duration: 0.5
                        });
                        gsap.to(section.querySelector("p"), { opacity: 1, duration: 0.3, delay: 0.2 });
                        gsap.to(section.querySelector(".w-1"), { opacity: 1, duration: 0.3 });
                    },

                    onLeave: () => {
                        gsap.to(section, {
                            height: 50,
                            opacity: 0.5,
                            scale: 0.95,
                            borderRadius: "10px",
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.2
                        });
                        gsap.to(section.querySelector(".overflow-hidden"), { height: 0, duration: 0.5 });
                        gsap.to(section.querySelector("p"), { opacity: 0, duration: 0.3 });
                        gsap.to(section.querySelector(".w-1"), { opacity: 0.25, duration: 0.3 });
                    },

                    onEnterBack: () => {
                        gsap.to(section, {
                            height: 250,
                            opacity: 1,
                            scale: 1,
                            borderRadius: "20px",
                            duration: 0.5,
                            ease: "power2.out"
                        });
                        gsap.to(section.querySelector(".overflow-hidden"), {
                            height: section.querySelector(".overflow-hidden").scrollHeight,
                            duration: 0.5
                        });
                        gsap.to(section.querySelector("p"), { opacity: 1, duration: 0.3, delay: 0.2 });
                        gsap.to(section.querySelector(".w-1"), { opacity: 1, duration: 0.3 });
                    },

                    onLeaveBack: () => {
                        gsap.to(section, {
                            height: 50,
                            opacity: 0.5,
                            scale: 0.95,
                            borderRadius: "10px",
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.2
                        });
                        gsap.to(section.querySelector(".overflow-hidden"), { height: 0, duration: 0.5 });
                        gsap.to(section.querySelector("p"), { opacity: 0, duration: 0.3 });
                        gsap.to(section.querySelector(".w-1"), { opacity: 0.25, duration: 0.3 });
                    }
                });
            }
        });

        ScrollTrigger.refresh();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-[90%] max-w-[800px] mx-auto mt-20 h-[80vh] overflow-y-scroll shadow-2xl rounded-3xl p-8 bg-white"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
            <div className="flex flex-col gap-8 pb-20">
                {items.map((item, index) => (
                    <AnimatedSection
                        key={index}
                        title={item.title}
                        text={item.text}
                        bgColor={item.bgColor}
                        forwardedRef={(el) => (sectionsRef.current[index] = el)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameScrollAnimation;

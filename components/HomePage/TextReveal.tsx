import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Initialize GSAP and register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "Clienet is a digital agency.; But first of all we are people who ; love what they do ; and do it with passion.; visual identifications. ; We will be happy to help you ; with your project.";

const TextReveal: React.FC = () => {
  useEffect(() => {
    // Create a timeline with the desired animation
    const tl = gsap.timeline();
    tl.to(".para-container p", {
      backgroundPositionX: "0%",
      duration: 1.6,
      stagger: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".para-container",
        scrub: 1.6,
        pin: true,
        start: "top",
        end: "+=3000",
        pinSpacing: true,
      },
      ease: "power2.out",
    })

    // Clean up the scroll trigger when the component is unmounted
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="w-screen min-h-screen bg-primary-dark flex justify-center items-end "
      style={{padding : "25% 0%"}}
    >
      <div className="para-container w-screen h-screen text-primary-light text-xl font-bold font-secondary sm:text-4xl sm:gap-y-8 lg:text-5xl xl:text-6xl 2xl:text-7xl xl:pt-72 xl:pb-72 gap-y-4 flex flex-col justify-center items-center">
        {/* Render the paragraphs */}
        {paragraph.split(";").map((item, index) => (
          <React.Fragment key={index}>
            <p>{item.trim()}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;

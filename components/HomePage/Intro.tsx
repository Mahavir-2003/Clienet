import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Intro: React.FC = () => {
  const words: string[] = ["sites", "brand", "trust"];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const staggeredTextRef = useRef<HTMLSpanElement>(null);

  const animationDuration = 0.8;
  const animationStagger = 0.08;
  const delayBetweenWords = 1.3;

  useEffect(() => {
    gsap.from(".intro-lines h1", {
      duration: 1.2,
      stagger: 0.2,
      opacity: 0,
      ease: "expo.inOut",
    });

    gsap.to(".horizontal-line", {
      duration: 0.8,
      width: "100%",
      ease: "expo.inOut",
      onComplete: () => {
        setIsLoaded(true);
      },
    });
  }, []);

  useEffect(() => {
    const animateLetters = () => {
      const chars = staggeredTextRef.current?.querySelectorAll(".char");

      if (chars) {
        gsap.set(chars, { y: "100%", opacity: 0 });

        const tl = gsap.timeline({
          onComplete: () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          },
        });

        tl.to(chars, {
          delay: isLoaded ? 0 : 0.8,
          duration: animationDuration,
          y: "0%",
          opacity: 1,
          stagger: animationStagger,
          ease: "expo.inOut",
        })
          .to(chars, {
            duration: animationDuration,
            opacity: 0,
            y: "-100%",
            stagger: animationStagger,
            ease: "expo.inOut",
            delay: delayBetweenWords,
          })
          .set(chars, { y: "100%", opacity: 0 });
      }
    };

    animateLetters();
  }, [currentWordIndex]);

  return (
    <div className="w-screen h-screen relative bg-primary-dark flex justify-center">
      <div className="h-full w-11/12 sm:w-10/12 flex flex-col justify-end items-start text-white pb-10 gap-y-4 px-4 sm:px-0">
        <div className="intro-lines pb-28 text-5xl md:text-8xl font-semibold font-primary  sm:gap-y-8 lg:text-8xl xl:text-9xl flex flex-col tracking-wide overflow-hidden">
          <h1 className="overflow-hidden">
            We make{" "}
            <span className="staggered-text inline-block" ref={staggeredTextRef}>
              <span className="char-container inline-block">
                {words[currentWordIndex].split("").map((char, index) => (
                  <span className="char inline-block" key={index}>
                    {char}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h1>for business</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="horizontal-line w-0 h-px bg-primary-light"></div>
        </div>
        <div className="w-full flex justify-between items-center mt-4">
          <div>
            <p className="text-base sm:text-2xl  ">BASED IN MEHSANA 384170 | INDIA</p>
          </div>
          <div>
            <p className="text-base sm:text-2xl">LAST UPDATE 10TH FEBRUARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

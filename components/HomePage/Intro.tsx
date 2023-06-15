import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Intro = () => {
  const words: string[] = ["Hello", "World", "Animation"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const chars = document.querySelectorAll(".letter");

    gsap.from(chars, {
      top: "100%",
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
    });
  }, [currentWordIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="w-screen h-screen relative bg-primary-dark">
        <div className=" text-primary-light">
          <div className="">
            <h1>hello there</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Intro;

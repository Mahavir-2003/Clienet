import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageIntro: React.FC= () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-container",
        scrub: 1.6,
        pin: true,
        start: "top",
        end: "+=3000",
        pinSpacing: true,
      },
    });
    tl.to(".intro-video", {
      width: "100%",
      ease: "power2.out",
    })
    .to(".intro-video", {
      width: "0%",
      ease: "power2.out",
      })

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="image-container w-screen h-screen bg-primary-dark relative flex justify-center items-center">
      <div className=" w-10/12 h-full flex justify-center items-center">
        <video
          src="https://media.wearemotto.com/app/uploads/2022/11/14104333/home-hero-opt.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover intro-video"
        ></video>
      </div>
    </div>
  );
};

export default ImageIntro;

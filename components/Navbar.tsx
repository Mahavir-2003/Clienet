import { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import MenuArrow from "../public/svg/Menu_Arrow.svg";
import Menu from "./Menu";

const Navbar: React.FC = () => {
  // State to manage the menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  // Effect to handle the menu animation
  useEffect(() => {
    const animationDuration = 0.8;
    const easing = "expo.inOut";
    const circleAnimation = {
      duration: animationDuration,
      delay: -animationDuration,
      ease: easing,
      css: {
        strokeDashoffset: isMenuOpen ? -97 : 0,
        strokeDasharray: 97,
      },
    };

    const timeline = gsap.timeline();
    timeline
      .to(".menu", {
        duration: animationDuration,
        height: isMenuOpen ? "100vh" : "0vh",
        ease: easing,
        position: isMenuOpen ? "absolute" : "relative",
      })
      .to('[data-name="circle"]', circleAnimation)
      .to(".menu-arrow", {
        duration: animationDuration,
        stroke: isMenuOpen ? "black" : "white",
        ease: easing,
        delay: -animationDuration,
      })
      .to(".logo-name", {
        duration: animationDuration,
        color: isMenuOpen ? "black" : "white",
        ease: easing,
        delay: -animationDuration,
      });

    // Cleanup the timeline when the component unmounts
    return () => {
      timeline.kill();
    };
  }, [isMenuOpen]);

  // to animate navbar on initial load
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".nav-container", {
        duration: 0.8,
        opacity: 0,
        ease: "expo.inOut",
      })

    // Cleanup the timeline when the component unmounts
    return () => {
      timeline.kill();
    };
  }
  , []);

  return (
    <header className="nav-container absolute w-full h-auto top-0 left-0">
      <nav className="bg-black w-full h-auto flex justify-center items-start relative">
        <div className="navbar z-40 absolute top-0 flex justify-between items-center w-11/12 sm:w-10/12 w- pt-5 lg:pt-8">
          <span className="logo">
            <p className="logo-name text-white font-primary text-sm sm:text-2xl font-semibold tracking-widest">
              CLIENET.
            </p>
          </span>
          <span className="Menu-icon">
            <MenuArrow
              className="menu-arrow w-10 stroke-white stroke-2 rotate-180 sm:w-14 hover:cursor-pointer"
              onClick={toggleMenu}
            />
          </span>
        </div>
        <Menu toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Navbar;

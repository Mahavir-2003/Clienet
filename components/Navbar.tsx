import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Menu from "./Menu";
import { gsap } from "gsap";
import MenuArrow from "../public/svg/Menu_Arrow.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  useEffect(() => {
  const tl = gsap.timeline();

  const animationDuration = 1;
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

  tl.to(".menu", {
    duration: animationDuration,
    height: isMenuOpen ? "100vh" : "0vh",
    ease: easing,
    position: isMenuOpen ? "absolute" : "relative",
  }).to('[data-name="circle"]', circleAnimation);
}, [isMenuOpen]);


  return (
    <header className="w-full h-auto  top-0 left-0">
      <nav className="bg-black w-full h-auto flex justify-center items-start relative">
        <div className="navbar z-10 absolute top-0 flex justify-between items-center w-11/12 sm:w-9/12 pt-5 lg:pt-8">
          <span className="logo">
            <p className=" font-primary text-sm sm:text-2xl font-semibold tracking-widest">
              CLIENET.
            </p>
          </span>
          <span className="Menu-icon">
            <MenuArrow
              className="w-10 rotate-180 sm:w-14 hover:cursor-pointer"
              onClick={toggleMenu}
            />
          </span>
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;

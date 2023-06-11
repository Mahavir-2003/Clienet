import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Menu from "./Menu";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to(".menu", {
        duration: 0.7,
        height: "100vh",
        ease: "expo.inOut",
        position: "fixed",
      })
    } else {
      tl.to(".menu", {
        duration: 0.7,
        height: "0vh",
        ease: "expo.inOut",
        position: "relative",
      });
    }
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
            <Image src="/svg/Menu_Arrow.svg" alt="menu" width={40} height={40} className="w-10 sm:w-14 hover:cursor-pointer" onClick={toggleMenu} />
          </span>
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;

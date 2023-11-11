import { gsap } from "gsap";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Cursor = () => {
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("ul .link");

    const cursorTextContainer = document.querySelectorAll(
      ".cursor-text-container"
    );

    const cursorText = document.querySelectorAll(".cursor-text");

    if (path === "/") {
      const projects = document.querySelectorAll(".project-box");
      const paragraphContainer = document.querySelectorAll(".para-container");

      //paragraph
      paragraphContainer[0].addEventListener("mouseenter", (event) => {
        gsap.to(cursor, {
          width: "200px",
          height: "200px",
          backgroundColor: "rgba(255 , 255, 255 ,0.5)",
          backdropFilter: "blur(10px)",
          mixBlendMode: "normal",
          border: "none",
          ease: "power2.out",
        });
        cursorText[0].innerHTML = "Scroll to reveal";
        gsap.set(cursorText[0], {
          fontSize: "20px",
        });
        gsap.set(cursorTextContainer, { display: "flex" });
      });
      paragraphContainer[0].addEventListener("mouseleave", (event) => {
        gsap.to(cursor, {
          width: "20px",
          height: "20px",
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          mixBlendMode: "difference",
          border: "2px solid #fff",
          ease: "power2.out",
        });
        cursorText[0].innerHTML = "View";
        gsap.set(cursorTextContainer, { display: "none" });
      });

      //project
      projects.forEach((project) => {
        project.addEventListener("mouseenter", (event) => {
          gsap.to(cursor, {
            width: "200px",
            height: "200px",
            backgroundColor: "rgba(255 , 255, 255 ,0.5)",
            backdropFilter: "blur(10px)",
            mixBlendMode: "normal",
            border: "none",
            ease: "power2.out",
          });
          cursorText[0].innerHTML = "View";
          gsap.set(cursorTextContainer, { display: "flex" });
        });
        project.addEventListener("mouseleave", (event) => {
          gsap.to(cursor, {
            width: "20px",
            height: "20px",
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            mixBlendMode: "difference",
            border: "2px solid #fff",
            ease: "power2.out",
          });
          cursorText[0].innerHTML = "View";
          gsap.set(cursorTextContainer, { display: "none" });
        });
      });
    }

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0 });
    };
    document.addEventListener("mousemove", onMouseMove);

    const cursorReset = () => {
      gsap.to(cursor, {
        width: "20px",
        height: "20px",
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        mixBlendMode: "difference",
        border: "2px solid #fff",
        ease: "power2.out",
      });
      cursorText[0].innerHTML = "View";
      gsap.set(cursorTextContainer, { display: "none" });
    };

    cursorReset();

    //links
    links.forEach((link) => {
      link.addEventListener("mouseenter", (event) => {
        gsap.to(cursor, {
          width: "150px",
          height: "150px",
          backgroundColor: "rgba(255 , 255, 255 ,0.5)",
          backdropFilter: "blur(5px)",
          mixBlendMode: "normal",
          border: "none",
          ease: "power2.out",
        });
        cursorText[0].innerHTML = "Visit";
        gsap.set(cursorTextContainer, { display: "flex" });
      });
      link.addEventListener("mouseleave", (event) => {
        gsap.to(cursor, {
          width: "20px",
          height: "20px",
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          mixBlendMode: "difference",
          border: "2px solid #fff",
          ease: "power2.out",
        });
        cursorText[0].innerHTML = "View";
        gsap.set(cursorTextContainer, { display: "none" });
      });
    });
  }, [path]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text-container">
        <p className="cursor-text">View</p>
      </span>
    </div>
  );
};

export default Cursor;

import { gsap } from "gsap";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll(".link");
    const projects = document.querySelectorAll(".project-box");
    const cursorTextContainer = document.querySelectorAll(".cursor-text-container");
    const cursorText = document.querySelectorAll(".cursor-text");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0 });
    };
    document.addEventListener("mousemove", onMouseMove);

   

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
  });

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text-container">
        <p className="cursor-text">View</p>
      </span>
    </div>
  );
};

export default Cursor;

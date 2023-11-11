import React, { useEffect, useRef } from "react";
import ProjectBox from "./ProjectBox";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Projects from "@/public/data/projects";
import Link from "next/link";


// Initialize GSAP and register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const ProjectsShowcase: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current;
      const tl = gsap.timeline();
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: 1.6,
          start: "top",
          end: "bottom bottom",
        },
      });
      const t2 = gsap.timeline();

      tl.to(".project-heading-two", {
        x: "30%",
        scrollTrigger: {
          trigger: container,
          scrub: 1.6,
          start: "top",
          end: "bottom",
          pin: ".project-heading-container",
          pinSpacing: true,
        },
        ease: "power2.out",
      })
      
      t1.to(".project-header", {
        opacity: 1,
        ease: "power2.out",
      }).to(".project-header", {
        opacity: 0,
        ease: "power2.out",
      })
      
      t2.to(".left", {
        x: "5%",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          scrub: 1.6,
          start: "top",
          end: "bottom",
        },
      }).to(".right", {
        x: "-5%",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          scrub: 1.6,
          start: "top",
          end: "bottom",
        },
      }).play();

      return () => {
        if(tl) tl.kill();
        if(t1) t1.kill();
        if(t2) t2.kill();
      };
    }
  }, []);

  return (
    <div
      className="w-screen bg-primary-dark flex flex-col justify-center items-center relative"
      style={{padding : "30% 0% 30% 0%"}}
      ref={containerRef}
    >
      <div className="w-10/12 work-container flex flex-col z-20 gap-y-10">
        {Projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.project_ID}`}><ProjectBox  {...project} /></Link>
        ))}
      </div>
      <div className="project-heading-container z-0 absolute top-0 left-0 w-full h-screen text-white text-4xl md:text-7xl flex justify-center items-center flex-col tracking-wide">
        <p className="project-heading-one project-header opacity-0">Selected</p>
        <p className="project-heading-two pl-20 project-header opacity-0">Projects</p>
      </div>
    </div>
  );
};

export default ProjectsShowcase;

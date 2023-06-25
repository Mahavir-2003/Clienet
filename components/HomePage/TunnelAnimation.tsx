import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TunnelAnimation: React.FC = () => {
  useEffect(() => {
    gsap.set(".bolt polygon", { transformOrigin: "center center" });

ScrollTrigger.defaults({
  trigger: ".bolt svg",
  start: "top top",
  end: "bottom bottom"
});

let svgStagger = gsap.timeline({ scrollTrigger: { scrub: true } });
svgStagger.from(".bolt polygon", { scale: 0.1, ease: "power3.in", stagger: 0.02 });
svgStagger.from(".bolt polygon", { opacity: 0, duration: 0.3, ease: "power3.in", stagger: 0.02 }, "<");

let bgChange = gsap.timeline({ scrollTrigger: { start: "70% bottom", toggleActions: "restart none none reverse" } });
bgChange.to(".section-height", { color: "white", duration: 0.2 });
bgChange.to(".bolt_bg", { color: "black", duration: 0.2 }, "<" );
bgChange.to(".bolt_svg", { color: "#fff", duration: 0.2 }, "<");

let headingScale = gsap.timeline({ scrollTrigger: { scrub: true } });
headingScale.from(".heading-anim", { scale: 0.6, ease: "none" });

let headingFade = gsap.timeline({ scrollTrigger: { start: "60% bottom", end: "80% bottom", toggleActions: "restart reverse restart reverse" } });
headingFade.to(".heading-anim", { opacity: 1, duration: 0.2 });

  }, []);

  return (
    <div className="bolt">
      <div className="bolt_bg w-embed" style={{ color: "white" }}>
        {/*?xml version="1.0" encoding="UTF-8"?*/}
        <svg
          fill="#0a0a0b"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 325.54 598.07"
        >
          <polygon
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(1,0,0,1,0,0)"
          ></polygon>
        </svg>
      </div>
      <div className="bolt_svg w-embed" style={{ color: "rgb(255, 255, 255)" }}>
        {/*?xml version="1.0" encoding="UTF-8"?*/}
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 325.54 598.07"
        >
          <defs>
            <style>
              {`
              #layer_1 { background-color: transparent }
              .cls-1 { fill: none; stroke: transparent; stroke-miterlimit: 6; stroke-width: 1px; }
            `}
            </style>
          </defs>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(1,0,0,1,0,0)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(1,0,0,1,0,0)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(1,0,0,1,0,0)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.9993,0,0,0.999349,0.11394,0.19468)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.8638,0,0,0.863836,22.16927,40.71848)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.7442,0,0,0.744246,41.63657,76.48067)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.6393,0,0,0.639282,58.71114,107.86911)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.5477,0,0,0.547698,73.62087,135.25638)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.4683,0,0,0.468306,86.54481,158.99777)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.4,0,0,0.399974,97.662,179.43177)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.3416,0,0,0.341622,107.16777,196.88135)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.2922,0,0,0.292228,115.20861,211.65213)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 1 }}
            transform="matrix(0.2508,0,0,0.250824,121.94729,224.03358)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.9988 }}
            transform="matrix(0.2165,0,0,0.216499,127.5303,234.29813)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.7579 }}
            transform="matrix(0.1884,0,0,0.188396,132.10413,242.70205)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.5634 }}
            transform="matrix(0.1657,0,0,0.165713,135.79901,249.48517)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.409 }}
            transform="matrix(0.1477,0,0,0.147704,138.72887,254.87058)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.2887 }}
            transform="matrix(0.1337,0,0,0.133677,141.00765,259.06522)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.1972 }}
            transform="matrix(0.123,0,0,0.122998,142.74929,262.25866)"
          ></polygon>
          <polygon
            className="cls-1"
            points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
            data-svg-origin="162.7700024843216 299.0399842262268"
            style={{ transformOrigin: "0px 0px", opacity: 0.1293 }}
            transform="matrix(0.1151,0,0,0.115086,144.03518,264.62467)"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default TunnelAnimation;

// <!--  GSAP ANIMATION  -->
// <script>
// gsap.set(".bolt polygon", { transformOrigin: "center center" });

// ScrollTrigger.defaults({
//   trigger: ".section-height",
//   start: "top top",
//   end: "bottom bottom"
// });

// let svgStagger = gsap.timeline({ scrollTrigger: { scrub: true } });
// svgStagger.from(".bolt polygon", { scale: 0.1, ease: "power3.in", stagger: 0.02 });
// svgStagger.from(".bolt polygon", { opacity: 0, duration: 0.3, ease: "power3.in", stagger: 0.02 }, "<");

// let bgChange = gsap.timeline({ scrollTrigger: { start: "70% bottom", toggleActions: "restart none none reverse" } });
// bgChange.to(".section-height", { color: "white", duration: 0.2 });
// bgChange.to(".bolt_bg", { color: "black", duration: 0.2 }, "<");
// bgChange.to(".bolt_svg", { color: "#fff", duration: 0.2 }, "<");

// let headingScale = gsap.timeline({ scrollTrigger: { scrub: true } });
// headingScale.from(".heading-anim", { scale: 0.6, ease: "none" });

// let headingFade = gsap.timeline({ scrollTrigger: { start: "60% bottom", end: "80% bottom", toggleActions: "restart reverse restart reverse" } });
// headingFade.to(".heading-anim", { opacity: 1, duration: 0.2 });
// </script>

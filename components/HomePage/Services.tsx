import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const servicesContainer = useRef(null);

    useEffect(() => {
        const container = servicesContainer.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: "bottom center",
                scrub: 1.6,
            }
        });

        tl.to(".services-header-two",{
            x: "10vw",
            ease : "power2.out"
        })

        tl.fromTo(".services-marquee p",{
            x:"20%",
            ease : "power1.inOut"
        },{
            x:"-30%",
            ease : "power1.inOut"
        })

    },[]);

  return (
    <div ref={servicesContainer} className='w-screen flex justify-center flex-col items-center bg-primary-dark'>
        <div className='w-10/12 flex justify-center flex-col text-primary-light tracking-wider gap-y-20'>
            <div className="services-header-container w-full text-4xl md:text-7xl font-semibold flex flex-col gap-y-4 overflow-hidden">
                <h1 className="services-header-one">What exactly</h1>
                <h1 className="services-header-two pl-36">we do ?</h1>
            </div>
            <div className="services-container w-full flex flex-col">
                <div className="service-item-container w-full flex flex-col lg:flex-row justify-between gap-y-10">
                    <p className='w-full text-2xl'>01/ WEB DESIGN</p>
                    <p className='w-full text-xl md:text-2xl lg:text-4xl'>&emsp;&emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellendus ut atque omnis molestiae adipisci provident. Numquam incidunt tempore temporibus itaque? Beatae accusantium quibusdam saepe neque obcaecati fugit nostrum unde?</p>
                </div>
                <div className="service-item-container w-full flex flex-col lg:flex-row justify-between gap-y-10">
                    <p className='w-full text-2xl'>01/ WEB DESIGN</p>
                    <p className='w-full text-xl md:text-2xl lg:text-4xl'>&emsp;&emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellendus ut atque omnis molestiae adipisci provident. Numquam incidunt tempore temporibus itaque? Beatae accusantium quibusdam saepe neque obcaecati fugit nostrum unde?</p>
                </div>
                <div className="service-item-container w-full flex flex-col lg:flex-row justify-between gap-y-10">
                    <p className='w-full text-2xl'>01/ WEB DESIGN</p>
                    <p className='w-full text-xl md:text-2xl lg:text-4xl'>&emsp;&emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellendus ut atque omnis molestiae adipisci provident. Numquam incidunt tempore temporibus itaque? Beatae accusantium quibusdam saepe neque obcaecati fugit nostrum unde?</p>
                </div>
                
            </div>
        </div>
        <div className="services-marquee text-secondary-blue-light "><p>Creative & Design</p>
            </div>
    </div>
  )
}

export default Services
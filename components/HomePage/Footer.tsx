import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-screen flex justify-center items-center bg-primary-dark">
      <div className=" flex flex-col w-10/12 text-primary-light">
        <div className="w-full flex justify-between py-10 xl:py-20 2xl:py-32 gap-y-10 md:gap-y-16 items-start flex-col xl:flex-row">
            <div className="w-full flex flex-col gap-y-8 justify-center ">
                <h1 className="text-5xl md:text-7xl font-medium">Keep <br/> in touch</h1>
                <p className="text-3xl md:text-5xl md:font-light tracking-wider"><Link href="mailto:xyz@gmail.com">hello@clienet.in</Link></p>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-1 justify-between gap-8 xl:gap-14">
              <div className=" md:flex justify-start items-start flex-col">
                <h3 className=" font-semibold pb-5 text-2xl md:text-4xl">New York</h3>
                <div className="flex flex-col w-full gap-y-1 text-xl md:text-2xl">
                <p>4th floor</p>
                <p>Hudson Avenue</p>
                <p>United States</p>
                </div>
              </div>
              <div className=" md:flex justify-start items-start flex-col">
                <h3 className=" font-semibold pb-5 text-2xl md:text-4xl">Warsaw</h3>
                <div className="flex flex-col w-full gap-y-1 text-xl md:text-2xl">
                <p>5th floor</p>
                <p>44, Domaniewska</p>
                <p>Poland</p>
                </div>
              </div>
              <div className=" flex justify-start items-start flex-col">
                <h3 className=" font-semibold pb-5 text-2xl md:text-4xl">Menu</h3>
                <div className="flex flex-col w-full gap-y-1 text-xl md:text-2xl">
                <p><Link href="/" className="link after:bg-primary-light">Home</Link></p>
                <p><Link href="/" className="link after:bg-primary-light">About</Link></p>
                <p><Link href="/" className="link after:bg-primary-light">Cases</Link></p>
                <p><Link href="/" className="link after:bg-primary-light">Contacts</Link></p>
                </div>
              </div>
              <div className=" flex justify-start items-start flex-col">
                <h3 className=" font-semibold pb-5 text-2xl md:text-4xl">Socials</h3>
                <div className="flex flex-col w-full gap-y-1 text-xl md:text-2xl">
                <p><Link href="/" className="link after:bg-primary-light">Instagram</Link></p>
                <p><Link href="/" className="link after:bg-primary-light">Twitter</Link></p>
                <p><Link href="/" className="link after:bg-primary-light">LinkedIn</Link></p>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full flex justify-between py-6 items-center" style={{borderTop :  "1px solid #fff"}}>
            <div className=" inline-block"><p>©2023 All Rights Reserved</p></div>
            <div className=" inline-block"><p>Made with love</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

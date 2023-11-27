import Image from "next/image";
import React from "react";
import { Socials } from "../contants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center  px-6 md:px-40 backdrop-blur-sm">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-semibold overflow-hidden">
          <Link
            href={"/"}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"
          >
            Niladri.
          </Link>
        </h1>
      </div>

      <div className="md:flex flex-row md:gap-12 mb-2 items-center hidden">
        {Socials.map((social) => (
          <Link key={social.name} href={social?.link}>
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className={`w-6 h-6 md:w-8 ${
                social?.name === "Linkedin" ? "md:w-16 md:h-12" : "md:h-7"
              } object-contain`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

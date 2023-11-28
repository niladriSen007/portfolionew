"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Experience = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
    >
      <motion.div
        className="hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          transition: {
            type: "spring",
            damping: 5,
            stiffness: 300,
            duration: 2,
            delay: 1,
          },
        }}
      >
        <div className=" absolute top-32 text-center md:text-left  md:top-40  -right-12 md:right-[600px]  px-16 md:px-0 text-white flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 justify-center">
          <div>
            <Image
              src={"/tcs.png"}
              alt=""
              width={2400}
              height={2400}
              className="w-24 h-24 object-contain rounded-full bg-gray-400  relative z-40 "
            />
          </div>
          <div className="w-72 md:w-96 flex flex-col gap-1 md:gap-2">
            <p className="font-bold text-lg md:text-2xl">
              Tata Consultancy Services
            </p>
            <p className="text-base">Systems Engineer</p>
            <p>2023 - Present</p>
            <p className="text-xs">
              Led a dynamic team of React, GraphQL, and Tailwind CSS developers
              at TCS, spearheading a cutting-edge project. Orchestrated seamless
              collaboration to deliver innovative solutions, leveraging the
              power of React for frontend, GraphQL for efficient data
              management, and Tailwind CSS for a sleek design. .
            </p>
          </div>
        </div>
        {/* <div className=" absolute bottom-40 left-[340px] text-white flex flex-row-reverse items-start gap-8 justify-center"> */}
        <div className=" absolute bottom-16 text-center md:text-right  md:bottom-40  -left-10 md:left-[340px]  px-16 md:px-0 text-white flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-8 justify-center">
          <div>
            <Image
              src={"/cognizant.png"}
              alt=""
              width={2400}
              height={2400}
              className="w-24 h-24 object-contain rounded-full bg-gray-400 relative z-50"
            />
          </div>
          <div className="w-72 md:w-96 flex flex-col gap-1 md:gap-2">
            <p className="font-bold text-2xl">Cognizant Technology Solutions</p>
            <p className="text-base">Programmer</p>
            <p>2021 - 2023</p>
            <p className="text-xs">
              Team member where I worked with a team in PL/SQL and everyday
              meeting the client requirement. Got the Best team member award for
              two consecutive months and our team got the best team award where
              I contributed a valuable role.
            </p>
          </div>
        </div>
        <div className="w-1 h-[340px] bg-white top-64 left-[825px] absolute z-40"></div>
        <div className="w-4 h-4 bg-white top-96 rounded-full left-[818px] absolute z-50 hover:scale-105 cursor-pointer"></div>
        <div className="w-8 h-8 border-white border-2 top-[400px] rounded-full left-[810px] absolute z-50 hover:scale-105"></div>
      </motion.div>
      <div className="flex flex-col gap-16 my-32 items-center justify-center md:hidden">
        <div className="text-center  px-16 md:px-0 text-white flex flex-col items-center  gap-4  justify-center">
          <div>
            <Image
              src={"/tcs.png"}
              alt=""
              width={2400}
              height={2400}
              className="w-24 h-24 object-contain rounded-full bg-gray-400  relative z-40 "
            />
          </div>
          <div className="w-72 md:w-96 flex flex-col gap-1 md:gap-2">
            <p className="font-bold text-lg md:text-2xl">
              Tata Consultancy Services
            </p>
            <p className="text-base">Systems Engineer</p>
            <p>2023 - Present</p>
            <p className="text-xs">
              Led a dynamic team of React, GraphQL, and Tailwind CSS developers
              at TCS, spearheading a cutting-edge project. Orchestrated seamless
              collaboration to deliver innovative solutions, leveraging the
              power of React for frontend, GraphQL for efficient data
              management, and Tailwind CSS for a sleek design. .
            </p>
          </div>
        </div>
        {/* <div className=" absolute bottom-40 left-[340px] text-white flex flex-row-reverse items-start gap-8 justify-center"> */}
        <div className=" text-center text-white flex flex-col md:flex-row-reverse items-center md:items-start gap-4 justify-center">
          <div>
            <Image
              src={"/cognizant.png"}
              alt=""
              width={2400}
              height={2400}
              className="w-24 h-24 object-contain rounded-full bg-gray-400 relative z-50"
            />
          </div>
          <div className="w-72 md:w-96 flex flex-col gap-1 md:gap-2">
            <p className="font-bold text-2xl">Cognizant Technology Solutions</p>
            <p className="text-base">Programmer</p>
            <p>2021 - 2023</p>
            <p className="text-xs">
              Team member where I worked with a team in PL/SQL and everyday
              meeting the client requirement. Got the Best team member award for
              two consecutive months and our team got the best team award where
              I contributed a valuable role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;

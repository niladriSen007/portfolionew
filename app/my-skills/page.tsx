"use client";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SkillData } from "../contants";
import Transition from "../components/Transition";

const MySkills = () => {
  const [isMount, setIsMount] = useState(false);
  const [imgCount, setImgCount] = useState(5);
  const [percentage, setPercentage] = useState(80);

  const updateImgCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      setImgCount(2);
      setPercentage(90)
    } else {
      setImgCount(5);
      setPercentage(80)
    }
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsMount(true);
    }, 100);

    updateImgCount();

    window.addEventListener("resize", updateImgCount);

    return () => {
      clearTimeout(transitionTimeout);
      window.removeEventListener("resize", updateImgCount);
    };
  }, []);
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      {isMount && <Transition />}
      <div className="flex flex-col gap-20  text-center items-center mt-96 md:mt-36 mb-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[42px] md:text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-base md:text-[20px] px-6 md:px-0">
            Using the latest tech this world has to offer
          </p>
        </div>
        {/* <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper
          slidesPerView={imgCount}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className={`max-w-[${percentage}%]`}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="hover:scale-105 cursor-pointer transition-all duration-300">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper
          slidesPerView={imgCount}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            // reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className={`max-w-[${percentage}%]`}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <motion.div 
        initial={{ scale:0 }}
        animate={{ scale:1 }}
        exit={{ scale:0 }}
        transition={{
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 80,
            delay: 4000,
          },
        }}
        className="grid grid-cols-2 gap-12 md:grid-cols-5 md:gap-24">
        {SkillData.map((skill, index) => (
            <div key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MySkills;

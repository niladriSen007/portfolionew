"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiSkills, GiSoapExperiment, GiProgression } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { useEffect, useState } from "react";
import { NavLinks1, NavLinks2 } from "./contants";
import { useRouter } from "next/navigation";

export default function Home() {
  const [menuAnim, setMenuAnim] = useState(false);
  const [menuTextAnim, setMenuTextAnim] = useState(false);
  const [isMount,setIsMount] = useState(false)

  const router = useRouter();


    // useEffect(()=>{
    //     const transitionTimeout = setTimeout(()=>{
    //         setIsMount(true)
    //     },100)

    //     return ()=>clearTimeout(transitionTimeout)
    // },[])


  return (
    <main className="w-screen h-screen relative">
      
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 50,
            delay: 1,
          },
        }}
        onMouseOver={() => {
          setMenuAnim(true);
        }}
        onMouseLeave={() => {
          setMenuAnim(false);
        }}
        className="w-12 rounded-full h-40 md:h-48  absolute border border-white right-6 md:right-20 bottom-8 md:bottom-20 flex flex-col gap-4 items-center justify-center text-white z-50 overflow-x-hidden hover:p-2 hover:w-40 md:hover:w-48  md:hover:h-48  hover:rounded-full transition-all duration-500 cursor-pointer"
      >
        <div className={`flex  gap-4  ${menuAnim ? "flex-row" : "flex-col"}`}>
          {NavLinks1?.map((n) => (
            <>
              <p
                // href={n?.name}
                onClick={() => {
                  router.push(n?.name);
                }}
                key={n?.name}
                className="relative"
                // onMouseOver={() => {
                //   setMenuTextAnim(true);
                // }}
                // onMouseLeave={() => {
                //   setMenuTextAnim(false);
                // }}
              >
                <n.icon size={menuAnim ? 32 : 24} />
              </p>
              {/* { menuTextAnim &&
                <div className="absolute top-3">
                  <span>{n?.text}</span>
                </div>
              } */}
            </>
          ))}
          {/* <p>
            <GiSkills size={menuAnim ? 32 : 24} />
          </p>
          <p>
            <GiProgression size={menuAnim ? 32 : 24} />
          </p> */}
        </div>
        <div className={`flex  gap-4  ${menuAnim ? "flex-row" : "flex-col"}`}>
          {/* <p>
            <GiSoapExperiment size={menuAnim ? 32 : 24} />
          </p>
          <p>
            <IoIosContact size={menuAnim ? 32 : 24} />
          </p> */}
          {NavLinks2?.map((n) => (
            <Link href={n?.name} key={n?.name}>
              <n.icon size={menuAnim ? 32 : 24} />
            </Link>
          ))}
        </div>
      </motion.div>
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          exit={{ x: -800 }}
          transition={{
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 50,
              delay: 1,
            },
          }}
          className="pl-8 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[780px]"
        >
          <h1 className="text-[44px] md:text[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 text-4xl md:text-5xl font-black ">
              {" "}
              Niladri.
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 py-4">
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.7 }}
              whileInView={{ opacity: 1 }}
              className="w-40 rounded-md border border-white hover:border-transparent transition-all duration-500 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-4 py-1 text-lg text-white h-10"
            >
              <Link href="/my-skills">Learn more</Link>
            </motion.button>
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.7 }}
              whileInView={{ opacity: 1 }}
              className="w-40 rounded-md border border-white hover:border-transparent transition-all duration-500 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-4 py-1 text-lg text-white h-10"
            >
              <Link href="/my-projects">
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                My projects
              </Link>
            </motion.button>
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.7 }}
              whileInView={{ opacity: 1 }}
              className="w-40 rounded-md border border-white hover:border-transparent transition-all duration-500 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-4 py-1 text-lg text-white h-10"
            >
              <Link href="/contact-me">
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                Contact me
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
      transition={{
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 50,
          delay: 60,
        },
      }}
      className="absolute flex bottom-10 z-[20] left-8 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-md border border-white hover:border-transparent transition-all duration-300 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-2 py-1 text-base text-white h-9 "
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-md border border-white hover:border-transparent transition-all duration-300 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-2 py-1 text-base text-white h-9 "
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-md border border-white hover:border-transparent transition-all duration-300 group relative hover:bg-gradient-to-r from-purple-500 to-red-500 hover:bg-blue-400 px-2 py-1 text-base text-white h-9 "
        >
          Contact me
        </Link>
      </motion.div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}

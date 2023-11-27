"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
    image: string;
    title: string;
    text: string;
    linkedinLink:string,
    githubLink:string
}

const ProjectCard = ({ image, title, text,linkedinLink,githubLink}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const router = useRouter()

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onMouseOver={handleFlip}
    onMouseLeave={()=>{
      setIsFlipped(!isFlipped)
      setIsAnimating(false)}}
    className='w-80 md:w-[560px] h-48 md:h-[280px] rounded-md cursor-pointer object-contain mb-16 md:mb-0'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        // onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute  inset-0 w-full h-full text-[20px]  hidden group-hover:flex flex-col gap-4 items-center z-[20] justify-center'>
                    <Link href={githubLink} className='bg-gradient-to-r from-blue-700 to-violet-700 p-2 rounded-md py-1'>Github</Link>
                    <Link href={linkedinLink} className='bg-gradient-to-r from-blue-700 to-violet-700 p-2 rounded-md py-1'>Demo</Link>
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
                  <div className='flex flex-col gap-20 py-3 z-30'>
                    <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                    <p className='text-gray-200 text-[20px]'>
                        {text}
                    </p>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard
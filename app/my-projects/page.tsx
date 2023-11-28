"use client"


import React, { useEffect, useState } from 'react'
import { Projects } from '../contants'
import ProjectCard from '../components/ProjectCard'
import Transition from '../components/Transition'

const Page = () => {
    const [isMount,setIsMount] = useState(false)

    useEffect(()=>{
        const transitionTimeout = setTimeout(()=>{
            setIsMount(true)
        },100)

        return ()=>clearTimeout(transitionTimeout)
    },[])
  return (
    <div
    style={{backgroundImage: "url(/bg-2.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
         {isMount && <Transition />}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5  md:w-[70%] mt-[520px] md:my-0'>
        <p className='text-white text-center text-4xl my-16 overflow-hidden font-bold  md:hidden'>My Projects</p>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              linkedinLink={project?.linkedinLink}
              githubLink={project?.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
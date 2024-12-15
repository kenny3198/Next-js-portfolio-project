'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML, CSS $ JS</li>
                <li>Next js</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Vue School.io</li>
                <li>Cursera</li>
                <li>Developer BootCamp</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>Vue School.io</li>
                <li>Cursera</li>
                <li>Developer BootCamp</li>
            </ul>
        )
    },
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [ isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      })
    }
  return <section className='text-white'>
    <div  className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
         <Image src='/images/about-image.png' 
         alt='about-image'
           width={500}
           height={500}
         />
         <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>I am a Fullstack web developer with a passion for creating
         interactive and responsive web application. I have experience working with JavaScript,
          React, redux, Next js, Typescript, Tailwind and Git. I am a quick learner and i am always 
          looking to expand my knowledge and skills set. 
          I am a team player and am exited to work with others to create amazing applications.</p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {""}  Skills {""}
              </TabButton>
              <TabButton selectTab={() =>handleTabChange("education")} active={tab === "education"}>
                    {""} Education {""}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                       {""} Certification {""}
              </TabButton>
          </div>
          <div className='mt-8'>
                   { TAB_DATA.find((t) => t.id === tab).content }
          </div>
         </div>
    </div>
  </section>
}

export default AboutSection;
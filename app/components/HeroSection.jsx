"use client";
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion";
const HeroSection = () => {
  return <section>
   <div className="grid grid-cols-1 sm:grid-cols-12">
    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left">
    <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
        Hello, I am {" "}
        </span>
        <br/>
     <TypeAnimation
     sequence={[
      "Abdulbaqi",
      1000,
      "Sofware Engineer"
     ]}
     wrapper="span"
     speed={50}
     repeat={Infinity}
    />
      </h1>
     <p className="text-[#ADB7BE] text-base sm:text-lg text-lg lg:text-lg mb-6">A software Engineer (Full stack) 
      with 5 years of Experience
      </p>
      <div>
        <button className="px-6 py-3 mr-4 rounded-full w-full sm:w-fit bg-gradient-to-br 
        from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire me
        </button>
        <button className="px-1 py-1 rounded-full sm:w-fit
         w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
          hover:bg-slate-800 text-white border mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 pyy-3">Download CV</span>
            </button>
      </div>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}
     className="col-span-4 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image src="/images/hero-image.png"
           alt="hero image"
           width={300}
           height={300}
           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
         />
        </div>
    </motion.div>
   </div>
  </section>
}

export default HeroSection
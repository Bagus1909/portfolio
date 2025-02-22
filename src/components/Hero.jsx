import React, { useState } from "react"
import image from "/public/image.png"
import { motion } from "framer-motion"

const Hero = () => {
  const [cvUrl, setCvUrl] = useState(
    "https://drive.google.com/file/d/1rM6UY2B1D-cKOTRFKN0L6EKpt0r9hb_3/view?usp=sharing"
  )
  return (
    <div
      id='home'
      className='px-16 flex flex-col min-h-screen w-full items-center justify-center py-36 md:px-32'
    >
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=''
            className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]'
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'
        >
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl md:leading-tight'>
            Bagus Setiawan
          </h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl'>
            Web Developer
          </h3>
          <p className='md:textbase text-pretty text-sm text-gray-400'>
            Passionate Web Developer with expertise in creating responsive and visually appealing websites. Skilled in
            front-end technologies like React and Tailwind CSS, with a growing interest in full-stack development.
            Committed to delivering user-friendly and innovative web solutions, blending creativity with functionality.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href={cvUrl}
            target='_blank'
            className='bg-gradient-to-r from-blue-500 to-pink-500  font-light md:leading-tight px-2 py-3 rounded-md text-gray-800 hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 block '
          >
            Resume / CV
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

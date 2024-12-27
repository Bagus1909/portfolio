import React from "react"
import { motion } from "framer-motion"
const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div
      id='contact'
      className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <mdiv className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <motion.h1
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-5xl md:text-7xl '>
          <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>
            Get in Touch
          </span>
        </motion.h1>
        <motion.p
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-clip text-lg font-semibold text-gray-500'>
          Want to chat ? Send me an Email through this button and I'll respond whenever I can
        </motion.p>
        <motion.a
          variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6, delay: 0.5 }}
          href='mailto:bagussetiawan19092000@gmail.com'
          className='text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all dur300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>
          Contact Me
        </motion.a>
      </mdiv>
    </div>
  )
}

export default Contact

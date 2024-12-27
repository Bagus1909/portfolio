import React, { useState } from "react"
import Projects from "./Projects"
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
import { BiMenu, BiX } from "react-icons/bi"
import { div } from "framer-motion/client"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly '>
      <a
        href='#home'
        className='bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
        Bagus.
      </a>

      <ul className='hidden md:flex gap-10'>
        <a
          href='#home'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Home</li>
        </a>

        <a
          href='#tech'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Tech</li>
        </a>

        <a
          href='#projects'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Projects</li>
        </a>

        <a
          href='#contact'
          className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contact</li>
        </a>
      </ul>

      <ul className='hidden md:flex gap-5'>
        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
          <a
            href='https://www.linkedin.com/in/bagus-setiawan-469147277/'
            target='_blank'
            rel='noopener noreferrer'>
            <BsLinkedin />
          </a>
        </li>

        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
          <a
            href='https://github.com/Bagus1909'
            target='_blank'
            rel='noopener noreferrer'>
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX
          className='block md:hidden text-4xl'
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className='block md:hidden text-4xl'
          onClick={menuOpen}
        />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] fles h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}>
          <ul className='flex flex-col gap-5'>
            <a
              href='#home'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Home</li>
            </a>

            <a
              href='#tech'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Tech</li>
            </a>

            <a
              href='#projects'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Projects</li>
            </a>

            <a
              href='#contact'
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Contact</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-4 mt-5'>
            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
              <a
                href='https://www.linkedin.com/in/bagus-setiawan-469147277/'
                target='_blank'
                rel='noopener noreferrer'>
                <BsLinkedin />
              </a>
            </li>

            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
              <a
                href='https://github.com/Bagus1909'
                target='_blank'
                rel='noopener noreferrer'>
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

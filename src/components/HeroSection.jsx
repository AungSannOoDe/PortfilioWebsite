import { ArrowBigDownIcon, ArrowDown, Facebook, Github, Linkedin } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
  <section  id='home' className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto mt-10 px-6 md:px-10">
    {/* Left Side — Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Hi, I’m <span className="text-blue-500">Mg Aung Sann Oo</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mt-3">
        Full Stack Developer
      </p>

      <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed text-justify md:text-left">
        I’m a passionate Full-Stack Web Developer dedicated to building modern, secure, and
        high-performance web applications that help businesses grow and strengthen their brand.
        I provide end-to-end development services — from UI/UX design to backend development,
        deployment, and long-term maintenance — all focused on creating solutions that engage
        customers and elevate brand awareness.
      </p>

      {/* Buttons & Social Links */}
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-5 py-3 rounded-md flex items-center gap-2 mx-auto md:mx-0">
          <p>Download CV</p>
          <ArrowDown className="w-5 h-5" />
        </button>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Linkedin className="w-10 h-10 text-blue-500 hover:bg-stone-600 hover:text-white transition-all duration-300 rounded-full p-2 cursor-pointer" />
          <Facebook className="w-10 h-10 text-blue-500 hover:bg-stone-600 hover:text-white transition-all duration-300 rounded-full p-2 cursor-pointer" />
          <Github className="w-10 h-10 text-blue-500 hover:bg-stone-600 hover:text-white transition-all duration-300 rounded-full p-2 cursor-pointer" />
        </div>
      </div>
    </div>

    <div className="w-90 h-90 rounded-full border-2 border-stone-700 bg-gray-200 relative"> <img src="/remove-aungsann.png" alt="Logo" className='object-cover absolute top-0 -translate-y-40 left-0 -translate-x-3 ' /> </div>
  </section>
  )
}

export default HeroSection
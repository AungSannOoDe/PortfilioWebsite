"use client"
import { Moon, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import ToggleComponent from './ToggleComponent'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='flex justify-between dark:bg-gray-900 dark:text-white  items-center bg-white/50 shadow h-17 px-4 sm:px-6 text-stone-700 text-lg backdrop-blur-sm sticky top-0 z-50 transition-all duration-300'>
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/bird_2.jpg" 
          alt="Logo" 
          className='w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-110'
        />
      </div>
      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex justify-between gap-8 lg:gap-10'>
          <li className='hover:text-stone-900 cursor-pointer transition-colors duration-500 transform hover:scale-105'>Home</li>
          <li className='hover:text-stone-900 cursor-pointer transition-colors duration-500 transform hover:scale-105'>About</li>
          <li className='hover:text-stone-900 cursor-pointer transition-colors duration-500 transform hover:scale-105'>Contact Us</li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className='flex items-center gap-4'>
        {/* <button className='p-2 hover:bg-stone-100 rounded-full transition-all duration-300 transform hover:scale-110'>
          <Moon size={20} className='transition-transform duration-300 hover:rotate-12' />
        </button> */}
      <ToggleComponent/>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2 hover:bg-stone-100 rounded-full transition-all duration-500'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        fixed top-17 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg
        md:hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <nav className='px-6 py-4'>
          <ul className='flex flex-col gap-4'>
            <li className='hover:text-stone-900 cursor-pointer py-2 border-b border-stone-100 transition-all duration-500 hover:pl-2 hover:bg-stone-50 rounded'>Home</li>
            <li className='hover:text-stone-900 cursor-pointer py-2 border-b border-stone-100 transition-all duration-500 hover:pl-2 hover:bg-stone-50 rounded'>About</li>
            <li className='hover:text-stone-900 cursor-pointer py-2 border-b border-stone-100 transition-all duration-500 hover:pl-2 hover:bg-stone-50 rounded'>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
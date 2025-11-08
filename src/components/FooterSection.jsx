import React from 'react'

const FooterSection = () => {
  return (
<footer
  className="relative py-10 overflow-hidden
  bg-gradient-to-r from-cyan-500 to-blue-500
  dark:from-gray-800 dark:to-gray-900
  text-white"
>
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Left Section */}
    <p className="text-3xl font-semibold">Portfolio</p>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base">
      <a href="#" className="hover:underline">About</a>
      <a href="#" className="hover:underline">Licensing</a>
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
  </div>

  {/* Divider Line */}
  <div className="w-full border-t border-white/30 mt-6"></div>

  {/* Bottom Text */}
  <div className="text-center text-sm mt-4">
    © 2025 <span className="font-semibold">Aung Sann Oo</span>. All Rights Reserved.
  </div>
</footer>

  )
}

export default FooterSection
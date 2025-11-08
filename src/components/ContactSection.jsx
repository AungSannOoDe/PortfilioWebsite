import React from 'react'

const ContactSection = () => {
  return (
<section className="max-w-7xl mx-auto mt-10 px-6 text-center mb-3">
  {/* Header */}
  <div className="relative mb-6">
    <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
    <div className="w-24 h-1 bg-blue-400 mt-2 mx-auto rounded-full"></div>
  </div>

  {/* Description */}
  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
    Whether it’s for freelance projects, educational inquiries, or general discussions, 
    you can contact me anytime via phone call, message, or email using the contact information below.
  </p>

  {/* Email Input */}
  <div className="relative max-w-md mx-auto mb-8">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-400 dark:border-gray-600 rounded-md px-4 py-2 pr-24 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800"
    />
    <button
      className="absolute right-1 top-1 bottom-1 bg-blue-500 hover:bg-blue-600 
                 text-white text-sm px-4 rounded-md transition-all"
    >
      Send
    </button>
  </div>

  {/* Contact Info */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
    {/* Phone */}
    <div>
      <h2 className="text-lg font-semibold">Phone Number</h2>
      <p className="text-blue-500 text-sm">+95 9677513378</p>
    </div>

    {/* Email */}
    <div>
      <h2 className="text-lg font-semibold">Email</h2>
      <a
        href="mailto:aungsannoo962@gmail.com"
        className="text-blue-500 text-sm underline"
      >
        aungsannoo962@gmail.com
      </a>
    </div>

    {/* GitHub */}
    <div>
      <h2 className="text-lg font-semibold">GitHub</h2>
      <a
        href="https://github.com/AungSannOoDe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm underline break-all"
      >
        https://github.com/AungSannOoDe
      </a>
    </div>
  </div>
</section>
  )
}

export default ContactSection
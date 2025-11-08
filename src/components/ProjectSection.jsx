import React from 'react'

const ProjectSection = () => {
    const projects=[
        {
            image:"/pizzaShop.png",
             des:"Pizza Order System"
        },
        {
            image:"/pizza-dash.png",
             des:"Pizza Order Dashboard"
        },{
            image:"/food-shop.png",
             des:"Food Shop System"
        },{
             image:"/furniture.png",
             des:"Furniture Shop System"
        },{
            image:"/Student-System-dash.png",
            des:"Student Voting System"
        },
        {
            image:"/Student-voting.png",
            des:"Student Voting System"
        },
        {
          image:"/mm-pivot.png",
          des:"Myanmar Pivot"
      }
    ]
  return (
<section
  className="
    relative py-10 overflow-hidden
    bg-linear-to-r from-cyan-500 to-blue-500
    dark:bg-linear-to-r dark:from-gray-800 dark:to-gray-900
    text-white
    before:absolute before:w-full before:h-20
    before:rotate-[-1.9deg] before:-inset-1
    dark:before:bg-gray-900
    before:bg-white before:-translate-y-10 before:top-0
  "
>
  <div className="max-w-7xl mx-auto px-5">
    {/* Title */}
    <div className="relative mt-5">
      <h1 className="text-5xl text-center text-black dark:text-white">
        My Projects
      </h1>
      <div className="w-30 h-1 bg-blue-300 dark:bg-blue-500 mt-2 mx-auto"></div>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
      {projects.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300"
        >
          <img src={item.image} alt={item.des} className="w-full" />
          <p className="p-4">{item.des}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default ProjectSection
import React from 'react'

const Education = () => {
  return (
  <section className="mt-16 px-6">
    {/* Section Header */}
    <div className="relative text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold">My Education</h1>
      <div className="w-24 h-1 bg-blue-400 mt-2 mx-auto rounded-full"></div>
    </div>

    {/* Education List */}
    <div className="max-w-4xl mx-auto">
      <ul className="list-disc list-inside space-y-4 text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
        <li>
          I passed my matriculation exam in the <strong>2017–2018</strong> academic year.
        </li>
        <li>
          I began my university studies at the <strong>University of Computer Studies (Hpa-an)</strong> in <strong>2018–2019</strong>.
        </li>
        <li>
          I completed my first <strong>Full Stack Web Development</strong> course at <strong>Code Lab</strong> 
          (instructed by <em>Sayar Kyaw Swar</em>) in <strong>2022–2023</strong>.
        </li>
        <li>
          I took a <strong>Frontend Web Design</strong> course at <strong>MMSIT</strong> 
          (instructed by <em>Sayar Hein Htet Zan</em>) from <strong>February 2024</strong> to <strong>August 2024</strong>.
        </li>
        <li>
          I am currently attending the <strong>Backend Web Development</strong> course at <strong>MMSIT</strong> 
          (instructed by <em>Sayar Hein Htet Zan</em>), which I started in <strong>June 2024</strong>.
        </li>
        <li>
          I am a final-year student at the <strong>University of Computer Studies (Hpa-an)</strong> 
          and will graduate with a <strong>Bachelor of Computer Science (B.C.Sc)</strong> degree in <strong>2026</strong>.
        </li>
      </ul>
    </div>
  </section>

  )
}

export default Education
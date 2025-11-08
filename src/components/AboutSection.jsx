"use client"
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const AboutSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [progressValue, setProgressValue] = useState(0);

  const skills = [
    { name: "HTML", percentage: 80, image: "./html.png" },
    { name: "CSS", percentage: 80, image: "./css.png" },
    { name: "Tailwind", percentage: 80, image: "./tailwind.png" },
    { name: "JavaScript", percentage: 80, image: "./js.png" },
    { name: "PHP", percentage: 80, image: "./php.png" },
    { name: "Java", percentage: 80, image: "./java.png" },
    { name: "Git", percentage: 80, image: "./git.png" },
    { name: "React", percentage: 70, image: "./react.png" },
    { name: "Laravel", percentage: 70, image: "./laravel.png" },
    { name: "Vue", percentage: 70, image: "./vue.png" },
    { name: "NPM", percentage: 70, image: "./npm.png" },
    { name: "Linux", percentage: 70, image: "./linux.png" },
    { name: "MySQL", percentage: 70, image: "./mysql.png" },
    { name: "MongoDB", percentage: 70, image: "./MongoDB.png" },
    { name: "Docker", percentage: 70, image: "./docker.png" },
  ];

  // Animate the progress bar when selectedSkill changes
  useEffect(() => {
    if (selectedSkill) {
      const target = selectedSkill.percentage;
      let current = 0;

      const interval = setInterval(() => {
        current += 2; 
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setProgressValue(current);
      }, 20); 
      return () => clearInterval(interval);
    }
  }, [selectedSkill]);

  return (
    <section className="mt-10 dark:bg-gray-900 dark:text-gray-100" id="about">
      <h1 className="text-5xl text-center font-bold">My Skills</h1>

      {/* Skill Grid */}
      <div className="flex flex-row flex-wrap gap-6 justify-center mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="w-28 h-28 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex flex-col items-center justify-center p-3 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Modal Card */}
      {selectedSkill && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-[300px] text-center relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {/* Skill image */}
            <img
              src={selectedSkill.image}
              alt={selectedSkill.name}
              className="w-20 h-20 mx-auto mb-3 object-contain"
            />
            <h2 className="text-xl font-semibold mb-3">{selectedSkill.name}</h2>

            {/* Animated Progress Bar */}
            <Progress
              value={progressValue}
              className="w-full [&>div]:bg-blue-400 dark:[&>div]:bg-blue-500 [&>div]:transition-all [&>div]:duration-200"
            />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {progressValue}%
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;

"use client";
import { WorkflowIcon, Code2, Palette, Server, Database } from 'lucide-react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ProjectTimeline = () => {
    const experiences = [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Innovations Inc.",
          location: "San Francisco, CA",
          date: "2022 - Present",
          description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines.",
          icon: <Code2 />,
          skills: ["React", "Node.js", "AWS", "TypeScript"]
        },
        {
          title: "Frontend Developer",
          company: "Digital Solutions LLC",
          location: "New York, NY",
          date: "2020 - 2022",
          description: "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces.",
          icon: <Palette />,
          skills: ["JavaScript", "React", "CSS3", "Figma"]
        },
        {
          title: "Backend Developer",
          company: "Data Systems Corp",
          location: "Austin, TX",
          date: "2018 - 2020",
          description: "Built RESTful APIs and managed database systems. Optimized server performance and implemented security protocols.",
          icon: <Server />,
          skills: ["Python", "PostgreSQL", "Docker", "Redis"]
        },
        {
          title: "Junior Developer",
          company: "StartUp Ventures",
          location: "Boston, MA",
          date: "2016 - 2018",
          description: "Started career in web development, learning full-stack technologies and contributing to various projects.",
          icon: <Database />,
          skills: ["HTML5", "CSS3", "JavaScript", "PHP"]
        }
      ];
  return (
    <section className='max-w-7xl mx-auto mt-5'>
        <div className="relative">
        <h1 className='text-5xl text-center'> My Experience</h1>
        {/* <div className="w-20 h-2 mx-auto bg-blue-300 "></div> */}
        </div>
        
        
        <VerticalTimeline lineColor="#4A70A9">
            {
                experiences.map((experience,item)=>(
                    <VerticalTimelineElement key={item}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#473f3d' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={experience.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={experience.icon}
                  >
                <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                    <p>
                     {experience.description}
                    </p>
                  </VerticalTimelineElement>
                ))
                    
            }
        </VerticalTimeline>
    </section>
  )
}

export default ProjectTimeline
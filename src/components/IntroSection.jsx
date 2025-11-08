import { Cable, CloudCog, Cpu, Database, GitMerge, LaptopMinimalCheck, Lightbulb, Settings } from "lucide-react";
import React from "react";

const IntroSection = () => {
  const langs=[{
    name:"Forntend development",
    icon:<LaptopMinimalCheck className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300 " />,
    desc:" I specialize in frontend web development, creating modern,responsive, and visually appealing interfaces that helpbusinesses connect with their audience and enhance their digital presence. Using a combination of HTML, CSS, JavaScript, Bootstrap, TailwindCSS, React.js, Vue.js, and Next.js, I deliver websites and applications that are not only functional but also engaging and user-friendly."
  },
  {
    name:"Backend development",
    icon:<Cpu className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300  " />,
    desc:" I specialize in backend development, building secure, scalable, and high-performance server-side applications that power modern web applications. Using PHP and Java, along with frameworks like Laravel and Spring Boot, I develop robust backend systems that support your business needs. "
  },{
    name:"Version Control",
    icon:<GitMerge className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300  "  />,
    desc:" I specialize in version control using Git, enabling efficient collaboration and code management for software development projects. By utilizing Git's powerful features, I help teams track changes, manage codebases, and streamline workflows to ensure smooth development processes."
  },{
    name:" API Development",
    icon:<Cable className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300  " />,
    desc:"I have solid experience in designing, developing, and integrating RESTful APIs, which are a standard way for different software systems to communicate over the web. Using technologies like Node.js, Express.js, and PHP, I create APIs that are efficient, scalable, and easy to use. My expertise includes implementing best practices for API design, such as proper endpoint structuring, authentication, and data validation, ensuring seamless interaction between frontend and backend systems.",
  },
  {
name:"Database Management",
desc:"I have expertise in database management, working with both relational databases like MySQL and NoSQL databases like MongoDB. I design, implement, and optimize database schemas to ensure efficient data storage and retrieval. My skills include writing complex queries, managing database performance, and ensuring data integrity and security. I also have experience in database migration, backup, and recovery processes to safeguard your data.",
icon:<Database className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300  " />
  },
  {
    name:"DevOps & Deployment",
    desc:"I have hands-on experience in deploying, managing, and maintaining web applications on cloud and server environments. I use modern DevOps tools and practices to ensure your projects are deployed efficiently, securely, and reliably. This includes setting up continuous integration and continuous deployment (CI/CD) pipelines, automating deployment processes, and monitoring application performance to ensure optimal uptime and responsiveness.", 
    icon:<CloudCog className="size-15 text-blue-400 hover:text-blue-400  group-hover:text-white transition-all duration-300  " />
  }
]
  return (
    <section
    className="relative py-10 overflow-hidden 
               bg-linear-to-r from-cyan-500 to-blue-500 
                dark:bg-linear-to-r dark:from-gray-800 dark:to-gray-900
                text-white
               before:absolute before:w-full before:h-20 
               before:rotate-[-1.9deg] before:-inset-1 
               before:bg-white dark:before:bg-gray-900 before:-translate-y-10 before:top-0"
  >
    <div className="max-w-7xl mx-auto px-5">
      {/* Title */}
      <h1 className="text-center text-5xl mt-20 mb-20">About Me</h1>

      {/* Description */}
      <p className="leading-8 text-justify text-black dark:text-gray-200">
        On the frontend, I specialize in React.js and Next.js, building
        interactive and user-friendly interfaces. On the backend, I have
        experience in PHP and Java, working with frameworks like Laravel and
        Spring Boot to create secure and scalable server-side applications. I
        am also proficient in designing and integrating RESTful APIs for
        seamless communication between the frontend and backend. My database
        experience includes MySQL and MongoDB, allowing me to manage,
        optimize, and secure data effectively. Over the past three years, I
        have successfully delivered projects that meet both client
        requirements and industry standards, ensuring high-quality,
        maintainable, and efficient code.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mb-3 justify-items-center">
        {langs.map((lang, index) => (
          <div key={index} className="group">
            <div
              className="flex flex-col items-center w-[350px] px-5 py-6 
                         text-stone-600 bg-white dark:bg-gray-800 
                         dark:text-gray-200 shadow-lg rounded-xl
                         group-hover:bg-stone-600 group-hover:text-white 
                         dark:group-hover:bg-gray-700 transition-all duration-300"
            >
              {lang.icon}
              <h1 className="text-3xl whitespace-nowrap mt-3">{lang.name}</h1>
              <p className="text-sm line-clamp-5 mt-2">{lang.desc}</p>
              <button
                className="bg-blue-400 text-white px-3 py-2 mt-3 rounded
                           hover:bg-blue-500 dark:hover:bg-blue-600 
                           transition-all duration-300"
              >
                Read More..
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
};

export default IntroSection;

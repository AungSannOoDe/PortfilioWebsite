"use client";

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BookCheck, Languages, Presentation, UsersRound } from "lucide-react";

const FinishedProject = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { icon:<Presentation className="text-blue-400 size-20" />, number: 10, label: "Finished Projects" },
    { icon: <UsersRound  className="text-blue-400 size-20"/>, number: 1, label: "Developers" },
    { icon: <BookCheck  className="text-blue-400 size-20" />, number: 4, label: "Certificates" },
    { icon: <Languages className="text-blue-400 size-20"/>, number: 12, label: "lanuages" },
  ];

  return (
    <section className="mt-10">
         <ParallaxProvider >
          <ParallaxBanner
            layers={[
              { image: "/coding.jpg", speed: 20 }, // background image
              {
                speed: 10,
                children: (
                  <div className="relative z-10 text-white text-center py-16 bg-black/50 backdrop-blur-sm h-screen flex flex-col justify-center">
                    <h2 className="text-5xl  mb-10">Fun Facts</h2>
                    <div
                      ref={ref}
                      className="grid grid-cols-2 md:grid-cols-4  text-center"
                    >
                      {stats.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div className="text-5xl">{item.icon}</div>
                          <h3 className="text-3xl font-semibold">
                            {inView && <CountUp end={item.number} duration={2.5} />}
                          </h3>
                          <p className="text-lg">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
            ]}
            className="h-[800px]"
          />
        </ParallaxProvider>
    </section>
   
  );
};

export default FinishedProject;

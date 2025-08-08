import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hackathon = () => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.8], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const hackathonData = [
    {
      date: "2023",
      title: "UI/UX designeothon - Tutedude",
      
      tech: ["figma", "Canva" , "BEHANCE"],
      description: "",
      achievements: [
       
      ]
    },
    {
      date: "2023",
      title: "Code Sprint 1.0 hosted by Google Developer club",
      
      tech: ["HTML", "CSS", "REACT" , "DSA"],
      description: "",
      achievements: [
       
      ]
    },
    {
      date: "2024",
      title: "NER hackathon - Assam Government",
      
      tech: ["AI", "ML", "REACT"],
      description: "",
      achievements: [
       
      ]
    },
    {
      date: "2025",
      title: "Tinker Tutor Ideathon",
      
      tech: ["JAVASCRIPT", "REACT", "MongoDb"],
      description: "",
      achievements: [
        
      ]
    } ,
    {
      date: "2025",
      title: "Code-Bharat 2.0",
      
      tech: ["JWT", "AI", "React " , "MongoDb"],
      description: "",
      achievements: [
        
      ]
    },
    {
      date: "2025",
      title: "Scaler School of Technology in collaboration with HackwithIndia",
      
      tech: ["ML", "JAVASCRIPT", "React"],
      description: "",
      achievements: [
        
      ]
    },
    {
      date: "2025",
      title: "Web and Design Society - IIT Bhubaneswar",
      
      tech: ["ANIMATION", "JAVASCRIPT", "React"],
      description: "",
      achievements: [
        
      ]
    }
  ];

  return (
    <section className="c-space section-spacing" id="hackathons">
      <h2 className="text-heading">Hackathon Diaries</h2>
      <div className="relative pb-20" ref={containerRef}>
        <div ref={ref}>
          {hackathonData.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                  <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                </div>
                <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                  <h3>{hack.date}</h3>
                  <h3 className="text-3xl text-neutral-400">{hack.title}</h3>
                  <h3 className="text-2xl text-purple-400">{hack.prize}</h3>
                </div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                  <h3>{hack.date}</h3>
                  <h3>{hack.title}</h3>
                  <h3 className="text-purple-400">{hack.prize}</h3>
                </div>
                
                <div className="mb-4">
                  <p className="mb-3 font-normal text-neutral-400">
                    {hack.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hack.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/20 border border-purple-500/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* < div className="space-y-2">/
                    <h4 className="text-sm font-semibold text-neutral-300">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {hack.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex  gap-2 text-sm text-neutral-400">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-400"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hackathon;